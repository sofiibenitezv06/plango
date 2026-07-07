import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  MapPin,
  Clock,
  CalendarDays,
  Ticket,
  Users,
  Minus,
  Plus,
  Check,
  ChevronRight,
  Zap,
  Navigation,
} from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { getEventById, eventPriceLabel, EVENT_CATEGORIES, eventAddress } from '../data/events.js'
import { getRestaurantById, formatGs } from '../data/restaurants.js'
import { EVENT_ICON, CATEGORY_ICON } from '../lib/icons.js'
import { openDirections } from '../lib/maps.js'
import PaymentPanel from '../components/PaymentPanel.jsx'

const typeLabel = (id) => EVENT_CATEGORIES.find((c) => c.id === id)?.label ?? ''

export default function EventDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addReservation } = useApp()
  const e = getEventById(id)
  const [people, setPeople] = useState(2)
  const [paying, setPaying] = useState(false)
  const [confirmed, setConfirmed] = useState(null)

  if (!e) {
    return (
      <div className="screen">
        <div className="empty">
          <CalendarDays size={44} strokeWidth={1.8} color="var(--muted-2)" style={{ margin: '0 auto 10px' }} />
          <p>No encontramos ese evento.</p>
          <button className="btn btn-outline btn-sm" style={{ marginTop: 16 }} onClick={() => navigate('/events')}>
            Ver todos los eventos
          </button>
        </div>
      </div>
    )
  }

  const Icon = EVENT_ICON[e.category] ?? EVENT_ICON.todos
  const free = e.priceFrom === 0
  const amount = e.priceFrom * people
  const venue = e.restaurantId ? getRestaurantById(e.restaurantId) : null
  const VenueIcon = venue ? CATEGORY_ICON[venue.category] : null
  const dateStr = `${e.weekday} ${e.day} ${e.month}`

  const confirm = (payMethod = null, paid = false) => {
    const code = 'PG-' + Math.floor(1000 + Math.random() * 9000)
    const res = {
      id: `${e.id}-${code}`,
      type: 'event',
      restaurantId: e.restaurantId,
      restaurantName: e.title,
      date: dateStr,
      time: e.time,
      people,
      code,
      payMethod,
      paid,
      amount: free ? 0 : amount,
    }
    addReservation(res)
    setConfirmed(res)
  }

  if (confirmed) {
    return (
      <div className="screen">
        <div className="screen-scroll" style={{ paddingTop: 0 }}>
          <div className="center-col" style={{ padding: '90px 24px 24px' }}>
            <div className="confirm-check">
              <Check size={44} strokeWidth={3} />
            </div>
            <h2 style={{ fontSize: 23, fontWeight: 850, marginTop: 18 }}>
              {free ? '¡Estás anotado!' : '¡Entrada reservada!'}
            </h2>
            <p className="muted" style={{ fontSize: 14, marginTop: 8, lineHeight: 1.5 }}>
              Te esperamos en {e.venue}. Mostrá este código en la entrada.
            </p>

            <div className="ticket">
              <div className="ticket-top">
                <div className="thumb" style={{ background: `linear-gradient(135deg, ${e.gradient[0]}, ${e.gradient[1]})` }}>
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div>
                  <h4>{e.title}</h4>
                  <p className="muted inline-ic" style={{ fontSize: 12.5 }}>
                    <MapPin size={12} strokeWidth={2.4} /> {e.venue}
                  </p>
                </div>
              </div>
              <div className="ticket-perf" />
              <div className="ticket-grid">
                <div><span className="k">Fecha</span><span className="v">{dateStr}</span></div>
                <div><span className="k">Hora</span><span className="v">{e.time}</span></div>
                <div><span className="k">Entradas</span><span className="v">{people}</span></div>
                <div><span className="k">Código</span><span className="v" style={{ color: 'var(--orange-600)' }}>{confirmed.code}</span></div>
              </div>
              <div className="ticket-pay">
                <span>{free ? '✓ Entrada libre' : confirmed.paid ? '✓ Pagado' : 'A pagar en el lugar'}</span>
                <span>{free ? 'Anotado' : `${confirmed.payMethod} · ${formatGs(confirmed.amount)}`}</span>
              </div>
            </div>

            <div style={{ width: '100%', marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button className="btn btn-primary" onClick={() => navigate('/profile')}>Ver mis reservas</button>
              <button className="btn btn-ghost" onClick={() => navigate('/events')}>Volver a eventos</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (paying) {
    return (
      <div className="screen">
        <div className="topbar">
          <button className="icon-btn" onClick={() => setPaying(false)} aria-label="Volver">
            <ChevronLeft size={22} strokeWidth={2.4} />
          </button>
          <h1>Pago de entradas</h1>
        </div>
        <PaymentPanel
          amount={amount}
          note={`${people} ${people === 1 ? 'entrada' : 'entradas'} · ${e.title}`}
          onConfirm={confirm}
        />
      </div>
    )
  }

  return (
    <div className="screen">
      <div className="screen-scroll" style={{ paddingTop: 0, paddingBottom: 100 }}>
        {/* Hero */}
        <div className="detail-hero" style={{ background: `linear-gradient(150deg, ${e.gradient[0]}, ${e.gradient[1]})` }}>
          <div className="detail-hero-bar">
            <button className="icon-btn" onClick={() => navigate(-1)} aria-label="Volver">
              <ChevronLeft size={22} strokeWidth={2.4} />
            </button>
          </div>
          <Icon className="hero-emoji" size={92} strokeWidth={1.4} />
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
              <span className="tag" style={{ background: 'rgba(255,255,255,.92)', color: '#1f2937' }}>
                {typeLabel(e.category)}
              </span>
              {e.tags.filter((t) => t !== typeLabel(e.category)).slice(0, 2).map((t) => (
                <span key={t} className="tag" style={{ background: 'rgba(255,255,255,.92)', color: '#1f2937' }}>{t}</span>
              ))}
            </div>
            <h1>{e.title}</h1>
          </div>
        </div>

        <div className="detail-sheet">
          <p style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{e.tagline}.</p>

          <div className="reserve-badge" style={{ marginTop: 14 }}>
            <Zap size={15} strokeWidth={2.4} /> {free ? 'Entrada libre · anotate en 1 toque' : 'Reservá tu entrada desde la app'}
          </div>

          {/* Datos */}
          <div className="info-grid">
            <div className="info-tile">
              <div className="k">Fecha</div>
              <div className="v inline-ic"><CalendarDays size={14} strokeWidth={2.3} /> {dateStr}</div>
            </div>
            <div className="info-tile">
              <div className="k">Hora</div>
              <div className="v inline-ic"><Clock size={14} strokeWidth={2.3} /> {e.time}</div>
            </div>
            <div className="info-tile">
              <div className="k">Precio</div>
              <div className="v">{eventPriceLabel(e)}</div>
            </div>
            <div className="info-tile">
              <div className="k">Lugar</div>
              <div className="v" style={{ fontSize: 13.5 }}>{e.venue}</div>
            </div>
            <div className="info-tile" style={{ gridColumn: '1 / -1' }}>
              <div className="k">Dirección</div>
              <div className="v inline-ic" style={{ fontSize: 13.5 }}><MapPin size={14} strokeWidth={2.3} /> {eventAddress(e)}</div>
            </div>
          </div>

          {/* Detalles */}
          <h2 className="sheet-h">Detalles</h2>
          <ul className="event-details">
            {e.details.map((d, i) => (
              <li key={i}><Check size={16} strokeWidth={2.6} /> {d}</li>
            ))}
          </ul>

          {/* Local asociado */}
          {venue && (
            <>
              <h2 className="sheet-h">El local</h2>
              <div className="rrow is-link" role="button" tabIndex={0}
                onClick={() => navigate(`/restaurant/${venue.id}`)}
                onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); navigate(`/restaurant/${venue.id}`) } }}
              >
                <div className="thumb" style={{ background: `linear-gradient(135deg, ${venue.gradient[0]}, ${venue.gradient[1]})` }}>
                  {VenueIcon && <VenueIcon size={28} strokeWidth={1.8} />}
                </div>
                <div className="info">
                  <h4>{venue.name}</h4>
                  <p>{venue.city} · {venue.tagline}</p>
                </div>
                <ChevronRight size={18} strokeWidth={2.4} color="var(--muted-2)" style={{ flex: 'none' }} />
              </div>
            </>
          )}

          {/* Cantidad de entradas */}
          <h2 className="sheet-h">{free ? 'Personas' : 'Entradas'}</h2>
          <div className="counter">
            <button className="counter-btn" onClick={() => setPeople((p) => Math.max(1, p - 1))} disabled={people <= 1} aria-label="Menos">
              <Minus size={20} strokeWidth={2.6} />
            </button>
            <span className="counter-val">{people}</span>
            <button className="counter-btn" onClick={() => setPeople((p) => Math.min(8, p + 1))} disabled={people >= 8} aria-label="Más">
              <Plus size={20} strokeWidth={2.6} />
            </button>
          </div>
          {!free && (
            <p className="muted" style={{ fontSize: 13, marginTop: 10, textAlign: 'right' }}>
              Total estimado: <b style={{ color: 'var(--ink)' }}>{formatGs(e.priceFrom * people)}</b>
            </p>
          )}
        </div>
      </div>

      <div className="detail-cta">
        <button
          className="btn btn-ghost"
          style={{ flex: 1 }}
          onClick={() => openDirections(venue || { name: e.venue, address: eventAddress(e), city: e.city })}
        >
          <Navigation size={18} strokeWidth={2.3} /> Cómo llegar
        </button>
        <button className="btn btn-primary" style={{ flex: 1.3 }} onClick={() => (free ? confirm() : setPaying(true))}>
          <Ticket size={18} strokeWidth={2.3} /> {free ? 'Anotarme' : `Reservar ${people > 1 ? people + ' entradas' : 'entrada'}`}
        </button>
      </div>
    </div>
  )
}

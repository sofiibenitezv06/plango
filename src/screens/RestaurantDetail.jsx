import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  Heart,
  Star,
  MapPin,
  Clock,
  Navigation,
  CalendarCheck,
  RefreshCw,
  Tag,
  PenLine,
  Send,
  MapPinOff,
  Ticket,
  Info,
} from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { getRestaurantById, formatGs } from '../data/restaurants.js'
import { openDirections } from '../lib/maps.js'
import { EVENTS } from '../data/events.js'
import { SERVICES } from '../data/categories.js'
import { CATEGORY_ICON, SERVICE_ICON } from '../lib/icons.js'
import { Rating, PriceLevel } from '../components/RestaurantCard.jsx'

export default function RestaurantDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite, user, reviews, addReview } = useApp()
  const r = getRestaurantById(id)
  const [toast, setToast] = useState('')

  // composer de reseña
  const [composerOpen, setComposerOpen] = useState(false)
  const [myRating, setMyRating] = useState(0)
  const [myText, setMyText] = useState('')

  if (!r) {
    return (
      <div className="screen">
        <div className="empty">
          <MapPinOff size={44} strokeWidth={1.8} color="var(--muted-2)" style={{ margin: '0 auto 10px' }} />
          <p>No encontramos ese lugar.</p>
          <button className="btn btn-outline btn-sm" style={{ marginTop: 16 }} onClick={() => navigate('/home')}>
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  const CatIcon = CATEGORY_ICON[r.category]
  const fav = isFavorite(r.id)
  const myReviews = reviews[r.id] || []
  const allReviews = [
    ...myReviews.map((rv) => ({ ...rv, _key: rv.id })),
    ...r.reviews.map((rv, i) => ({ ...rv, _key: `${r.id}-s${i}` })),
  ]
  const totalReviews = r.reviewsCount + myReviews.length
  const upcomingEvent = EVENTS.find((ev) => ev.restaurantId === r.id)

  const onFav = () => {
    toggleFavorite(r.id)
    setToast(fav ? 'Quitado de favoritos' : 'Guardado en favoritos')
    setTimeout(() => setToast(''), 1600)
  }

  const submitReview = () => {
    if (myRating === 0) return
    addReview(r.id, {
      id: 'u' + Date.now(),
      user: user?.name?.split(' ')[0] || 'Vos',
      rating: myRating,
      text: myText.trim() || 'Recomendado 👍',
      date: 'ahora',
      mine: true,
    })
    setMyRating(0)
    setMyText('')
    setComposerOpen(false)
    setToast('¡Gracias! Tu reseña se publicó')
    setTimeout(() => setToast(''), 1800)
  }

  return (
    <div className="screen">
      <div className="screen-scroll" style={{ paddingTop: 0, paddingBottom: 96 }}>
        {/* Hero */}
        <div
          className="detail-hero"
          style={{ background: `linear-gradient(150deg, ${r.gradient[0]}, ${r.gradient[1]})` }}
        >
          <div className="detail-hero-bar">
            <button className="icon-btn" onClick={() => navigate(-1)} aria-label="Volver">
              <ChevronLeft size={22} strokeWidth={2.4} />
            </button>
            <button className="icon-btn" onClick={onFav} aria-label="Favorito">
              <Heart size={19} strokeWidth={2.3} fill={fav ? '#ef4444' : 'none'} color={fav ? '#ef4444' : '#1f2937'} />
            </button>
          </div>
          {CatIcon && <CatIcon className="hero-emoji" size={94} strokeWidth={1.4} />}
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
              {r.tags.map((t) => (
                <span key={t} className="tag" style={{ background: 'rgba(255,255,255,.92)', color: '#1f2937' }}>
                  {t}
                </span>
              ))}
            </div>
            <h1>{r.name}</h1>
          </div>
        </div>

        {/* Hoja */}
        <div className="detail-sheet">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Rating value={r.rating} />
                <span className="muted" style={{ fontSize: 13 }}>
                  {totalReviews > 0 ? `· ${totalReviews} reseña${totalReviews === 1 ? '' : 's'} en PlanGo` : '· en Google'}
                </span>
              </div>
              <p className="muted inline-ic" style={{ fontSize: 13.5, marginTop: 4 }}>
                <MapPin size={14} strokeWidth={2.3} /> {r.city} · {r.distanceKm} km
              </p>
            </div>
            <span className={'status-tag' + (r.openNow ? ' open' : ' closed')}>
              <span className={'dot' + (r.openNow ? ' on' : '')} />
              {r.openNow ? 'Abierto ahora' : 'Cerrado'}
            </span>
          </div>

          <p style={{ marginTop: 12, fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink-soft)' }}>
            {r.tagline}.
          </p>

          {r.promo?.active && (
            <div className="promo-banner" style={{ marginTop: 14 }}>
              <Tag size={18} strokeWidth={2.3} />
              {r.promo.text}
            </div>
          )}

          {upcomingEvent && (
            <button
              type="button"
              className="event-here"
              onClick={() => navigate(`/event/${upcomingEvent.id}`)}
            >
              <span className="event-here-ic"><Ticket size={18} strokeWidth={2.3} /></span>
              <span className="event-here-txt">
                <b>Evento próximo aquí</b>
                {upcomingEvent.title} · {upcomingEvent.weekday} {upcomingEvent.day} {upcomingEvent.month}
              </span>
              <ChevronLeft size={18} strokeWidth={2.4} style={{ transform: 'rotate(180deg)', flex: 'none' }} />
            </button>
          )}

          {/* Datos rápidos */}
          <div className="info-grid">
            <div className="info-tile">
              <div className="k">Precio por persona</div>
              <div className="v" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <PriceLevel level={r.priceLevel} />
                {formatGs(r.priceFrom)} – {formatGs(r.priceTo).replace('Gs. ', '')}
              </div>
            </div>
            <div className="info-tile">
              <div className="k">Horario</div>
              <div className="v inline-ic"><Clock size={14} strokeWidth={2.3} /> {r.hours}</div>
            </div>
            <div className="info-tile" style={{ gridColumn: '1 / -1' }}>
              <div className="k">Dirección</div>
              <div className="v inline-ic" style={{ fontSize: 13.5 }}>
                <MapPin size={14} strokeWidth={2.3} /> {r.address}
              </div>
            </div>
          </div>

          {/* Servicios */}
          <h2 className="sheet-h">Servicios</h2>
          <div className="svc-grid">
            {SERVICES.map((s) => {
              const on = r.services[s.id]
              const SvcIcon = SERVICE_ICON[s.id]
              return (
                <span key={s.id} className={'svc' + (on ? '' : ' off')}>
                  <SvcIcon size={15} strokeWidth={2.2} /> {s.label}
                </span>
              )
            })}
          </div>

          {/* Menú */}
          <div className="sheet-h-row">
            <h2 className="sheet-h" style={{ margin: 0 }}>Menú</h2>
            <span className="tag green"><RefreshCw size={11} strokeWidth={2.6} /> Actualizado {r.menuUpdated}</span>
          </div>
          {r.menu.map((sec) => (
            <div key={sec.section}>
              <div className="menu-section-title">{sec.section}</div>
              {sec.items.map((it) => (
                <div key={it.name} className="menu-item">
                  <span className="name">{it.name}</span>
                  <span className="price">{formatGs(it.price)}</span>
                </div>
              ))}
            </div>
          ))}

          {/* Reseñas */}
          <div className="sheet-h-row">
            <h2 className="sheet-h" style={{ margin: 0 }}>Reseñas ({totalReviews})</h2>
            {!composerOpen && (
              <button className="btn btn-outline btn-sm" onClick={() => setComposerOpen(true)}>
                <PenLine size={15} strokeWidth={2.3} /> Escribir
              </button>
            )}
          </div>

          {composerOpen && (
            <div className="composer fade-up">
              <p style={{ fontSize: 13.5, fontWeight: 700 }}>Tu calificación</p>
              <div className="stars-input" style={{ fontSize: 30, justifyContent: 'flex-start', margin: '6px 0 10px' }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} className={'s' + (n <= myRating ? ' on' : '')} onClick={() => setMyRating(n)} aria-label={`${n} estrellas`}>
                    <Star size={28} strokeWidth={1.5} fill={n <= myRating ? '#eab308' : 'none'} color={n <= myRating ? '#eab308' : 'var(--muted-2)'} />
                  </button>
                ))}
              </div>
              <textarea
                className="input"
                placeholder="Contá cómo te fue: comida, ambiente, atención…"
                value={myText}
                onChange={(e) => setMyText(e.target.value)}
              />
              <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                <button className="btn btn-ghost btn-sm" style={{ flex: 1 }} onClick={() => { setComposerOpen(false); setMyRating(0); setMyText('') }}>
                  Cancelar
                </button>
                <button className="btn btn-primary btn-sm" style={{ flex: 1.4 }} onClick={submitReview} disabled={myRating === 0}>
                  <Send size={15} strokeWidth={2.3} /> Publicar reseña
                </button>
              </div>
            </div>
          )}

          <div className="stack" style={{ marginTop: 12 }}>
            {allReviews.length === 0 && (
              <p className="muted" style={{ fontSize: 13.5, lineHeight: 1.5 }}>
                Todavía no hay reseñas en PlanGo. ¡Sé la primera persona en opinar! 👆
              </p>
            )}
            {allReviews.map((rv) => (
              <div key={rv._key} className={'review' + (rv.mine ? ' mine' : '')}>
                <div className="head">
                  <div className="who">
                    <div className="avatar">{rv.user[0]}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>
                        {rv.user}{rv.mine && <span className="tag green" style={{ marginLeft: 6, height: 20 }}>Vos</span>}
                      </div>
                      <div className="muted" style={{ fontSize: 11.5 }}>{rv.date}</div>
                    </div>
                  </div>
                  <span className="stars-static">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} size={13} strokeWidth={2} fill={n <= rv.rating ? '#eab308' : 'none'} color={n <= rv.rating ? '#eab308' : 'var(--line-2)'} />
                    ))}
                  </span>
                </div>
                <p>{rv.text}</p>
              </div>
            ))}
          </div>

          <div className="data-note">
            <Info size={13} strokeWidth={2.4} />
            Datos de fuentes públicas. Menú, precios y calificación son indicativos y pueden variar.
          </div>
        </div>
      </div>

      {/* CTA fija */}
      <div className="detail-cta">
        <button className="btn btn-ghost" style={{ width: 52, flex: 'none', padding: 0 }} onClick={onFav} aria-label="Favorito">
          <Heart size={20} strokeWidth={2.3} fill={fav ? '#ef4444' : 'none'} color={fav ? '#ef4444' : '#1f2937'} />
        </button>
        <button className="btn btn-ghost" style={{ flex: 1 }} onClick={() => openDirections(r)}>
          <Navigation size={18} strokeWidth={2.3} /> Cómo llegar
        </button>
        <button className="btn btn-primary" style={{ flex: 1.2 }} onClick={() => navigate(`/reserve/${r.id}`)}>
          <CalendarCheck size={18} strokeWidth={2.3} /> Reservar
        </button>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  Users,
  Minus,
  Plus,
  Clock,
  CalendarCheck,
  Check,
  Zap,
  MapPin,
} from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { getRestaurantById } from '../data/restaurants.js'
import { CATEGORY_ICON } from '../lib/icons.js'

const WD = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
const MO = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

function nextDays(n) {
  const out = []
  for (let i = 0; i < n; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    out.push({
      key: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
      label: i === 0 ? 'Hoy' : i === 1 ? 'Mañana' : WD[d.getDay()],
      sub: `${d.getDate()} ${MO[d.getMonth()]}`,
    })
  }
  return out
}

const SLOTS = ['12:00', '12:30', '13:00', '13:30', '14:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30']
const TAKEN = new Set(['13:00', '20:30']) // no disponibles (demo)

export default function Reserve() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addReservation } = useApp()
  const r = getRestaurantById(id)

  const days = nextDays(7)
  const [date, setDate] = useState(days[0])
  const [time, setTime] = useState('20:00')
  const [people, setPeople] = useState(2)
  const [note, setNote] = useState('')
  const [confirmed, setConfirmed] = useState(null)

  if (!r) {
    return (
      <div className="screen">
        <div className="empty">
          <p>No encontramos ese lugar.</p>
          <button className="btn btn-outline btn-sm" style={{ marginTop: 16 }} onClick={() => navigate('/home')}>
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  const CatIcon = CATEGORY_ICON[r.category]

  const confirm = () => {
    const code = 'PG-' + Math.floor(1000 + Math.random() * 9000)
    const res = {
      id: `${r.id}-${code}`,
      restaurantId: r.id,
      restaurantName: r.name,
      date: `${date.label} ${date.sub}`,
      time,
      people,
      code,
      note: note.trim(),
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
            <h2 style={{ fontSize: 23, fontWeight: 850, marginTop: 18 }}>¡Reserva confirmada!</h2>
            <p className="muted" style={{ fontSize: 14, marginTop: 8, lineHeight: 1.5 }}>
              Confirmación automática. Te enviaremos un recordatorio antes de tu visita.
            </p>

            <div className="ticket">
              <div className="ticket-top">
                <div className="thumb" style={{ background: `linear-gradient(135deg, ${r.gradient[0]}, ${r.gradient[1]})` }}>
                  {CatIcon && <CatIcon size={26} strokeWidth={1.8} />}
                </div>
                <div>
                  <h4>{r.name}</h4>
                  <p className="muted" style={{ fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={12} strokeWidth={2.4} /> {r.city}
                  </p>
                </div>
              </div>
              <div className="ticket-perf" />
              <div className="ticket-grid">
                <div>
                  <span className="k">Fecha</span>
                  <span className="v">{confirmed.date}</span>
                </div>
                <div>
                  <span className="k">Hora</span>
                  <span className="v">{confirmed.time}</span>
                </div>
                <div>
                  <span className="k">Personas</span>
                  <span className="v">{confirmed.people}</span>
                </div>
                <div>
                  <span className="k">Código</span>
                  <span className="v" style={{ color: 'var(--orange-600)' }}>{confirmed.code}</span>
                </div>
              </div>
            </div>

            <div style={{ width: '100%', marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button className="btn btn-primary" onClick={() => navigate('/profile')}>
                Ver mis reservas
              </button>
              <button className="btn btn-ghost" onClick={() => navigate('/home')}>
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="screen">
      <div className="topbar">
        <button className="icon-btn" onClick={() => navigate(-1)} aria-label="Volver">
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>
        <h1>Reservar</h1>
      </div>

      <div className="screen-scroll" style={{ paddingTop: 0, paddingBottom: 100 }}>
        <div className="pad">
          {/* Local */}
          <div className="rrow" style={{ marginBottom: 4 }}>
            <div className="thumb" style={{ background: `linear-gradient(135deg, ${r.gradient[0]}, ${r.gradient[1]})` }}>
              {CatIcon && <CatIcon size={28} strokeWidth={1.8} />}
            </div>
            <div className="info">
              <h4>{r.name}</h4>
              <p>{r.city} · {r.address.split(',')[0]}</p>
            </div>
          </div>

          <div className="reserve-badge">
            <Zap size={15} strokeWidth={2.4} /> Confirmación automática, sin llamar
          </div>

          {/* Fecha */}
          <h2 className="reserve-h"><CalendarCheck size={17} strokeWidth={2.3} /> Fecha</h2>
          <div className="day-row">
            {days.map((d) => (
              <button
                key={d.key}
                className={'day-chip' + (date.key === d.key ? ' active' : '')}
                onClick={() => setDate(d)}
              >
                <span className="d-label">{d.label}</span>
                <span className="d-sub">{d.sub}</span>
              </button>
            ))}
          </div>

          {/* Hora */}
          <h2 className="reserve-h"><Clock size={17} strokeWidth={2.3} /> Horario</h2>
          <div className="slot-grid">
            {SLOTS.map((s) => {
              const taken = TAKEN.has(s)
              return (
                <button
                  key={s}
                  disabled={taken}
                  className={'slot' + (time === s ? ' active' : '') + (taken ? ' taken' : '')}
                  onClick={() => setTime(s)}
                >
                  {s}
                </button>
              )
            })}
          </div>

          {/* Personas */}
          <h2 className="reserve-h"><Users size={17} strokeWidth={2.3} /> Personas</h2>
          <div className="counter">
            <button
              className="counter-btn"
              onClick={() => setPeople((p) => Math.max(1, p - 1))}
              disabled={people <= 1}
              aria-label="Menos personas"
            >
              <Minus size={20} strokeWidth={2.6} />
            </button>
            <span className="counter-val">{people}</span>
            <button
              className="counter-btn"
              onClick={() => setPeople((p) => Math.min(12, p + 1))}
              disabled={people >= 12}
              aria-label="Más personas"
            >
              <Plus size={20} strokeWidth={2.6} />
            </button>
          </div>

          {/* Nota */}
          <h2 className="reserve-h">Nota (opcional)</h2>
          <textarea
            className="input"
            placeholder="Ej: mesa en la terraza, festejo de cumpleaños…"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>

      <div className="detail-cta" style={{ position: 'absolute' }}>
        <button className="btn btn-primary" onClick={confirm}>
          Confirmar reserva · {date.label} {time}
        </button>
      </div>
    </div>
  )
}

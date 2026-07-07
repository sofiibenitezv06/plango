import { useNavigate } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'
import { EVENT_ICON } from '../lib/icons.js'
import { EVENT_CATEGORIES, eventPriceLabel } from '../data/events.js'

const typeLabel = (id) => EVENT_CATEGORIES.find((c) => c.id === id)?.label ?? ''

// Tarjeta vertical grande (listado de Eventos).
export function EventCard({ e }) {
  const navigate = useNavigate()
  const Icon = EVENT_ICON[e.category] ?? EVENT_ICON.todos
  const free = e.priceFrom === 0

  return (
    <article className="ecard fade-up" onClick={() => navigate(`/event/${e.id}`)}>
      <div className="ecard-media" style={{ background: `linear-gradient(135deg, ${e.gradient[0]}, ${e.gradient[1]})` }}>
        <div className="date-badge">
          <span className="d">{e.day}</span>
          <span className="m">{e.month}</span>
        </div>
        <Icon className="ecard-ic" size={40} strokeWidth={1.6} />
        <span className={'tag' + (free ? ' green' : '')} style={{ background: free ? undefined : 'rgba(255,255,255,.92)', color: free ? undefined : '#1f2937' }}>
          {eventPriceLabel(e)}
        </span>
      </div>
      <div className="ecard-body">
        <div className="ecard-type">
          <Icon size={14} strokeWidth={2.3} /> {typeLabel(e.category)}
        </div>
        <h3>{e.title}</h3>
        <p className="tagline">{e.tagline}</p>
        <div className="ecard-meta">
          <span className="inline-ic"><MapPin size={13} strokeWidth={2.3} /> {e.venue} · {e.city}</span>
          <span className="inline-ic"><Clock size={13} strokeWidth={2.3} /> {e.weekday} {e.day} {e.month} · {e.time}</span>
        </div>
      </div>
    </article>
  )
}

// Tarjeta compacta horizontal (carrusel de "Próximos eventos" en Inicio).
export function EventCardMini({ e }) {
  const navigate = useNavigate()
  const Icon = EVENT_ICON[e.category] ?? EVENT_ICON.todos
  return (
    <div
      className="emini"
      onClick={() => navigate(`/event/${e.id}`)}
      style={{ background: `linear-gradient(135deg, ${e.gradient[0]}, ${e.gradient[1]})` }}
    >
      <div className="emini-top">
        <div className="date-badge sm">
          <span className="d">{e.day}</span>
          <span className="m">{e.month}</span>
        </div>
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <div>
        <div className="emini-title">{e.title}</div>
        <div className="emini-sub">{e.venue} · {e.time}</div>
      </div>
    </div>
  )
}

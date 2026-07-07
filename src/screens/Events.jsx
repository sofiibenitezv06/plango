import { useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { EVENTS, EVENT_CATEGORIES } from '../data/events.js'
import { EVENT_ICON } from '../lib/icons.js'
import { EventCard } from '../components/EventCard.jsx'

export default function Events() {
  const [type, setType] = useState('todos')

  const list = EVENTS.filter((e) => type === 'todos' || e.category === type)

  return (
    <div className="screen">
      <div className="screen-scroll with-tabs">
        <div className="pad" style={{ paddingTop: 2 }}>
          <p className="h-hello inline-ic">
            <CalendarDays size={15} strokeWidth={2.3} /> Entretenimiento cerca tuyo
          </p>
          <h1 className="h-title">Eventos</h1>
          <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>
            Música, ferias, fiestas y shows en Gran Asunción.
          </p>
        </div>

        {/* Filtros por tipo */}
        <div className="chip-row" style={{ marginTop: 12 }}>
          {EVENT_CATEGORIES.map((c) => {
            const Icon = EVENT_ICON[c.id]
            return (
              <button
                key={c.id}
                className={'chip' + (type === c.id ? ' active orange' : '')}
                onClick={() => setType(c.id)}
              >
                <Icon size={15} strokeWidth={2.3} />
                {c.label}
              </button>
            )
          })}
        </div>

        <div className="section-head">
          <h2>{type === 'todos' ? 'Próximos eventos' : `Resultados (${list.length})`}</h2>
        </div>

        <div className="pad stack">
          {list.length === 0 ? (
            <div className="empty">
              <CalendarDays size={44} strokeWidth={1.8} color="var(--muted-2)" style={{ margin: '0 auto 10px' }} />
              <p style={{ fontWeight: 700, color: 'var(--ink)' }}>Sin eventos de este tipo</p>
              <p style={{ fontSize: 13, marginTop: 4 }}>Probá con otra categoría.</p>
            </div>
          ) : (
            list.map((e) => <EventCard key={e.id} e={e} />)
          )}
        </div>
      </div>
    </div>
  )
}

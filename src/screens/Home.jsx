import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, SlidersHorizontal, Bell, MapPin, Tag, Flame, Sparkles, Ticket } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { CATEGORIES } from '../data/categories.js'
import { RESTAURANTS } from '../data/restaurants.js'
import { EVENTS } from '../data/events.js'
import { applyFilters, recommendFor } from '../data/filter.js'
import { RestaurantCard } from '../components/RestaurantCard.jsx'
import { EventCardMini } from '../components/EventCard.jsx'
import Advantages from '../components/Advantages.jsx'
import { CATEGORY_ICON } from '../lib/icons.js'

export default function Home() {
  const navigate = useNavigate()
  const { user, prefs, filters, setFilters, clearFilters } = useApp()

  const activeFilters =
    filters.city ||
    filters.budget ||
    filters.services.length > 0 ||
    filters.query ||
    filters.category !== 'todos'

  const list = useMemo(() => {
    if (activeFilters) return applyFilters(RESTAURANTS, filters)
    return recommendFor(prefs)
  }, [activeFilters, filters, prefs])

  const promos = RESTAURANTS.filter((r) => r.promo?.active).slice(0, 4)
  const firstName = user?.name?.split(' ')[0]
  const hasFilterBadge = filters.city || filters.budget || filters.services.length > 0

  return (
    <div className="screen">
      <div className="screen-scroll with-tabs">
        {/* Encabezado */}
        <div className="pad" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p className="h-hello">{firstName ? `¡Hola, ${firstName}! 👋` : '¡Hola! 👋'}</p>
            <h1 className="h-title">¿Qué plan tenés hoy?</h1>
            <p className="muted inline-ic" style={{ fontSize: 13, marginTop: 4 }}>
              <MapPin size={14} strokeWidth={2.3} /> {prefs.city}
            </p>
          </div>
          <button className="icon-btn" aria-label="Notificaciones">
            <Bell size={19} strokeWidth={2.2} />
          </button>
        </div>

        {/* Buscador + filtros */}
        <div className="pad" style={{ marginTop: 14, display: 'flex', gap: 10 }}>
          <div className="search" style={{ flex: 1 }}>
            <Search size={19} strokeWidth={2.3} color="var(--muted-2)" />
            <input
              placeholder="Buscar lugar, comida o barrio…"
              value={filters.query}
              onChange={(e) => setFilters({ query: e.target.value })}
            />
          </div>
          <button
            className="icon-btn"
            style={{ width: 50, height: 50, position: 'relative' }}
            onClick={() => navigate('/filters')}
            aria-label="Filtros"
          >
            <SlidersHorizontal size={20} strokeWidth={2.2} />
            {hasFilterBadge && (
              <span style={{ position: 'absolute', top: 8, right: 8, width: 9, height: 9, borderRadius: 999, background: 'var(--orange)' }} />
            )}
          </button>
        </div>

        {/* Categorías */}
        <div className="chip-row" style={{ marginTop: 12 }}>
          {CATEGORIES.map((c) => {
            const Icon = CATEGORY_ICON[c.id]
            return (
              <button
                key={c.id}
                className={'chip' + (filters.category === c.id ? ' active orange' : '')}
                onClick={() => setFilters({ category: c.id })}
              >
                <Icon size={15} strokeWidth={2.3} />
                {c.label}
              </button>
            )
          })}
        </div>

        {/* Promos destacadas */}
        {!activeFilters && promos.length > 0 && (
          <>
            <div className="section-head">
              <h2 className="inline-ic"><Flame size={18} strokeWidth={2.3} color="#f97316" /> Promos de hoy</h2>
            </div>
            <div className="chip-row" style={{ gap: 12 }}>
              {promos.map((r) => (
                <div
                  key={r.id}
                  onClick={() => navigate(`/restaurant/${r.id}`)}
                  className="promo-card"
                  style={{ background: `linear-gradient(120deg, ${r.gradient[0]}, ${r.gradient[1]})` }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Tag size={22} strokeWidth={2.2} />
                    <span className="tag" style={{ background: 'rgba(255,255,255,.92)', color: '#7a5b00', fontSize: 11 }}>
                      PROMO
                    </span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>{r.name}</div>
                    <div style={{ fontSize: 12.5, opacity: 0.95 }}>{r.promo.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Próximos eventos */}
        {!activeFilters && (
          <>
            <div className="section-head">
              <h2 className="inline-ic"><Ticket size={18} strokeWidth={2.3} color="#f97316" /> Próximos eventos</h2>
              <button type="button" className="link-action" onClick={() => navigate('/events')}>
                Ver todos
              </button>
            </div>
            <div className="chip-row" style={{ gap: 12 }}>
              {EVENTS.slice(0, 5).map((e) => (
                <EventCardMini key={e.id} e={e} />
              ))}
            </div>
          </>
        )}

        {/* Ventajas de PlanGo */}
        {!activeFilters && <Advantages />}

        {/* Resultados / recomendaciones */}
        <div className="section-head">
          <h2 className="inline-ic">
            {activeFilters ? `Resultados (${list.length})` : <><Sparkles size={18} strokeWidth={2.3} color="#f59e0b" /> Recomendados para vos</>}
          </h2>
          {activeFilters ? (
            <button type="button" className="link-action" onClick={clearFilters}>
              Limpiar
            </button>
          ) : (
            <button type="button" className="link-action" onClick={() => navigate('/map')}>
              Ver mapa
            </button>
          )}
        </div>

        <div className="pad stack">
          {list.length === 0 && (
            <div className="empty">
              <Search size={44} strokeWidth={1.8} color="var(--muted-2)" style={{ margin: '0 auto 10px' }} />
              <p style={{ fontWeight: 700, color: 'var(--ink)' }}>Sin resultados</p>
              <p style={{ fontSize: 13, marginTop: 4 }}>Probá con otra categoría o limpiá los filtros.</p>
              <button className="btn btn-outline btn-sm" style={{ marginTop: 14 }} onClick={clearFilters}>
                Limpiar filtros
              </button>
            </div>
          )}
          {list.map((r) => (
            <RestaurantCard key={r.id} r={r} />
          ))}
        </div>
      </div>
    </div>
  )
}

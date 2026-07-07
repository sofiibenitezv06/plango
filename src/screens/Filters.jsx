import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { CATEGORIES, CITIES, BUDGETS, SERVICES } from '../data/categories.js'
import { RESTAURANTS } from '../data/restaurants.js'
import { applyFilters } from '../data/filter.js'
import { CATEGORY_ICON, SERVICE_ICON } from '../lib/icons.js'

export default function Filters() {
  const navigate = useNavigate()
  const { filters, setFilters, toggleService, clearFilters } = useApp()

  const count = applyFilters(RESTAURANTS, filters).length

  return (
    <div className="screen">
      <div className="topbar">
        <button className="icon-btn" onClick={() => navigate(-1)} aria-label="Volver">
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>
        <h1>Filtros</h1>
        <button
          type="button"
          className="link-action"
          onClick={clearFilters}
          style={{ marginLeft: 'auto', fontSize: 14 }}
        >
          Limpiar
        </button>
      </div>

      <div className="screen-scroll" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="pad">
          {/* Ciudad */}
          <h2 style={{ fontSize: 15, fontWeight: 800, margin: '12px 0 10px' }}>Ciudad</h2>
          <div className="pill-choices">
            <button
              className={'chip' + (!filters.city ? ' active green' : '')}
              onClick={() => setFilters({ city: '' })}
            >
              Todas
            </button>
            {CITIES.map((c) => (
              <button
                key={c}
                className={'chip' + (filters.city === c ? ' active green' : '')}
                onClick={() => setFilters({ city: filters.city === c ? '' : c })}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Presupuesto */}
          <h2 style={{ fontSize: 15, fontWeight: 800, margin: '22px 0 10px' }}>
            Presupuesto por persona
          </h2>
          <div className="pill-choices">
            <button
              className={'chip' + (!filters.budget ? ' active orange' : '')}
              onClick={() => setFilters({ budget: '' })}
            >
              Cualquiera
            </button>
            {BUDGETS.map((b) => (
              <button
                key={b.id}
                className={'chip' + (filters.budget === b.id ? ' active orange' : '')}
                onClick={() => setFilters({ budget: filters.budget === b.id ? '' : b.id })}
              >
                {b.hint} · {b.label}
              </button>
            ))}
          </div>

          {/* Categoría */}
          <h2 style={{ fontSize: 15, fontWeight: 800, margin: '22px 0 10px' }}>Categoría</h2>
          <div className="select-grid">
            {CATEGORIES.map((c) => {
              const Icon = CATEGORY_ICON[c.id]
              return (
                <button
                  key={c.id}
                  className={'select-card' + (filters.category === c.id ? ' active' : '')}
                  onClick={() => setFilters({ category: c.id })}
                >
                  <Icon className="em" size={20} strokeWidth={2.1} />
                  <span>{c.label}</span>
                </button>
              )
            })}
          </div>

          {/* Servicios */}
          <h2 style={{ fontSize: 15, fontWeight: 800, margin: '22px 0 10px' }}>Servicios</h2>
          <div className="pill-choices">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICON[s.id]
              return (
                <button
                  key={s.id}
                  className={'chip' + (filters.services.includes(s.id) ? ' active orange' : '')}
                  onClick={() => toggleService(s.id)}
                >
                  <Icon size={15} strokeWidth={2.3} />
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="detail-cta" style={{ position: 'absolute' }}>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/home')}
          disabled={count === 0}
        >
          {count === 0 ? 'Sin resultados' : `Ver ${count} ${count === 1 ? 'lugar' : 'lugares'}`}
        </button>
      </div>
    </div>
  )
}

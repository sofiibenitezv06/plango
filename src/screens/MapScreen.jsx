import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, Navigation, MapPin, Hand } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { RESTAURANTS, priceRangeLabel, formatGs } from '../data/restaurants.js'
import { applyFilters } from '../data/filter.js'
import { Rating } from '../components/RestaurantCard.jsx'
import { CATEGORY_ICON } from '../lib/icons.js'

// Fondo de mapa estilizado (calles + río Paraguay), 100% offline.
function MapBackground() {
  return (
    <svg
      className="map-canvas"
      viewBox="0 0 400 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="700" fill="#e6efe1" />
      {Array.from({ length: 40 }).map((_, i) => {
        const x = (i % 5) * 80 + 8
        const y = Math.floor(i / 5) * 90 + 10
        return <rect key={i} x={x} y={y} width="64" height="72" rx="8" fill="#eef4e9" />
      })}
      <path
        d="M-20 120 C 120 180, 60 320, 200 400 S 380 560, 440 640 L 500 720 L -40 720 Z"
        fill="#cfe3f0"
        opacity="0.9"
      />
      <g stroke="#dfe8d8" strokeWidth="10" strokeLinecap="round">
        <line x1="0" y1="230" x2="400" y2="200" />
        <line x1="0" y1="470" x2="400" y2="500" />
        <line x1="150" y1="0" x2="120" y2="700" />
        <line x1="300" y1="0" x2="330" y2="700" />
      </g>
      <g stroke="#fff" strokeWidth="3" strokeDasharray="10 12" opacity="0.7">
        <line x1="0" y1="230" x2="400" y2="200" />
        <line x1="150" y1="0" x2="120" y2="700" />
      </g>
    </svg>
  )
}

export default function MapScreen() {
  const navigate = useNavigate()
  const { filters } = useApp()
  const results = applyFilters(RESTAURANTS, filters)
  const [selectedId, setSelectedId] = useState(null)
  const [routeTo, setRouteTo] = useState(null)
  const selected = results.find((r) => r.id === selectedId)
  const SelIcon = selected ? CATEGORY_ICON[selected.category] : null

  return (
    <div className="screen">
      <div className="map-wrap">
        <MapBackground />

        <div className="map-you" style={{ left: '42%', top: '48%' }} title="Tu ubicación" />

        <div className="map-top pad">
          <div className="search" style={{ boxShadow: 'var(--shadow)' }} onClick={() => navigate('/filters')}>
            <Search size={19} strokeWidth={2.3} color="var(--muted-2)" />
            <input readOnly placeholder="Buscar en el mapa…" style={{ pointerEvents: 'none' }} />
            <span className="tag" style={{ background: 'var(--orange-50)', color: 'var(--orange-600)' }}>
              {results.length} lugares
            </span>
          </div>
        </div>

        {/* Pines */}
        {results.map((r) => {
          const PinIcon = CATEGORY_ICON[r.category]
          return (
            <button
              key={r.id}
              className={'map-pin' + (selectedId === r.id ? ' selected' : '')}
              style={{ left: `${r.map.x}%`, top: `${r.map.y}%` }}
              aria-label={`${r.name} · ${r.city} · desde ${formatGs(r.priceFrom)}`}
              onClick={() => {
                setSelectedId(r.id)
                setRouteTo(null)
              }}
            >
              <span className="bubble">
                <span className="em"><PinIcon size={13} strokeWidth={2.3} aria-hidden="true" /></span>
                {formatGs(r.priceFrom)}
              </span>
              <span className="stem" />
            </button>
          )
        })}

        {/* Hoja inferior con el lugar seleccionado */}
        {selected && (
          <div className="map-sheet">
            <div className="rcard" style={{ padding: 12 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div
                  className="thumb"
                  style={{
                    background: `linear-gradient(135deg, ${selected.gradient[0]}, ${selected.gradient[1]})`,
                    width: 60, height: 60, borderRadius: 14, display: 'grid', placeItems: 'center', color: '#fff', flex: 'none',
                  }}
                >
                  {SelIcon && <SelIcon size={28} strokeWidth={1.8} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                    <h4 style={{ fontSize: 15.5, fontWeight: 800 }}>{selected.name}</h4>
                    <Rating value={selected.rating} />
                  </div>
                  <p className="muted inline-ic" style={{ fontSize: 12.5, marginTop: 2 }}>
                    <MapPin size={13} strokeWidth={2.3} /> {selected.city} · {selected.distanceKm} km · {priceRangeLabel(selected)}
                  </p>
                </div>
                <button className="icon-btn" style={{ width: 32, height: 32 }} onClick={() => setSelectedId(null)} aria-label="Cerrar">
                  <X size={16} strokeWidth={2.4} />
                </button>
              </div>

              {routeTo === selected.id && (
                <div className="promo-banner" style={{ marginTop: 12, background: 'var(--green-50)', color: 'var(--green)' }}>
                  <Navigation size={17} strokeWidth={2.3} />
                  Ruta trazada · {selected.distanceKm} km · ~{Math.round(selected.distanceKm * 3 + 4)} min en auto
                </div>
              )}

              <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                <button className="btn btn-green btn-sm" style={{ flex: 1 }} onClick={() => setRouteTo(selected.id)}>
                  <Navigation size={16} strokeWidth={2.3} /> Cómo llegar
                </button>
                <button className="btn btn-outline btn-sm" style={{ flex: 1 }} onClick={() => navigate(`/restaurant/${selected.id}`)}>
                  Ver ficha
                </button>
              </div>
            </div>
          </div>
        )}

        {!selected && (
          <div className="map-sheet">
            <div className="promo-banner" style={{ justifyContent: 'center', background: 'rgba(255,255,255,.94)', color: 'var(--ink-soft)' }}>
              <Hand size={18} strokeWidth={2.2} /> Tocá un pin para ver el lugar y cómo llegar
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

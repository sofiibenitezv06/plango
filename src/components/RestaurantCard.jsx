import { useNavigate } from 'react-router-dom'
import { Star, Heart, MapPin, Tag, RefreshCw } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { priceRangeLabel } from '../data/restaurants.js'
import { CATEGORY_ICON } from '../lib/icons.js'

export function PriceLevel({ level }) {
  return (
    <span className="price-level" aria-label={`Nivel de precio ${level} de 3`}>
      {[1, 2, 3].map((i) => (
        <span key={i} className={i > level ? 'off' : ''}>
          ₲
        </span>
      ))}
    </span>
  )
}

export function Rating({ value }) {
  return (
    <span className="rating">
      <Star size={14} strokeWidth={2.5} fill="currentColor" className="star" />
      {value.toFixed(1)}
    </span>
  )
}

// Tarjeta vertical grande (usada en Inicio).
export function RestaurantCard({ r }) {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useApp()
  const fav = isFavorite(r.id)
  const CatIcon = CATEGORY_ICON[r.category]

  return (
    <article className="rcard fade-up" onClick={() => navigate(`/restaurant/${r.id}`)}>
      <div
        className="rcard-media"
        style={{ background: `linear-gradient(135deg, ${r.gradient[0]}, ${r.gradient[1]})` }}
      >
        {r.promo?.active && (
          <div className="promo-flag">
            <Tag size={12} strokeWidth={2.5} /> {r.promo.text}
          </div>
        )}
        <button
          className="fav"
          aria-label={fav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite(r.id)
          }}
        >
          <Heart
            size={18}
            strokeWidth={2.4}
            fill={fav ? '#ef4444' : 'none'}
            color={fav ? '#ef4444' : '#1f2937'}
          />
        </button>
        {CatIcon && (
          <span className="media-badge">
            <CatIcon size={26} strokeWidth={2} />
          </span>
        )}
        <span className="status-pill">
          <span className={'dot' + (r.openNow ? ' on' : '')} />
          {r.openNow ? 'Abierto' : 'Cerrado'}
        </span>
      </div>
      <div className="rcard-body">
        <div className="rcard-title">
          <h3>{r.name}</h3>
          <Rating value={r.rating} />
        </div>
        <div className="rcard-sub">
          <span className="inline-ic">
            <MapPin size={13} strokeWidth={2.4} /> {r.city}
          </span>
          <span className="dot-sep">{r.distanceKm} km</span>
        </div>
        <p className="muted" style={{ fontSize: 13, marginTop: 6, lineHeight: 1.4 }}>
          {r.tagline}
        </p>
        <div className="rcard-meta">
          <PriceLevel level={r.priceLevel} />
          <span className="muted" style={{ fontSize: 12.5 }}>
            {priceRangeLabel(r)} · p/persona
          </span>
          {r.menuUpdated === 'hoy' && (
            <span className="tag green" style={{ marginLeft: 'auto' }}>
              <RefreshCw size={11} strokeWidth={2.6} /> Menú al día
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

// Fila horizontal compacta (favoritos, resultados).
export function RestaurantRow({ r }) {
  const navigate = useNavigate()
  const CatIcon = CATEGORY_ICON[r.category]
  return (
    <div className="rrow fade-up" onClick={() => navigate(`/restaurant/${r.id}`)}>
      <div
        className="thumb"
        style={{ background: `linear-gradient(135deg, ${r.gradient[0]}, ${r.gradient[1]})` }}
      >
        {CatIcon && <CatIcon size={28} strokeWidth={1.8} />}
      </div>
      <div className="info">
        <h4>{r.name}</h4>
        <p>
          {r.city} · {priceRangeLabel(r)}
        </p>
        <div style={{ marginTop: 4, display: 'flex', gap: 8, alignItems: 'center' }}>
          <Rating value={r.rating} />
          <span className="muted" style={{ fontSize: 12 }}>
            {r.reviewsCount} reseñas
          </span>
        </div>
      </div>
    </div>
  )
}

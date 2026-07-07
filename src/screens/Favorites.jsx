import { useNavigate } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { RESTAURANTS } from '../data/restaurants.js'
import { RestaurantRow } from '../components/RestaurantCard.jsx'

export default function Favorites() {
  const navigate = useNavigate()
  const { favorites } = useApp()
  const list = RESTAURANTS.filter((r) => favorites.includes(r.id))

  return (
    <div className="screen">
      <div className="screen-scroll with-tabs">
        <div className="topbar">
          <h1 className="inline-ic">
            <Heart size={20} strokeWidth={2.3} fill="#ef4444" color="#ef4444" /> Tus favoritos
          </h1>
        </div>

        {list.length === 0 ? (
          <div className="empty">
            <Heart size={52} strokeWidth={1.6} color="var(--muted-2)" style={{ margin: '0 auto 12px' }} />
            <p style={{ fontWeight: 700, color: 'var(--ink)' }}>Todavía no guardaste lugares</p>
            <p style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>
              Tocá el corazón en cualquier lugar para guardarlo acá y encontrarlo rápido.
            </p>
            <button className="btn btn-primary btn-sm" style={{ marginTop: 18 }} onClick={() => navigate('/home')}>
              Descubrir lugares
            </button>
          </div>
        ) : (
          <div className="pad stack">
            <p className="muted" style={{ fontSize: 13 }}>
              {list.length} {list.length === 1 ? 'lugar guardado' : 'lugares guardados'}
            </p>
            {list.map((r) => (
              <RestaurantRow key={r.id} r={r} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'
import {
  MapPin,
  Wallet,
  Utensils,
  Heart,
  MessageSquare,
  Bell,
  ShieldCheck,
  CalendarCheck,
  Store,
  LogOut,
  ChevronRight,
  Users,
  User,
  Clock,
  Ticket,
} from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { BUDGETS, CATEGORIES } from '../data/categories.js'

export default function Profile() {
  const navigate = useNavigate()
  const { user, prefs, favorites, reservations, reset } = useApp()

  const budgetLabel = BUDGETS.find((b) => b.id === prefs.budget)?.label ?? '—'
  const catLabels = prefs.categories
    .map((id) => CATEGORIES.find((c) => c.id === id)?.label)
    .filter(Boolean)

  const hasName = Boolean(user?.name)
  const initial = user?.name?.[0]?.toUpperCase()

  // Props para una fila de lista accionable por teclado (Enter/Espacio) y mouse.
  const navRow = (path) => ({
    className: 'list-row is-link',
    role: 'button',
    tabIndex: 0,
    onClick: () => navigate(path),
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        navigate(path)
      }
    },
  })

  return (
    <div className="screen">
      <div className="screen-scroll with-tabs">
        <div className="topbar">
          <h1>Perfil</h1>
        </div>

        <div className="pad">
          <div className="profile-head">
            <div className="profile-avatar">
              {hasName ? initial : <User size={24} strokeWidth={2.3} />}
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 850 }}>{user?.name ?? 'Invitado'}</div>
              <div className="muted" style={{ fontSize: 13 }}>{user?.email ?? 'Explorando sin cuenta'}</div>
            </div>
          </div>

          {/* Mis reservas */}
          {reservations.length > 0 && (
            <>
              <div className="section-head" style={{ margin: '20px 2px 10px' }}>
                <h2 className="inline-ic" style={{ fontSize: 16 }}>
                  <CalendarCheck size={17} strokeWidth={2.3} color="var(--green)" /> Mis reservas
                </h2>
              </div>
              <div className="stack" style={{ gap: 10 }}>
                {reservations.map((res) => (
                  <div key={res.id} className={'res-card' + (res.type === 'event' ? ' event' : '')}>
                    <div className="res-left">
                      <h4 className="inline-ic">
                        {res.type === 'event' && <Ticket size={14} strokeWidth={2.4} color="#7c3aed" />}
                        {res.restaurantName}
                      </h4>
                      <p className="inline-ic">
                        <Clock size={13} strokeWidth={2.3} /> {res.date} · {res.time}
                        <span className="dot-sep inline-ic"><Users size={13} strokeWidth={2.3} /> {res.people}</span>
                      </p>
                    </div>
                    <span className="res-code">{res.code}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Preferencias */}
          <div className="section-head" style={{ margin: '20px 2px 10px' }}>
            <h2 style={{ fontSize: 16 }}>Tus preferencias</h2>
            <button type="button" className="link-action" onClick={() => navigate('/preferences')}>
              Editar
            </button>
          </div>
          <div className="list-card">
            <div className="list-row">
              <MapPin className="lic" size={18} strokeWidth={2.2} /> Ciudad
              <span className="chev" style={{ color: 'var(--ink)', fontWeight: 700 }}>{prefs.city}</span>
            </div>
            <div className="list-row">
              <Wallet className="lic" size={18} strokeWidth={2.2} /> Presupuesto
              <span className="chev" style={{ color: 'var(--ink)', fontWeight: 700 }}>{budgetLabel}</span>
            </div>
            <div className="list-row">
              <Utensils className="lic" size={18} strokeWidth={2.2} /> Gustos
              <span className="chev" style={{ color: 'var(--ink)', fontWeight: 700, textAlign: 'right', maxWidth: 180 }}>
                {catLabels.length ? catLabels.join(', ') : 'Sin definir'}
              </span>
            </div>
          </div>

          {/* Accesos */}
          <div className="list-card" style={{ marginTop: 14 }}>
            <div {...navRow('/favorites')}>
              <Heart className="lic" size={18} strokeWidth={2.2} /> Mis favoritos
              <span className="chev inline-ic">{favorites.length} <ChevronRight size={16} strokeWidth={2.4} /></span>
            </div>
            <div {...navRow('/feedback')}>
              <MessageSquare className="lic" size={18} strokeWidth={2.2} /> Dejar mi opinión
              <ChevronRight className="chev" size={16} strokeWidth={2.4} />
            </div>
            <div className="list-row">
              <Bell className="lic" size={18} strokeWidth={2.2} /> Notificaciones
              <ChevronRight className="chev" size={16} strokeWidth={2.4} />
            </div>
            <div className="list-row">
              <ShieldCheck className="lic" size={18} strokeWidth={2.2} /> Privacidad y ubicación
              <ChevronRight className="chev" size={16} strokeWidth={2.4} />
            </div>
          </div>

          {/* Banner comercios (modelo freemium del plan) */}
          <div className="biz-banner" style={{ marginTop: 18 }}>
            <Store className="em" size={72} strokeWidth={1.4} />
            <h3>¿Tenés un comercio?</h3>
            <p>
              Sumá tu restaurante o café a PlanGo y llegá a personas que ya están buscando dónde
              salir. Planes desde Gs. 250.000/mes.
            </p>
            <button
              className="btn btn-sm"
              style={{ marginTop: 14, background: 'var(--yellow)', color: '#7a5b00', width: 'auto' }}
              onClick={() =>
                alert(
                  'Planes para comercios:\n\n• Básico — Gs. 250.000/mes\n• Pro — Gs. 450.000/mes\n• Premium — Gs. 700.000/mes\n\n(Demostración)'
                )
              }
            >
              Conocer los planes →
            </button>
          </div>

          <button
            className="btn btn-ghost inline-ic"
            style={{ marginTop: 18, color: 'var(--danger)' }}
            onClick={() => { reset(); navigate('/') }}
          >
            <LogOut size={17} strokeWidth={2.3} /> Cerrar sesión y reiniciar demo
          </button>

          <p className="muted" style={{ fontSize: 11.5, textAlign: 'center', margin: '16px 0 6px' }}>
            PlanGo · Prototipo · Gran Asunción, Paraguay 🇵🇾
          </p>
        </div>
      </div>
    </div>
  )
}

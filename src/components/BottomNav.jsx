import { NavLink } from 'react-router-dom'
import { Home, Map, Ticket, Heart, User } from 'lucide-react'

const TABS = [
  { to: '/home', label: 'Inicio', Icon: Home, fillActive: true },
  { to: '/map', label: 'Mapa', Icon: Map, fillActive: false },
  { to: '/events', label: 'Eventos', Icon: Ticket, fillActive: false },
  { to: '/favorites', label: 'Favoritos', Icon: Heart, fillActive: true },
  { to: '/profile', label: 'Perfil', Icon: User, fillActive: true },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {TABS.map(({ to, label, Icon, fillActive }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
        >
          {({ isActive }) => (
            <>
              <span className="ic">
                <Icon
                  size={23}
                  strokeWidth={2.2}
                  fill={isActive && fillActive ? 'currentColor' : 'none'}
                />
              </span>
              <span>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

import { RefreshCw, Percent, CalendarCheck, MessageSquare, SquareParking } from 'lucide-react'

// Diferenciales de PlanGo frente a Google Maps / Instagram.
const ADVANTAGES = [
  {
    Icon: RefreshCw,
    color: 'var(--green)',
    bg: 'var(--green-50)',
    title: 'Menú siempre al día',
    text: 'Precios y platos actualizados. En Google o Instagram nunca sabés si siguen vigentes.',
  },
  {
    Icon: Percent,
    color: 'var(--orange-600)',
    bg: 'var(--orange-50)',
    title: 'Promos que no ves en otro lado',
    text: 'Descuentos y 2x1 exclusivos de los locales, reunidos en un solo lugar.',
  },
  {
    Icon: CalendarCheck,
    color: '#7c3aed',
    bg: '#f1e9ff',
    title: 'Reservá en 1 toque',
    text: 'Confirmación automática desde la app, sin llamadas ni esperas.',
  },
  {
    Icon: MessageSquare,
    color: '#b45309',
    bg: '#fef3c7',
    title: 'Reseñas reales y tu opinión',
    text: 'Opiniones de gente que fue de verdad, y podés dejar y comentar la tuya.',
  },
  {
    Icon: SquareParking,
    color: '#2563eb',
    bg: '#e5efff',
    title: '¿Tiene estacionamiento?',
    text: 'Enterate de estacionamiento, wifi, terraza y más antes de salir de casa.',
  },
]

export default function Advantages() {
  return (
    <>
      <div className="section-head">
        <h2>¿Por qué PlanGo?</h2>
      </div>
      <div className="adv-row">
        {ADVANTAGES.map(({ Icon, color, bg, title, text }) => (
          <div className="adv-card" key={title}>
            <span className="adv-ic" style={{ background: bg, color }}>
              <Icon size={20} strokeWidth={2.3} />
            </span>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

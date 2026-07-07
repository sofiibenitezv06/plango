import { useNavigate } from 'react-router-dom'
import { ChevronLeft, MapPin, Wallet, Utensils, Coins, Banknote, CreditCard, Check, ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { CATEGORIES, CITIES, BUDGETS } from '../data/categories.js'
import { CATEGORY_ICON } from '../lib/icons.js'

const catOptions = CATEGORIES.filter((c) => c.id !== 'todos')
const BUDGET_ICON = { bajo: Coins, medio: Banknote, alto: CreditCard }

export default function Preferences() {
  const navigate = useNavigate()
  const { prefs, setPrefs, toggleCategory } = useApp()

  return (
    <div className="screen">
      <div className="topbar">
        <button className="icon-btn" onClick={() => navigate(-1)} aria-label="Volver">
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>
        <h1>Tus preferencias</h1>
      </div>

      <div className="screen-scroll" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="pad">
          <p className="muted" style={{ fontSize: 14, lineHeight: 1.45, marginBottom: 4 }}>
            Contanos qué te gusta para mostrarte planes hechos a tu medida. Podés cambiarlo
            cuando quieras.
          </p>

          {/* Ciudad */}
          <h2 className="pref-h"><MapPin size={17} strokeWidth={2.3} /> ¿Dónde estás?</h2>
          <div className="pill-choices">
            {CITIES.map((city) => (
              <button
                key={city}
                className={'chip' + (prefs.city === city ? ' active green' : '')}
                onClick={() => setPrefs({ city })}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Presupuesto */}
          <h2 className="pref-h"><Wallet size={17} strokeWidth={2.3} /> ¿Cuánto querés gastar?</h2>
          <div className="stack" style={{ gap: 10 }}>
            {BUDGETS.map((b) => {
              const Icon = BUDGET_ICON[b.id]
              return (
                <button
                  key={b.id}
                  className={'select-card green' + (prefs.budget === b.id ? ' active' : '')}
                  onClick={() => setPrefs({ budget: b.id })}
                  style={{ width: '100%' }}
                >
                  <Icon className="em" size={20} strokeWidth={2.1} />
                  <span style={{ flex: 1 }}>{b.label}</span>
                  {prefs.budget === b.id && <Check size={18} strokeWidth={2.6} />}
                </button>
              )
            })}
          </div>

          {/* Gustos */}
          <h2 className="pref-h"><Utensils size={17} strokeWidth={2.3} /> ¿Qué te gusta?</h2>
          <div className="select-grid">
            {catOptions.map((c) => {
              const Icon = CATEGORY_ICON[c.id]
              return (
                <button
                  key={c.id}
                  className={'select-card' + (prefs.categories.includes(c.id) ? ' active' : '')}
                  onClick={() => toggleCategory(c.id)}
                >
                  <Icon className="em" size={20} strokeWidth={2.1} />
                  <span>{c.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="detail-cta" style={{ position: 'absolute' }}>
        <button className="btn btn-primary inline-ic" onClick={() => navigate('/home')}>
          Ver mis recomendaciones <ArrowRight size={18} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  )
}

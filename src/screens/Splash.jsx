import { useNavigate } from 'react-router-dom'
import { Pizza, Coffee, Beef, Wine, ArrowRight } from 'lucide-react'
import { Pin } from '../components/Logo.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function Splash() {
  const navigate = useNavigate()
  const { user } = useApp()

  return (
    <div className="screen">
      <div className="splash">
        <div className="blob" style={{ width: 180, height: 180, background: '#fde68a', top: 40, left: -50 }} />
        <div className="blob" style={{ width: 140, height: 140, background: '#22c55e', bottom: 120, right: -30 }} />

        <div className="splash-hero">
          <div className="brand-lockup">
            <Pin size={58} className="pin" />
            <span className="brand-name">
              Plan<span className="go">Go</span>
            </span>
          </div>
          <p className="splash-tag">
            Encontrá en segundos dónde comer, tomar algo o salir en Gran Asunción.
          </p>
          <div className="splash-illus">
            <span><Pizza size={30} strokeWidth={1.8} /></span>
            <span><Coffee size={30} strokeWidth={1.8} /></span>
            <span><Beef size={30} strokeWidth={1.8} /></span>
            <span><Wine size={30} strokeWidth={1.8} /></span>
          </div>
        </div>

        <div className="splash-actions">
          <button className="btn btn-white inline-ic" onClick={() => navigate(user ? '/home' : '/register')}>
            {user ? 'Continuar' : 'Comenzar'} <ArrowRight size={18} strokeWidth={2.4} />
          </button>
          <button className="link" onClick={() => navigate('/home')}>
            Explorar sin registrarme
          </button>
        </div>
      </div>
    </div>
  )
}

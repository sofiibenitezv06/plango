import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, User, Mail, Lock } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { Wordmark } from '../components/Logo.jsx'

export default function Register() {
  const navigate = useNavigate()
  const { setUser } = useApp()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const valid = name.trim().length > 1 && email.includes('@') && pass.length >= 4

  const submit = (e) => {
    e.preventDefault()
    if (!valid) return
    setUser({ name: name.trim(), email: email.trim() })
    navigate('/preferences')
  }

  return (
    <div className="screen">
      <div className="topbar">
        <button className="icon-btn" onClick={() => navigate('/')} aria-label="Volver">
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>
      </div>
      <div className="screen-scroll" style={{ paddingTop: 0 }}>
        <div className="pad">
          <div style={{ marginBottom: 6 }}>
            <Wordmark size={24} />
          </div>
          <h1 className="h-title" style={{ marginTop: 14 }}>Creá tu cuenta</h1>
          <p className="muted" style={{ fontSize: 14, marginTop: 6, lineHeight: 1.4 }}>
            Guardá tus favoritos, reservá y recibí recomendaciones según tus gustos.
          </p>

          <form onSubmit={submit} style={{ marginTop: 22 }}>
            <div className="field">
              <label>Nombre</label>
              <div className="input-ic">
                <User size={18} strokeWidth={2.2} color="var(--muted-2)" />
                <input placeholder="¿Cómo te llamás?" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <div className="input-ic">
                <Mail size={18} strokeWidth={2.2} color="var(--muted-2)" />
                <input type="email" placeholder="tunombre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label>Contraseña</label>
              <div className="input-ic">
                <Lock size={18} strokeWidth={2.2} color="var(--muted-2)" />
                <input type="password" placeholder="Mínimo 4 caracteres" value={pass} onChange={(e) => setPass(e.target.value)} />
              </div>
            </div>

            <button className="btn btn-primary" type="submit" disabled={!valid} style={{ marginTop: 8 }}>
              Crear cuenta
            </button>
          </form>

          <div className="divider" />
          <button className="btn btn-ghost" onClick={() => navigate('/preferences')}>
            Continuar con Google
          </button>
          <p className="muted" style={{ fontSize: 12, textAlign: 'center', marginTop: 16, lineHeight: 1.5 }}>
            Al continuar aceptás las políticas de privacidad y el uso de tu ubicación para
            mejorar las recomendaciones.
          </p>
        </div>
      </div>
    </div>
  )
}

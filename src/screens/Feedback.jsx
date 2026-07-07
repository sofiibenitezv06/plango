import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Star, PartyPopper } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'

const LIKES = ['El mapa', 'Los filtros', 'Las recomendaciones', 'El diseño', 'Las promos', 'Las reservas', 'Las reseñas']

export default function Feedback() {
  const navigate = useNavigate()
  const { markFeedbackDone } = useApp()
  const [rating, setRating] = useState(0)
  const [liked, setLiked] = useState([])
  const [comment, setComment] = useState('')
  const [sent, setSent] = useState(false)

  const toggleLike = (l) =>
    setLiked((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]))

  const submit = () => {
    markFeedbackDone()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="screen">
        <div className="empty" style={{ paddingTop: 110 }}>
          <PartyPopper size={56} strokeWidth={1.7} color="var(--orange)" style={{ margin: '0 auto 6px' }} />
          <h2 style={{ fontSize: 22, fontWeight: 850, color: 'var(--ink)' }}>¡Gracias por tu opinión!</h2>
          <p style={{ fontSize: 14, marginTop: 8, lineHeight: 1.5 }}>
            Tu feedback nos ayuda a mejorar PlanGo antes del lanzamiento con comercios reales.
          </p>
          <button className="btn btn-primary" style={{ marginTop: 22, maxWidth: 260 }} onClick={() => navigate('/home')}>
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen">
      <div className="topbar">
        <button className="icon-btn" onClick={() => navigate(-1)} aria-label="Volver">
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>
        <h1>Tu opinión</h1>
      </div>

      <div className="screen-scroll" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="pad">
          <p className="muted" style={{ fontSize: 14, lineHeight: 1.5 }}>
            Estamos validando PlanGo. ¿Qué te pareció la experiencia?
          </p>

          <div className="center-col" style={{ marginTop: 20 }}>
            <div className="stars-input">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} className={'s' + (n <= rating ? ' on' : '')} onClick={() => setRating(n)} aria-label={`${n} estrellas`}>
                  <Star size={38} strokeWidth={1.5} fill={n <= rating ? '#eab308' : 'none'} color={n <= rating ? '#eab308' : 'var(--muted-2)'} />
                </button>
              ))}
            </div>
            <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>
              {['', 'Muy mala', 'Regular', 'Buena', 'Muy buena', '¡Excelente!'][rating]}
            </p>
          </div>

          <h2 style={{ fontSize: 15, fontWeight: 800, margin: '24px 0 10px' }}>¿Qué es lo que más te gustó?</h2>
          <div className="pill-choices">
            {LIKES.map((l) => (
              <button key={l} className={'chip' + (liked.includes(l) ? ' active orange' : '')} onClick={() => toggleLike(l)}>
                {l}
              </button>
            ))}
          </div>

          <h2 style={{ fontSize: 15, fontWeight: 800, margin: '24px 0 10px' }}>¿Qué mejorarías? (opcional)</h2>
          <textarea
            className="input"
            placeholder="Contanos qué agregarías o cambiarías…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>

      <div className="detail-cta" style={{ position: 'absolute' }}>
        <button className="btn btn-primary" onClick={submit} disabled={rating === 0}>
          Enviar opinión
        </button>
      </div>
    </div>
  )
}

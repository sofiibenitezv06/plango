import { useState } from 'react'
import { CreditCard, Wallet, Banknote, ShieldCheck, Lock } from 'lucide-react'
import { formatGs } from '../data/restaurants.js'

// Métodos de pago (Paraguay). paid=true => se "cobra" online (simulado);
// efectivo => se paga en el lugar.
const METHODS = [
  { id: 'tarjeta', label: 'Tarjeta', Icon: CreditCard, hint: 'Crédito o débito', paid: true },
  { id: 'billetera', label: 'Billetera electrónica', Icon: Wallet, hint: 'Tigo Money · Billetera Personal', paid: true },
  { id: 'efectivo', label: 'Efectivo', Icon: Banknote, hint: 'Pagás en el lugar', paid: false },
]

// Panel de pago SIMULADO reutilizable (no cobra dinero real).
export default function PaymentPanel({ amount, note = 'Total a pagar', onConfirm }) {
  const [method, setMethod] = useState('tarjeta')
  const [num, setNum] = useState('')
  const [exp, setExp] = useState('')
  const [cvv, setCvv] = useState('')
  const [name, setName] = useState('')

  const m = METHODS.find((x) => x.id === method)
  const digits = num.replace(/\D/g, '')
  const cardOk = digits.length >= 15 && exp.length === 5 && cvv.length >= 3 && name.trim().length > 1
  const canPay = method !== 'tarjeta' || cardOk

  const onNum = (v) => setNum(v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim())
  const onExp = (v) => {
    const d = v.replace(/\D/g, '').slice(0, 4)
    setExp(d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d)
  }

  return (
    <>
      <div className="screen-scroll" style={{ paddingTop: 0, paddingBottom: 100 }}>
        <div className="pad">
          <div className="pay-amount">
            <span className="k">{note}</span>
            <span className="v">{formatGs(amount)}</span>
          </div>

          <h2 className="reserve-h">Elegí cómo pagar</h2>
          <div className="stack" style={{ gap: 10 }}>
            {METHODS.map(({ id, label, Icon, hint }) => (
              <button
                key={id}
                className={'pay-method' + (method === id ? ' active' : '')}
                onClick={() => setMethod(id)}
              >
                <span className="pm-ic"><Icon size={20} strokeWidth={2.2} /></span>
                <span className="pm-txt">
                  <b>{label}</b>
                  <span>{hint}</span>
                </span>
                <span className={'pm-radio' + (method === id ? ' on' : '')} />
              </button>
            ))}
          </div>

          {method === 'tarjeta' && (
            <div className="fade-up" style={{ marginTop: 16 }}>
              <div className="field">
                <label>Número de tarjeta</label>
                <input className="input" inputMode="numeric" placeholder="4509 5678 9012 3456" value={num} onChange={(e) => onNum(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <div className="field" style={{ flex: 1 }}>
                  <label>Vencimiento</label>
                  <input className="input" inputMode="numeric" placeholder="MM/AA" value={exp} onChange={(e) => onExp(e.target.value)} />
                </div>
                <div className="field" style={{ flex: 1 }}>
                  <label>CVV</label>
                  <input className="input" inputMode="numeric" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))} />
                </div>
              </div>
              <div className="field">
                <label>Nombre en la tarjeta</label>
                <input className="input" placeholder="Como figura en la tarjeta" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
          )}

          {method === 'billetera' && (
            <div className="pay-note fade-up">
              <Wallet size={16} strokeWidth={2.3} /> Se abrirá tu billetera (Tigo Money / Billetera Personal) para confirmar el pago.
            </div>
          )}
          {method === 'efectivo' && (
            <div className="pay-note fade-up">
              <Banknote size={16} strokeWidth={2.3} /> Reservás ahora y pagás en efectivo al llegar al lugar.
            </div>
          )}

          <div className="pay-secure">
            <ShieldCheck size={14} strokeWidth={2.3} /> Pago simulado — es una demostración, no se cobra dinero real.
          </div>
        </div>
      </div>

      <div className="detail-cta" style={{ position: 'absolute' }}>
        <button className="btn btn-primary" disabled={!canPay} onClick={() => onConfirm(m.label, m.paid)}>
          <Lock size={17} strokeWidth={2.3} /> {m.paid ? `Pagar ${formatGs(amount)}` : 'Confirmar (pago en el lugar)'}
        </button>
      </div>
    </>
  )
}

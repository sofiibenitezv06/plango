// Pin de ubicación de PlanGo (símbolo de marca).
export function Pin({ size = 48, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 6c-11 0-20 8.6-20 19.4C12 39 29 57.5 30.6 59.2c.8.9 2 .9 2.8 0C35 57.5 52 39 52 25.4 52 14.6 43 6 32 6z"
        fill="#fff"
      />
      <circle cx="32" cy="25" r="8.5" fill="#15803D" />
    </svg>
  )
}

// Logo horizontal (pin + wordmark) para pantallas claras.
export function Wordmark({ size = 26 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span
        style={{
          width: size * 1.1,
          height: size * 1.1,
          borderRadius: size * 0.32,
          background: 'linear-gradient(135deg,#fb923c,#f97316)',
          display: 'grid',
          placeItems: 'center',
          boxShadow: '0 6px 14px rgba(249,115,22,.3)',
        }}
      >
        <Pin size={size * 0.72} />
      </span>
      <span
        style={{
          fontSize: size,
          fontWeight: 900,
          letterSpacing: '-0.6px',
          color: '#1f2937',
        }}
      >
        Plan<span style={{ color: '#f97316' }}>Go</span>
      </span>
    </span>
  )
}

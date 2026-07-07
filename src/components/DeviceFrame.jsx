// Contenedor de la app a pantalla completa (sin marco de celular).
export default function DeviceFrame({ children }) {
  return (
    <div className="stage">
      <div className="device">{children}</div>
    </div>
  )
}

// Helpers para abrir el lugar / la ruta en Google Maps (funciona en celular y web).
// Usamos el nombre + dirección como texto para que Google resuelva el local real,
// aunque las coordenadas sean aproximadas.

function query(v) {
  return encodeURIComponent(`${v.name}, ${v.address || v.city}, Paraguay`)
}

export function directionsUrl(v) {
  return `https://www.google.com/maps/dir/?api=1&destination=${query(v)}`
}

export function placeUrl(v) {
  return `https://www.google.com/maps/search/?api=1&query=${query(v)}`
}

// Abre la ruta "cómo llegar" desde la ubicación del usuario hasta el local.
export function openDirections(v) {
  window.open(directionsUrl(v), '_blank', 'noopener,noreferrer')
}

// Abre la ficha del lugar en Google Maps.
export function openPlace(v) {
  window.open(placeUrl(v), '_blank', 'noopener,noreferrer')
}

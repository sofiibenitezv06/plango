// Categorías de lugares (gastronomía y entretenimiento).
// El emoji hace de ícono para mantener la demo 100% offline.
export const CATEGORIES = [
  { id: 'todos', label: 'Todos', emoji: '✨' },
  { id: 'cafeteria', label: 'Cafetería', emoji: '☕' },
  { id: 'paraguaya', label: 'Comida paraguaya', emoji: '🫓' },
  { id: 'parrilla', label: 'Parrilla', emoji: '🥩' },
  { id: 'hamburguesas', label: 'Hamburguesas', emoji: '🍔' },
  { id: 'sushi', label: 'Sushi', emoji: '🍣' },
  { id: 'pizza', label: 'Pizza', emoji: '🍕' },
  { id: 'postres', label: 'Postres', emoji: '🍨' },
  { id: 'bar', label: 'Bar', emoji: '🍹' },
]

// Ciudades del alcance inicial (Gran Asunción) según el plan de negocios.
export const CITIES = [
  'Asunción',
  'Fernando de la Mora',
  'San Lorenzo',
  'Luque',
  'Lambaré',
  'Mariano Roque Alonso',
]

// Rangos de presupuesto por persona (en guaraníes), alineados al segmento medio
// del plan (Gs. 40.000 a Gs. 100.000+).
export const BUDGETS = [
  { id: 'bajo', label: 'Hasta Gs. 50.000', max: 50000, hint: '$' },
  { id: 'medio', label: 'Gs. 50.000 – 80.000', max: 80000, hint: '$$' },
  { id: 'alto', label: 'Más de Gs. 80.000', max: Infinity, hint: '$$$' },
]

// Servicios que el usuario puede filtrar (aparecen en las fichas de local).
export const SERVICES = [
  { id: 'estacionamiento', label: 'Estacionamiento', emoji: '🅿️' },
  { id: 'wifi', label: 'Wi-Fi', emoji: '📶' },
  { id: 'terraza', label: 'Terraza', emoji: '🌿' },
  { id: 'delivery', label: 'Delivery', emoji: '🛵' },
  { id: 'tarjeta', label: 'Acepta tarjeta', emoji: '💳' },
  { id: 'petfriendly', label: 'Pet friendly', emoji: '🐾' },
]

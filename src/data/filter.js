import { RESTAURANTS } from './restaurants.js'
import { BUDGETS } from './categories.js'

// Aplica los filtros activos sobre la lista de restaurantes.
export function applyFilters(list, f = {}) {
  const { category, city, budget, services = [], query = '' } = f
  const q = query.trim().toLowerCase()

  return list.filter((r) => {
    if (category && category !== 'todos' && r.category !== category) return false
    if (city && city !== 'Todas' && r.city !== city) return false

    if (budget) {
      const b = BUDGETS.find((x) => x.id === budget)
      if (b && r.priceFrom > b.max) return false
    }

    if (services.length) {
      const ok = services.every((s) => r.services[s])
      if (!ok) return false
    }

    if (q) {
      const hay = [r.name, r.city, r.tagline, r.category, ...r.tags]
        .join(' ')
        .toLowerCase()
      if (!hay.includes(q)) return false
    }

    return true
  })
}

// Ordena poniendo primero lo que coincide con los gustos del usuario,
// luego por rating. Base de las "recomendaciones para vos".
export function recommendFor(prefs) {
  const preferred = new Set(prefs.categories || [])
  return [...RESTAURANTS].sort((a, b) => {
    const am = preferred.has(a.category) ? 1 : 0
    const bm = preferred.has(b.category) ? 1 : 0
    if (am !== bm) return bm - am
    const ac = a.city === prefs.city ? 1 : 0
    const bc = b.city === prefs.city ? 1 : 0
    if (ac !== bc) return bc - ac
    return b.rating - a.rating
  })
}

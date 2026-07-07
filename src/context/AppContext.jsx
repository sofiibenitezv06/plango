import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AppContext = createContext(null)

const STORAGE_KEY = 'plango.state.v1'

const defaultState = {
  user: null, // { name, email }
  prefs: {
    city: 'Asunción',
    budget: 'medio', // id de BUDGETS
    categories: [], // ids de categorías preferidas
  },
  favorites: [], // ids de restaurantes
  feedbackDone: false,
  reservations: [], // { id, restaurantId, date, time, people, code, note }
  reviews: {}, // { [restaurantId]: [{ user, rating, text, date, mine }] }
  filters: {
    category: 'todos',
    city: '', // '' = todas las ciudades
    budget: '', // '' = cualquier presupuesto
    services: [], // ids de servicios requeridos
    query: '',
  },
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    return { ...defaultState, ...JSON.parse(raw) }
  } catch {
    return defaultState
  }
}

export function AppProvider({ children }) {
  const [state, setState] = useState(loadState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* almacenamiento no disponible: la demo sigue funcionando en memoria */
    }
  }, [state])

  const actions = useMemo(
    () => ({
      setUser: (user) => setState((s) => ({ ...s, user })),
      setPrefs: (patch) => setState((s) => ({ ...s, prefs: { ...s.prefs, ...patch } })),
      setFilters: (patch) =>
        setState((s) => ({ ...s, filters: { ...s.filters, ...patch } })),
      toggleService: (id) =>
        setState((s) => {
          const has = s.filters.services.includes(id)
          return {
            ...s,
            filters: {
              ...s.filters,
              services: has
                ? s.filters.services.filter((x) => x !== id)
                : [...s.filters.services, id],
            },
          }
        }),
      clearFilters: () =>
        setState((s) => ({
          ...s,
          filters: { category: 'todos', city: '', budget: '', services: [], query: '' },
        })),
      toggleCategory: (id) =>
        setState((s) => {
          const has = s.prefs.categories.includes(id)
          return {
            ...s,
            prefs: {
              ...s.prefs,
              categories: has
                ? s.prefs.categories.filter((c) => c !== id)
                : [...s.prefs.categories, id],
            },
          }
        }),
      toggleFavorite: (id) =>
        setState((s) => {
          const has = s.favorites.includes(id)
          return {
            ...s,
            favorites: has ? s.favorites.filter((f) => f !== id) : [...s.favorites, id],
          }
        }),
      isFavorite: (id) => state.favorites.includes(id),
      addReservation: (res) =>
        setState((s) => ({ ...s, reservations: [res, ...s.reservations] })),
      addReview: (restaurantId, review) =>
        setState((s) => ({
          ...s,
          reviews: {
            ...s.reviews,
            [restaurantId]: [review, ...(s.reviews[restaurantId] || [])],
          },
        })),
      markFeedbackDone: () => setState((s) => ({ ...s, feedbackDone: true })),
      reset: () => {
        try {
          localStorage.removeItem(STORAGE_KEY)
        } catch {
          /* noop */
        }
        setState(defaultState)
      },
    }),
    [state.favorites]
  )

  const value = useMemo(() => ({ ...state, ...actions }), [state, actions])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp debe usarse dentro de <AppProvider>')
  return ctx
}

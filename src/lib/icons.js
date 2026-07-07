// Mapeo de categorías y servicios a iconos de Lucide.
import {
  Sparkles,
  Coffee,
  Soup,
  Beef,
  Sandwich,
  Fish,
  Pizza,
  IceCreamCone,
  Wine,
  SquareParking,
  Wifi,
  Trees,
  Bike,
  CreditCard,
  PawPrint,
  Music,
  ChefHat,
  Store,
  PartyPopper,
  Mic,
} from 'lucide-react'

export const CATEGORY_ICON = {
  todos: Sparkles,
  cafeteria: Coffee,
  paraguaya: Soup,
  parrilla: Beef,
  hamburguesas: Sandwich,
  sushi: Fish,
  pizza: Pizza,
  postres: IceCreamCone,
  bar: Wine,
}

export const SERVICE_ICON = {
  estacionamiento: SquareParking,
  wifi: Wifi,
  terraza: Trees,
  delivery: Bike,
  tarjeta: CreditCard,
  petfriendly: PawPrint,
}

// Iconos por tipo de evento (entretenimiento).
export const EVENT_ICON = {
  todos: Sparkles,
  musica: Music,
  gastronomia: ChefHat,
  feria: Store,
  fiesta: PartyPopper,
  show: Mic,
}

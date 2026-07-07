# PlanGo 🟠📍

Prototipo interactivo de **PlanGo**, la app paraguaya de recomendaciones
gastronómicas y de entretenimiento para Gran Asunción.

> Encontrá en segundos dónde comer, tomar algo o salir, según tu ubicación,
> tus gustos y tu presupuesto.

Este prototipo implementa el recorrido completo definido en el Plan de Negocios
y sirve para **demostrar y validar** la idea antes de conectar datos reales.

## Cómo correrlo

```bash
npm install
npm run dev       # abre en el navegador (http://localhost:5173)
```

Para una versión que se pueda **abrir sin servidor / sin internet** (ideal para
la demo académica):

```bash
npm run build     # genera dist/index.html (un único archivo autocontenido)
```

El build usa `vite-plugin-singlefile`: **todo** (JS + CSS + iconos) queda embebido
en un solo `dist/index.html`. Se puede **abrir directamente con doble clic**
(file://) sin servidor ni internet, o servirlo con `npm run preview`. La app corre
**a pantalla completa**, sin marco de celular.

## Flujo del prototipo

Bienvenida y registro → preferencias (ciudad, presupuesto, gustos) → inicio con
recomendaciones y ventajas → filtros → mapa con pines y "Cómo llegar" → ficha del
local (menú actualizado, precios, servicios, reseñas) → **reservar** → **escribir
tu reseña** → favoritos → formulario de feedback.

## Diferenciales que muestra la app

- **Menú siempre al día** — badge "Actualizado hoy" en la ficha (algo que Google
  o Instagram no garantizan).
- **Promociones** de cada local reunidas en un solo lugar.
- **Servicios visibles** — estacionamiento, wifi, terraza, delivery, etc.
- **Reservas automáticas** desde la app — fecha, horario, personas y confirmación
  con código, sin llamar.
- **Reseñas reales** y la posibilidad de **dejar y comentar la tuya**.

La sección "¿Por qué PlanGo?" en Inicio resume estas ventajas.

## Qué es real y qué es demo

- **Interactivo de verdad:** navegación, filtros, búsqueda, favoritos, reservas y
  reseñas propias (todo se guarda en el navegador), preferencias, feedback.
- **Locales reales:** 20 restaurantes REALES de Gran Asunción (El Café de Acá,
  Kaffe'i, Bolsi, Tierra Colorada, Paulista Grill, Lo de Osvaldo, Walterio, etc.),
  con ubicación, rubro y horarios reales tomados de fuentes públicas (prensa,
  sitios oficiales, Google Maps). **Menús, precios y calificaciones son
  indicativos/aproximados** y pueden variar (se aclara en cada ficha).
- **Mapa real:** OpenStreetMap con Leaflet; los pines están en las coordenadas
  reales de cada local y hay botón de "mi ubicación". Requiere internet.
- **"Cómo llegar" real:** abre Google Maps con la ruta desde tu ubicación.
- **Eventos (demo):** sección de entretenimiento (música, ferias, fiestas, shows)
  con pestaña propia, filtros y reserva de entrada; varios se realizan en locales
  reales de la app.
- **Sin backend:** favoritos, reservas y reseñas propias se guardan en el navegador.

## Iconografía

Iconos de [lucide-react](https://lucide.dev) en toda la interfaz (nav, servicios,
categorías, acciones). Se bundlean con la app, así que siguen funcionando offline.

## Marca

| Color | Código | Uso |
|-------|--------|-----|
| Naranja | `#F97316` | Principal, acciones |
| Verde | `#15803D` | Ubicación, confirmación |
| Amarillo | `#FACC15` | Promociones, destacados |
| Tinta | `#1F2937` | Texto |
| Fondo | `#FFF7ED` | Fondo cálido |

## Stack

React 18 + Vite + React Router (hash) + lucide-react (iconos). Estilos propios en
`src/index.css`, sin librería de UI.

## Estructura

```
src/
  data/          # restaurantes, categorías, filtros (mock)
  lib/           # mapeo de categorías/servicios a iconos Lucide
  context/       # estado global (favoritos, reservas, reseñas) + localStorage
  components/    # marco de celular, nav, tarjetas, ventajas, logo
  screens/       # las 11 pantallas del flujo (incl. reservar)
```

## Próximos pasos (según el plan)

1. Piloto con 5–10 comercios reales de Gran Asunción.
2. Panel de administración para comercios (planes Básico / Pro / Premium).
3. Conectar datos reales, backend y mapa real.
4. Reservas y comisiones (etapa posterior).

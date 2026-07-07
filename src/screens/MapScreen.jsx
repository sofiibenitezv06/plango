import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import L from 'leaflet'
import { Search, X, Navigation, MapPin, LocateFixed } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { RESTAURANTS, priceRangeLabel, formatGs } from '../data/restaurants.js'
import { applyFilters } from '../data/filter.js'
import { Rating } from '../components/RestaurantCard.jsx'
import { CATEGORY_ICON } from '../lib/icons.js'
import { openDirections } from '../lib/maps.js'

// Centro aproximado de Gran Asunción
const CENTER = [-25.3, -57.58]

export default function MapScreen() {
  const navigate = useNavigate()
  const { filters } = useApp()
  const results = applyFilters(RESTAURANTS, filters)
  const [selectedId, setSelectedId] = useState(null)

  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const layerRef = useRef(null)
  const meRef = useRef(null)

  const selected = results.find((r) => r.id === selectedId)
  const SelIcon = selected ? CATEGORY_ICON[selected.category] : null

  // Inicializar el mapa una sola vez
  useEffect(() => {
    if (mapRef.current || !containerRef.current) return
    const map = L.map(containerRef.current, { zoomControl: false }).setView(CENTER, 12)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap',
    }).addTo(map)
    L.control.zoom({ position: 'bottomright' }).addTo(map)
    layerRef.current = L.layerGroup().addTo(map)
    mapRef.current = map
    // Cerrar la hoja al tocar el mapa vacío
    map.on('click', () => setSelectedId(null))
    setTimeout(() => map.invalidateSize(), 120)
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  // (Re)dibujar los pines cuando cambian los resultados
  useEffect(() => {
    const map = mapRef.current
    const layer = layerRef.current
    if (!map || !layer) return
    layer.clearLayers()
    const pts = []
    results.forEach((r) => {
      const price = formatGs(r.priceFrom).replace('Gs. ', '₲ ')
      const icon = L.divIcon({
        className: 'lpin-wrap',
        html: `<div class="lpin" style="--pc:${r.gradient[0]}"><span class="lpin-em">${r.emoji}</span><span class="lpin-price">${price}</span></div>`,
        iconSize: [78, 30],
        iconAnchor: [39, 34],
      })
      const m = L.marker([r.lat, r.lng], { icon, title: r.name }).addTo(layer)
      m.on('click', () => {
        setSelectedId(r.id)
        map.panTo([r.lat, r.lng])
      })
      pts.push([r.lat, r.lng])
    })
    if (pts.length) {
      try {
        map.fitBounds(pts, { padding: [60, 60], maxZoom: 14 })
      } catch {
        map.setView(CENTER, 12)
      }
    }
  }, [results])

  const locateMe = () => {
    const map = mapRef.current
    if (!map) return
    map.locate({ setView: true, maxZoom: 15 })
    map.once('locationfound', (e) => {
      if (meRef.current) map.removeLayer(meRef.current)
      meRef.current = L.circleMarker(e.latlng, {
        radius: 9,
        color: '#fff',
        weight: 3,
        fillColor: '#2563eb',
        fillOpacity: 1,
      }).addTo(map)
    })
    map.once('locationerror', () => {
      alert('No pudimos acceder a tu ubicación. Activá el permiso de ubicación del navegador.')
    })
  }

  return (
    <div className="screen">
      <div className="map-wrap">
        <div ref={containerRef} className="leaflet-map" />

        {/* Buscador flotante */}
        <div className="map-top pad">
          <div className="search" style={{ boxShadow: 'var(--shadow)' }} onClick={() => navigate('/filters')}>
            <Search size={19} strokeWidth={2.3} color="var(--muted-2)" />
            <input readOnly placeholder="Buscar en el mapa…" style={{ pointerEvents: 'none' }} />
            <span className="tag" style={{ background: 'var(--orange-50)', color: 'var(--orange-600)' }}>
              {results.length} lugares
            </span>
          </div>
        </div>

        {/* Botón mi ubicación */}
        <button className="map-locate" onClick={locateMe} aria-label="Mi ubicación">
          <LocateFixed size={20} strokeWidth={2.2} />
        </button>

        {/* Hoja del lugar seleccionado */}
        {selected ? (
          <div className="map-sheet">
            <div className="rcard" style={{ padding: 12 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div
                  className="thumb"
                  style={{
                    background: `linear-gradient(135deg, ${selected.gradient[0]}, ${selected.gradient[1]})`,
                    width: 60, height: 60, borderRadius: 14, display: 'grid', placeItems: 'center', color: '#fff', flex: 'none',
                  }}
                >
                  {SelIcon && <SelIcon size={28} strokeWidth={1.8} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                    <h4 style={{ fontSize: 15.5, fontWeight: 800 }}>{selected.name}</h4>
                    <Rating value={selected.rating} />
                  </div>
                  <p className="muted inline-ic" style={{ fontSize: 12.5, marginTop: 2 }}>
                    <MapPin size={13} strokeWidth={2.3} /> {selected.city} · {priceRangeLabel(selected)}
                  </p>
                </div>
                <button className="icon-btn" style={{ width: 32, height: 32 }} onClick={() => setSelectedId(null)} aria-label="Cerrar">
                  <X size={16} strokeWidth={2.4} />
                </button>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                <button className="btn btn-green btn-sm" style={{ flex: 1 }} onClick={() => openDirections(selected)}>
                  <Navigation size={16} strokeWidth={2.3} /> Cómo llegar
                </button>
                <button className="btn btn-outline btn-sm" style={{ flex: 1 }} onClick={() => navigate(`/restaurant/${selected.id}`)}>
                  Ver ficha
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="map-sheet">
            <div className="promo-banner" style={{ justifyContent: 'center', background: 'rgba(255,255,255,.95)', color: 'var(--ink-soft)' }}>
              <MapPin size={17} strokeWidth={2.3} /> Tocá un pin para ver el lugar y cómo llegar
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

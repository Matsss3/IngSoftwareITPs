import { useState } from 'react'
import { MapPin, Navigation, Compass, Layers, Check } from 'lucide-react'
import { PRESET_ZONES } from '../data/initialAddresses'

export default function MapCoordinatePicker({ value, onChange, onSelectPreset }) {
  const [pinPosition, setPinPosition] = useState({ x: 50, y: 50 })
  const [isDetecting, setIsDetecting] = useState(false)
  const [mapMode, setMapMode] = useState('calles') // 'calles' | 'satelite'

  // Handle click on the interactive visual map
  const handleMapClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setPinPosition({ x, y })

    // Calculate simulated realistic Buenos Aires coordinates based on click position
    // Base center around Obelisco: -34.6037, -58.3815
    const latSpan = 0.08
    const lngSpan = 0.12
    const lat = (-34.56 - (y / 100) * latSpan).toFixed(6)
    const lng = (-58.45 + (x / 100) * lngSpan).toFixed(6)

    onChange(`${lat}, ${lng}`)
  }

  // Geolocation detection
  const handleDetectGPS = () => {
    setIsDetecting(true)
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(6)
          const lng = position.coords.longitude.toFixed(6)
          onChange(`${lat}, ${lng}`)
          setPinPosition({ x: 48, y: 52 })
          setIsDetecting(false)
        },
        () => {
          // Fallback demo coordinates (Palermo Soho)
          setTimeout(() => {
            onChange('-34.588120, -58.411030')
            setPinPosition({ x: 55, y: 45 })
            setIsDetecting(false)
          }, 600)
        },
        { timeout: 4000 }
      )
    } else {
      setTimeout(() => {
        onChange('-34.603738, -58.381570')
        setPinPosition({ x: 50, y: 50 })
        setIsDetecting(false)
      }, 600)
    }
  }

  return (
    <div className="map-picker-container">
      <div className="map-picker-header">
        <div className="map-picker-title">
          <Compass size={15} className="text-primary" />
          <span>Mapa de Ubicación y Coordenadas</span>
        </div>
        <div className="map-picker-actions">
          <button
            type="button"
            className="btn-map-control"
            onClick={() => setMapMode(mapMode === 'calles' ? 'satelite' : 'calles')}
            title="Cambiar vista del mapa"
          >
            <Layers size={13} />
            <span>{mapMode === 'calles' ? 'Satélite' : 'Calles'}</span>
          </button>
          <button
            type="button"
            className={`btn-map-gps ${isDetecting ? 'loading' : ''}`}
            onClick={handleDetectGPS}
            disabled={isDetecting}
          >
            <Navigation size={13} />
            <span>{isDetecting ? 'Detectando GPS...' : 'Mi ubicación GPS'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Map Visual */}
      <div
        className={`interactive-map ${mapMode}`}
        onClick={handleMapClick}
        title="Haz clic en cualquier punto del mapa para fijar el pin y obtener las coordenadas"
      >
        {/* Street Grid SVG Graphic */}
        <div className="map-grid-layer">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              </pattern>
              <pattern id="roads" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 0 60 L 120 60 M 60 0 L 60 120" fill="none" stroke="rgba(255, 140, 0, 0.25)" strokeWidth="4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#roads)" />
          </svg>
        </div>

        {/* Reference landmarks */}
        <div className="map-landmark landmark-1">Obelisco</div>
        <div className="map-landmark landmark-2">Palermo Soho</div>
        <div className="map-landmark landmark-3">Puerto Madero</div>

        {/* Active Pin */}
        <div
          className="map-pin-marker"
          style={{ left: `${pinPosition.x}%`, top: `${pinPosition.y}%` }}
        >
          <div className="pin-pulse"></div>
          <div className="pin-icon-wrapper">
            <MapPin size={28} className="pin-icon" />
          </div>
          <div className="pin-tooltip">
            {value || 'Haz clic para posicionar'}
          </div>
        </div>

        <div className="map-hint">
          <span>💡 Clic en el mapa para marcar punto exacto de entrega</span>
        </div>
      </div>

      {/* Quick Location Presets */}
      <div className="preset-zones">
        <span className="preset-label">Ubicaciones sugeridas:</span>
        <div className="preset-chips">
          {PRESET_ZONES.map((zone) => (
            <button
              key={zone.nombre}
              type="button"
              className="preset-chip"
              onClick={() => {
                onChange(zone.coords)
                if (onSelectPreset) {
                  onSelectPreset(zone)
                }
              }}
            >
              <MapPin size={11} />
              <span>{zone.nombre}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

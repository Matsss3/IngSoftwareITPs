import { useState } from 'react'
import { MapPin, Info, AlertCircle, CheckCircle2, Plus, Minus } from 'lucide-react'

export default function MigaMap({ coordinates, onChange, hasError }) {
  const [zoomLevel, setZoomLevel] = useState(15)

  // Toggle or click map to select coordinates
  const handleMapClick = (e) => {
    if (!coordinates) {
      onChange('-34.6037, -58.3816')
    } else {
      // Toggle or micro-adjust
      const coords = coordinates === '-34.6037, -58.3816' ? '-34.6041, -58.3824' : '-34.6037, -58.3816'
      onChange(coords)
    }
  }

  const isConfirmed = Boolean(coordinates && coordinates.trim())

  return (
    <div className="miga-map-component">
      <div
        className={`miga-map-viewport ${isConfirmed ? 'confirmed' : 'unconfirmed'} ${hasError ? 'map-error' : ''}`}
        onClick={handleMapClick}
        title="Hacé clic en el mapa para ubicar el punto de entrega"
      >
        {/* SVG stylized map representation resembling Buenos Aires / San Nicolás */}
        <svg className="miga-map-svg" viewBox="0 0 600 200" preserveAspectRatio="none">
          {/* Base background */}
          <rect width="600" height="200" fill="#f4f3ed" />

          {/* Building blocks */}
          <rect x="20" y="20" width="130" height="40" rx="3" fill="#eae8df" />
          <rect x="170" y="20" width="120" height="40" rx="3" fill="#eae8df" />
          <rect x="310" y="20" width="120" height="40" rx="3" fill="#eae8df" />
          <rect x="450" y="20" width="130" height="40" rx="3" fill="#eae8df" />

          {/* Green parks / squares */}
          <rect x="290" y="70" width="25" height="110" rx="2" fill="#d9ebdc" />
          <rect x="335" y="70" width="15" height="110" rx="2" fill="#d9ebdc" />

          {/* Blocks middle & lower */}
          <rect x="20" y="80" width="130" height="45" rx="3" fill="#eae8df" />
          <rect x="170" y="80" width="100" height="45" rx="3" fill="#eae8df" />
          <rect x="370" y="80" width="100" height="45" rx="3" fill="#eae8df" />
          <rect x="490" y="80" width="90" height="45" rx="3" fill="#eae8df" />

          <rect x="20" y="145" width="130" height="40" rx="3" fill="#eae8df" />
          <rect x="170" y="145" width="100" height="40" rx="3" fill="#eae8df" />
          <rect x="370" y="145" width="100" height="40" rx="3" fill="#eae8df" />
          <rect x="490" y="145" width="90" height="40" rx="3" fill="#eae8df" />

          {/* Street roads */}
          {/* Av. Corrientes (Horizontal) */}
          <line x1="0" y1="70" x2="600" y2="70" stroke="#ffffff" strokeWidth="14" />
          {/* Av. 9 de Julio (Vertical center-ish) */}
          <line x1="320" y1="0" x2="320" y2="200" stroke="#ffffff" strokeWidth="26" />
          {/* Other streets */}
          <line x1="160" y1="0" x2="160" y2="200" stroke="#ffffff" strokeWidth="10" />
          <line x1="480" y1="0" x2="480" y2="200" stroke="#ffffff" strokeWidth="10" />
          <line x1="0" y1="135" x2="600" y2="135" stroke="#ffffff" strokeWidth="12" />

          {/* Street and locality texts */}
          <text x="30" y="68" fill="#78716c" fontSize="10" fontFamily="sans-serif">Av. Corrientes</text>
          <text x="325" y="125" fill="#78716c" fontSize="8" fontFamily="sans-serif" transform="rotate(-90 325 125)">Av. 9 de Julio</text>
          <text x="470" y="44" fill="#57534e" fontSize="11" fontWeight="700" letterSpacing="0.8" fontFamily="sans-serif">SAN NICOLÁS</text>
          <text x="25" y="190" fill="#78716c" fontSize="10" fontFamily="sans-serif">Buenos Aires, Argentina</text>
        </svg>

        {/* Top-left status pill inside map */}
        <div className="miga-map-tag">
          <span className={`map-dot ${isConfirmed ? 'dot-green' : 'dot-grey'}`}></span>
          <span>{isConfirmed ? 'Ubicación seleccionada' : 'Ubicación de referencia'}</span>
        </div>

        {/* Map Center Pin */}
        <div className="miga-map-center-pin">
          {isConfirmed ? (
            <div className="pin-circle confirmed-pin">
              <div className="pin-halo green-halo"></div>
              <div className="pin-badge green-badge">
                <MapPin size={16} fill="currentColor" />
              </div>
            </div>
          ) : (
            <div className="pin-circle reference-pin">
              <div className="pin-halo red-halo"></div>
              <div className="pin-badge red-badge">
                <MapPin size={16} fill="currentColor" />
              </div>
            </div>
          )}
        </div>

        {/* Zoom Controls */}
        <div className="miga-map-zoom" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="zoom-btn"
            onClick={() => setZoomLevel((z) => Math.min(18, z + 1))}
            title="Acercar"
          >
            <Plus size={14} />
          </button>
          <div className="zoom-divider"></div>
          <button
            type="button"
            className="zoom-btn"
            onClick={() => setZoomLevel((z) => Math.max(12, z - 1))}
            title="Alejar"
          >
            <Minus size={14} />
          </button>
        </div>
      </div>

      {/* Status Bar below map */}
      {hasError ? (
        <div className="miga-map-status status-error">
          <AlertCircle size={15} className="status-icon" />
          <span>Seleccioná un punto para confirmar las coordenadas.</span>
        </div>
      ) : isConfirmed ? (
        <div className="miga-map-status status-confirmed">
          <MapPin size={15} className="status-icon" />
          <span>Seleccionadas: {coordinates}</span>
        </div>
      ) : (
        <div className="miga-map-status status-empty">
          <Info size={15} className="status-icon" />
          <span>Sin coordenadas confirmadas. Seleccioná un punto.</span>
        </div>
      )}
    </div>
  )
}

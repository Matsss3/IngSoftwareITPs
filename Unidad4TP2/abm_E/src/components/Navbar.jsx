import { UtensilsCrossed, MapPin, ChevronDown, ShoppingBag, User, BookOpen } from 'lucide-react'

export default function Navbar({ activeAddress, onOpenAddAddress, onToggleStories, activeTab, setActiveTab }) {
  return (
    <header className="app-navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => setActiveTab('direcciones')} style={{ cursor: 'pointer' }}>
          <div className="brand-logo-icon">
            <UtensilsCrossed size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-title">FastBite</span>
            <span className="brand-tag">Delivery</span>
          </div>
        </div>

        {/* Current Delivery Location Pill */}
        <div className="navbar-location-pill" onClick={onOpenAddAddress} title="Cambiar o agregar dirección">
          <div className="location-icon-wrapper">
            <MapPin size={16} />
          </div>
          <div className="location-info">
            <span className="location-label">Entregar en</span>
            <div className="location-address">
              <strong>{activeAddress ? `${activeAddress.calle} ${activeAddress.numero} (${activeAddress.alias})` : 'Seleccionar dirección'}</strong>
              <ChevronDown size={14} className="location-arrow" />
            </div>
          </div>
        </div>

        {/* Center Navigation Tabs */}
        <nav className="navbar-nav">
          <button
            type="button"
            className={`nav-tab-btn ${activeTab === 'direcciones' ? 'active' : ''}`}
            onClick={() => setActiveTab('direcciones')}
          >
            <MapPin size={15} />
            <span>Mis Direcciones</span>
          </button>
          <button
            type="button"
            className={`nav-tab-btn ${activeTab === 'restaurantes' ? 'active' : ''}`}
            onClick={() => setActiveTab('restaurantes')}
          >
            <UtensilsCrossed size={15} />
            <span>Restaurantes</span>
          </button>
          <button
            type="button"
            className={`nav-tab-btn nav-tab-hu ${activeTab === 'historias' ? 'active' : ''}`}
            onClick={onToggleStories}
            title="Ver Historias de Usuario y Criterios de Aceptación"
          >
            <BookOpen size={15} />
            <span>Historias de Usuario (HU)</span>
          </button>
        </nav>

        {/* Right User actions */}
        <div className="navbar-right">
          <div className="cart-badge-button" title="Carrito de compras">
            <ShoppingBag size={18} />
            <span className="cart-count">2</span>
          </div>

          <div className="user-profile-badge">
            <div className="user-avatar">
              <User size={16} />
            </div>
            <div className="user-info-text">
              <span className="user-name">Juan Pérez</span>
              <span className="user-status">Cliente Premium</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

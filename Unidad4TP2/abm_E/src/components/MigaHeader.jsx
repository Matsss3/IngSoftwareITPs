import { ChevronDown, Utensils } from 'lucide-react'

export default function MigaHeader() {
  return (
    <header className="miga-top-header">
      <div className="miga-header-container">
        {/* Brand logo: icon + 'miga' */}
        <div className="miga-brand">
          <div className="miga-brand-icon">
            <Utensils size={20} strokeWidth={2.4} />
          </div>
          <span className="miga-brand-name">miga</span>
        </div>

        {/* Center navigation links */}
        <nav className="miga-header-nav">
          <button type="button" className="miga-nav-link">Restaurantes</button>
          <button type="button" className="miga-nav-link">Mis pedidos</button>
          <button type="button" className="miga-nav-link">Ayuda</button>
        </nav>

        {/* User profile dropdown pill */}
        <div className="miga-user-pill">
          <div className="miga-user-avatar">VL</div>
          <span className="miga-user-name">Valentina</span>
          <ChevronDown size={16} className="miga-chevron" />
        </div>
      </div>
    </header>
  )
}

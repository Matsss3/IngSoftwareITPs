import { ChevronDown, Soup } from 'lucide-react'

export default function MigaHeader() {
  return (
    <header className="miga-top-header">
      <div className="miga-header-container">
        {/* Brand logo: icon + 'miga' */}
        <div className="miga-brand">
          <div className="miga-brand-icon">
            <Soup size={20} strokeWidth={2.4} />
          </div>
          <span className="miga-brand-name">buen bocado</span>
        </div>

        {/* Center navigation links */}
        <nav className="miga-header-nav">
          <button type="button" className="miga-nav-link">Descubrir</button>
          <button type="button" className="miga-nav-link">Mis pedidos</button>
          <button type="button" className="miga-nav-link">Club del barrio</button>
        </nav>

        {/* User profile dropdown pill */}
        <div className="miga-user-pill">
          <div className="miga-user-avatar">JM</div>
          <span className="miga-user-name">Julián</span>
          <ChevronDown size={16} className="miga-chevron" />
        </div>
      </div>
    </header>
  )
}

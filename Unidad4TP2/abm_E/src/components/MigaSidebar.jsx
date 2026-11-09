import { User, MapPin, CreditCard, Heart, LogOut } from 'lucide-react'

export default function MigaSidebar() {
  return (
    <aside className="miga-sidebar">
      <div className="miga-sidebar-section-title">TU RINCÓN</div>

      <nav className="miga-sidebar-nav">
        <button type="button" className="miga-sidebar-item">
          <User size={18} />
          <span>Mi cuenta</span>
        </button>

        <button type="button" className="miga-sidebar-item active">
          <MapPin size={18} />
          <span>Mis lugares</span>
        </button>

        <button type="button" className="miga-sidebar-item">
          <CreditCard size={18} />
          <span>Cómo pago</span>
        </button>

        <button type="button" className="miga-sidebar-item">
          <Heart size={18} />
          <span>Para volver</span>
        </button>

        <div className="miga-sidebar-spacer"></div>

        <button type="button" className="miga-sidebar-item">
          <LogOut size={18} />
          <span>Cerrar sesión</span>
        </button>
      </nav>
    </aside>
  )
}

import { User, MapPin, CreditCard, Heart, LogOut } from 'lucide-react'

export default function MigaSidebar() {
  return (
    <aside className="miga-sidebar">
      <div className="miga-sidebar-section-title">MI CUENTA</div>

      <nav className="miga-sidebar-nav">
        <button type="button" className="miga-sidebar-item">
          <User size={18} />
          <span>Mi perfil</span>
        </button>

        <button type="button" className="miga-sidebar-item active">
          <MapPin size={18} />
          <span>Mis direcciones</span>
        </button>

        <button type="button" className="miga-sidebar-item">
          <CreditCard size={18} />
          <span>Medios de pago</span>
        </button>

        <button type="button" className="miga-sidebar-item">
          <Heart size={18} />
          <span>Mis favoritos</span>
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

import { MapPin, Pencil } from 'lucide-react'

export default function AddressCard({ address, onEdit }) {
  return (
    <div className="miga-address-card">
      <div className="miga-card-left">
        <div className="miga-pin-squircle">
          <MapPin size={20} className="miga-pin-icon" />
        </div>

        <div className="miga-card-content">
          <div className="miga-card-title-row">
            <h3 className="miga-card-alias">{address.alias}</h3>
            {address.esPredeterminada && (
              <span className="miga-badge-predeterminada">Predeterminada</span>
            )}
          </div>
          <div className="miga-card-street">
            {address.calle} {address.numero}
          </div>
          <div className="miga-card-city">
            {address.localidad} · {address.ciudad} <span className="miga-address-coordinates">{address.coordenadas}</span>
          </div>
        </div>
      </div>

      <div className="miga-card-right">
        <button
          type="button"
          className="miga-btn-edit"
          onClick={() => onEdit && onEdit(address)}
          title="Editar dirección"
        >
          <Pencil size={15} />
          <span>Editar</span>
        </button>
      </div>
    </div>
  )
}

import { AlertTriangle, X } from 'lucide-react'

export default function DeleteConfirmModal({ isOpen, address, onConfirm, onCancel }) {
  if (!isOpen || !address) return null

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div
        className="modal-container modal-sm"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="modal-title">Eliminar Dirección</h2>
          <button
            type="button"
            className="btn-modal-close"
            onClick={onCancel}
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="confirm-modal-body">
          <div className="warning-icon-badge">
            <AlertTriangle size={24} />
          </div>
          <p className="confirm-message">
            ¿Está seguro que desea eliminar la dirección{' '}
            <strong>"{address.alias}"</strong> ({address.calle} {address.numero})?
          </p>
          <p className="confirm-subtext">
            Esta acción eliminará la dirección de su cuenta y no se podrá deshacer.
          </p>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancelar
          </button>
          <button
            type="button"
            className="btn-danger-confirm"
            onClick={() => onConfirm(address.id)}
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

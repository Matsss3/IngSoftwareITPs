import { useEffect } from 'react'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => {
      onClose()
    }, toast.duration || 4000)

    return () => clearTimeout(timer)
  }, [toast, onClose])

  if (!toast) return null

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 size={18} className="toast-icon success" />
      case 'error':
        return <AlertCircle size={18} className="toast-icon error" />
      default:
        return <Info size={18} className="toast-icon info" />
    }
  }

  return (
    <div className={`toast-notification toast-${toast.type || 'info'}`} role="status">
      <div className="toast-icon-wrap">{getIcon()}</div>
      <div className="toast-body">
        {toast.title && <strong className="toast-title">{toast.title}</strong>}
        <p className="toast-message">{toast.message}</p>
      </div>
      <button type="button" className="toast-close" onClick={onClose} aria-label="Cerrar notificación">
        <X size={15} />
      </button>
    </div>
  )
}

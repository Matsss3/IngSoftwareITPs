import { useState, useEffect } from 'react'
import {
  Globe, Home, Building2, MapPin, Map,
  Settings, LogOut, ChevronLeft, ChevronRight,
  Pencil, Trash2, X, AlertTriangle
} from 'lucide-react'
import './index.css'

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <Globe size={16} />
        </div>
        <span className="sidebar-logo-text">Mi Consorcio</span>
      </div>

      <nav className="sidebar-nav">
        <p className="sidebar-section-label">General</p>
        <NavItem icon={<Home size={15} />} label="Inicio" />
        <NavItem icon={<Building2 size={15} />} label="Consorcios" />

        <p className="sidebar-section-label">Administración</p>
        <NavItem icon={<Globe size={15} />} label="Países" active />
        <NavItem icon={<Map size={15} />} label="Provincias" />
        <NavItem icon={<MapPin size={15} />} label="Localidades" />
      </nav>

      <div className="sidebar-bottom">
        <NavItem icon={<Settings size={15} />} label="Configuración" />
        <NavItem icon={<LogOut size={15} />} label="Cerrar sesión" />
      </div>
    </aside>
  )
}

function NavItem({ icon, label, active }) {
  return (
    <button className={`nav-item${active ? ' active' : ''}`}>
      {icon}
      <span>{label}</span>
      {active && <span className="nav-item-dot" />}
    </button>
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function Modal({ title, onClose, children }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={15} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

// ─── Confirm Dialog ───────────────────────────────────────────────────────────
function ConfirmDialog({ countryName, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Baja de País</h2>
          <button className="modal-close" onClick={onCancel}>
            <X size={15} />
          </button>
        </div>
        <div className="confirm-body">
          <div className="confirm-icon">
            <AlertTriangle size={22} />
          </div>
          <p className="confirm-text">
            ¿Está seguro que desea dar de baja el país{' '}
            <strong>{countryName}</strong>?
          </p>
          <div className="confirm-footer">
            <button className="btn btn-danger" onClick={onConfirm}>
              Aceptar
            </button>
            <button className="btn btn-secondary" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
const LS_KEY = 'abm-paises'

function App() {
  // Inicialización lazy: lee de localStorage; si no hay nada usa los datos de prueba
  const [paises, setPaises] = useState(() => {
    try {
      const stored = localStorage.getItem(LS_KEY)
      return stored ? JSON.parse(stored) : ['Chile', 'Perú', 'Uruguay']
    } catch {
      return ['Chile', 'Perú', 'Uruguay']
    }
  })

  // Persiste en localStorage cada vez que cambia la lista
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(paises))
  }, [paises])

  // Alta
  const [altaOpen, setAltaOpen] = useState(false)
  const [altaNombre, setAltaNombre] = useState('')
  const [altaError, setAltaError] = useState('')

  // Baja
  const [bajaTarget, setBajaTarget] = useState(null)

  // Modificación
  const [modTarget, setModTarget] = useState(null)
  const [modNombre, setModNombre] = useState('')
  const [modError, setModError] = useState('')

  // ── Alta ────────────────────────────────────────────────────────────────────
  const handleAltaOpen = () => {
    setAltaNombre('')
    setAltaError('')
    setAltaOpen(true)
  }

  const handleAltaAceptar = () => {
    const nombre = altaNombre.trim()
    if (!nombre) {
      setAltaError('El nombre del país no puede estar vacío.')
      return
    }
    if (paises.some(p => p.toLowerCase() === nombre.toLowerCase())) {
      setAltaError('Ya existe un país con ese nombre.')
      return
    }
    setPaises(prev => [...prev, nombre])
    setAltaOpen(false)
    setAltaNombre('')
    setAltaError('')
  }

  const handleAltaCancelar = () => {
    setAltaOpen(false)
    setAltaNombre('')
    setAltaError('')
  }

  // ── Baja ────────────────────────────────────────────────────────────────────
  const handleBajaConfirm = () => {
    setPaises(prev => prev.filter(p => p !== bajaTarget))
    setBajaTarget(null)
  }

  // ── Modificación ────────────────────────────────────────────────────────────
  const handleModOpen = (nombre) => {
    setModTarget(nombre)
    setModNombre(nombre)
    setModError('')
  }

  const handleModAceptar = () => {
    const nombre = modNombre.trim()
    if (!nombre) {
      setModError('El nombre del país no puede estar vacío.')
      return
    }
    if (
      nombre.toLowerCase() !== modTarget.toLowerCase() &&
      paises.some(p => p.toLowerCase() === nombre.toLowerCase())
    ) {
      setModError('Ya existe un país con ese nombre.')
      return
    }
    setPaises(prev => prev.map(p => (p === modTarget ? nombre : p)))
    setModTarget(null)
    setModNombre('')
    setModError('')
  }

  const handleModCancelar = () => {
    setModTarget(null)
    setModNombre('')
    setModError('')
  }

  return (
    <div className="layout">
      <Sidebar />

      <main className="main-content">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <span>Administración</span>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">Países</span>
        </nav>

        {/* Page header */}
        <div className="page-header">
          <h1 className="page-title">Administración de Países</h1>
          <p className="page-subtitle">Gestioná los países disponibles para los consorcios.</p>
        </div>

        {/* Card */}
        <div className="card">
          {/* Toolbar */}
          <div className="card-toolbar">
            <button className="btn btn-primary" onClick={handleAltaOpen}>
              <span className="btn-plus">+</span>
              Alta de País
            </button>
            <span className="card-count">
              {paises.length} {paises.length === 1 ? 'país registrado' : 'países registrados'}
            </span>
          </div>

          {/* Table */}
          <table className="data-table">
            <thead>
              <tr>
                <th>Modificar</th>
                <th>Baja</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {paises.length === 0 ? (
                <tr className="empty-row">
                  <td colSpan={3}>No hay países registrados.</td>
                </tr>
              ) : (
                paises.map((pais) => (
                  <tr key={pais}>
                    <td>
                      <button
                        className="icon-btn icon-btn-edit"
                        title={`Modificar ${pais}`}
                        onClick={() => handleModOpen(pais)}
                      >
                        <Pencil size={15} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="icon-btn icon-btn-delete"
                        title={`Dar de baja ${pais}`}
                        onClick={() => setBajaTarget(pais)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </td>
                    <td>{pais}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="card-pagination">
            <span className="pagination-info">
              Mostrando 1–{paises.length} de {paises.length}{' '}
              {paises.length === 1 ? 'país' : 'países'}
            </span>
            <div className="pagination-controls">
              <button className="page-btn">
                <ChevronLeft size={13} />
              </button>
              <button className="page-btn active">1</button>
              <button className="page-btn">
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── Modal Alta ─────────────────────────────────────────────────────── */}
      {altaOpen && (
        <Modal title="Alta País" onClose={handleAltaCancelar}>
          <div className="form-group">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className={`form-input${altaError ? ' error' : ''}`}
              value={altaNombre}
              onChange={e => { setAltaNombre(e.target.value); setAltaError('') }}
              onKeyDown={e => e.key === 'Enter' && handleAltaAceptar()}
              placeholder="Ingrese el nombre del país"
              autoFocus
            />
            {altaError && <p className="form-error">{altaError}</p>}
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleAltaAceptar}>
              Aceptar
            </button>
            <button className="btn btn-secondary" onClick={handleAltaCancelar}>
              Cancelar
            </button>
          </div>
        </Modal>
      )}

      {/* ── Confirm Baja ───────────────────────────────────────────────────── */}
      {bajaTarget && (
        <ConfirmDialog
          countryName={bajaTarget}
          onConfirm={handleBajaConfirm}
          onCancel={() => setBajaTarget(null)}
        />
      )}

      {/* ── Modal Modificación ─────────────────────────────────────────────── */}
      {modTarget && (
        <Modal title="Modificar País" onClose={handleModCancelar}>
          <div className="form-group">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className={`form-input${modError ? ' error' : ''}`}
              value={modNombre}
              onChange={e => { setModNombre(e.target.value); setModError('') }}
              onKeyDown={e => e.key === 'Enter' && handleModAceptar()}
              autoFocus
            />
            {modError && <p className="form-error">{modError}</p>}
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleModAceptar}>
              Aceptar
            </button>
            <button className="btn btn-secondary" onClick={handleModCancelar}>
              Cancelar
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default App

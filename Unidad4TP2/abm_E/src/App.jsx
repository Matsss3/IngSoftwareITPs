import { useState, useEffect } from 'react'
import { Plus, Bike } from 'lucide-react'
import { INITIAL_ADDRESSES } from './data/initialAddresses'
import MigaHeader from './components/MigaHeader'
import MigaSidebar from './components/MigaSidebar'
import AddressCard from './components/AddressCard'
import AddAddressModal from './components/AddAddressModal'
import './index.css'

const STORAGE_KEY = 'miga_user_addresses'

export default function App() {
  const [addresses, setAddresses] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) return parsed
      }
    } catch (e) {
      console.error('Error loading addresses', e)
    }
    return INITIAL_ADDRESSES
  })

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)

  // Persistir en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses))
    } catch (e) {
      console.error('Error saving addresses', e)
    }
  }, [addresses])

  // Guardar nueva dirección (o actualizar existente)
  const handleSaveAddress = (addressData) => {
    if (editingAddress) {
      setAddresses((prev) =>
        prev.map((item) => (item.id === editingAddress.id ? { ...addressData, id: item.id } : item))
      )
    } else {
      setAddresses((prev) => [...prev, addressData])
    }
    setEditingAddress(null)
  }

  return (
    <div className="miga-app">
      {/* Header superior */}
      <MigaHeader />

      {/* Layout principal: Sidebar + Contenido */}
      <div className="miga-main-layout">
        {/* Sidebar navegación */}
        <MigaSidebar />

        {/* Contenido principal */}
        <main className="miga-content-area">
          <div className="miga-content-header">
            <div>
              <h1 className="miga-page-title">Mis direcciones</h1>
              <p className="miga-page-subtitle">
                Cada antojo empieza con saber dónde encontrarte.
              </p>
            </div>

            <button
              type="button"
              id="btn-add-address"
              className="miga-btn-add-primary"
              onClick={() => {
                setEditingAddress(null)
                setIsAddModalOpen(true)
              }}
            >
              <Plus size={18} strokeWidth={2.5} />
              <span>Agregar dirección</span>
            </button>
          </div>

          <div className="miga-count-label">
            {addresses.length} {addresses.length === 1 ? 'dirección guardada' : 'direcciones guardadas'}
          </div>

          {/* Lista de tarjetas de direcciones */}
          <div className="miga-cards-list">
            {addresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                onEdit={() => {
                  setEditingAddress(address)
                  setIsAddModalOpen(true)
                }}
              />
            ))}
          </div>

          {/* Banner inferior de recomendación */}
          <div className="miga-tip-banner">
            <Bike size={20} className="miga-tip-icon" />
            <span className="miga-tip-text">
              Una dirección precisa nos ayuda a llegar con tu comida a tiempo.
            </span>
          </div>
        </main>
      </div>

      {/* Modal Agregar dirección */}
      <AddAddressModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false)
          setEditingAddress(null)
        }}
        onSaveAddress={handleSaveAddress}
        initialScenarioData={editingAddress}
      />
    </div>
  )
}

import { useState, useEffect } from 'react'
import { X, AlertCircle } from 'lucide-react'
import MigaMap from './MigaMap'

export default function AddAddressModal({
  isOpen,
  onClose,
  onSaveAddress,
  initialScenarioData = null,
}) {
  const [formData, setFormData] = useState({
    coordenadas: '',
    calle: '',
    numero: '',
    ciudad: '',
    localidad: '',
    alias: '',
  })

  const [errors, setErrors] = useState({})
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false)

  // Reset or initialize state
  useEffect(() => {
    if (isOpen) {
      if (initialScenarioData) {
        setFormData(initialScenarioData)
      } else {
        setFormData({
          coordenadas: '',
          calle: '',
          numero: '',
          ciudad: '',
          localidad: '',
          alias: '',
        })
      }
      setErrors({})
      setHasAttemptedSubmit(false)
    }
  }, [isOpen, initialScenarioData])

  if (!isOpen) return null

  // ESCENARIO 3: Cancelación de la carga de dirección
  const handleCancel = () => {
    // Descarta toda la información ingresada
    setFormData({
      coordenadas: '',
      calle: '',
      numero: '',
      ciudad: '',
      localidad: '',
      alias: '',
    })
    setErrors({})
    setHasAttemptedSubmit(false)
    // La ventana modal se cierra sin realizar modificaciones en la cuenta
    onClose()
  }

  // Handle field change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear specific field error
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  // Handle Coordinates Change from Map
  const handleCoordinatesChange = (coords) => {
    setFormData((prev) => ({ ...prev, coordenadas: coords }))
    if (errors.coordenadas) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated.coordenadas
        return updated
      })
    }
  }

  // Validation function matching exact screenshot texts
  const validate = () => {
    const newErrors = {}

    if (!formData.coordenadas || !formData.coordenadas.trim()) {
      newErrors.coordenadas = 'Seleccioná un punto para confirmar las coordenadas.'
    }
    if (!formData.calle || !formData.calle.trim()) {
      newErrors.calle = 'Ingresá la calle.'
    }
    if (!formData.numero || !formData.numero.trim()) {
      newErrors.numero = 'Ingresá el número.'
    }
    if (!formData.ciudad || !formData.ciudad.trim()) {
      newErrors.ciudad = 'Ingresá la ciudad.'
    }
    if (!formData.localidad || !formData.localidad.trim()) {
      newErrors.localidad = 'Ingresá la localidad.'
    }
    if (!formData.alias || !formData.alias.trim()) {
      newErrors.alias = 'Ingresá un alias para esta dirección.'
    }

    return newErrors
  }

  // ESCENARIO 1 & 2: Submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    setHasAttemptedSubmit(true)

    const formErrors = validate()

    // ESCENARIO 2: Intento de guardado con campos obligatorios faltantes
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      // El sistema muestra un mensaje de validación negando el pedido de guardado y los datos no son guardados
      return
    }

    // ESCENARIO 1: Guardado exitoso de una nueva dirección
    onSaveAddress({
      ...formData,
      id: `addr-${Date.now()}`,
      esPredeterminada: false,
    })

    // La ventana modal se cierra automáticamente
    onClose()
  }

  // Check if form is completely filled for button appearance
  const isFormComplete =
    Boolean(formData.coordenadas?.trim()) &&
    Boolean(formData.calle?.trim()) &&
    Boolean(formData.numero?.trim()) &&
    Boolean(formData.ciudad?.trim()) &&
    Boolean(formData.localidad?.trim()) &&
    Boolean(formData.alias?.trim())

  return (
    <div className="miga-modal-overlay" onClick={handleCancel}>
      <div
        className="miga-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="miga-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con botón 'X' en la esquina superior derecha */}
        <div className="miga-modal-header">
          <div>
            <h2 id="miga-modal-title" className="miga-modal-title">
              Agregar dirección
            </h2>
            <p className="miga-modal-subtitle">
              Decinos dónde llevamos tu próximo pedido.
            </p>
          </div>
          <button
            type="button"
            className="miga-modal-close"
            onClick={handleCancel}
            title="Cerrar (Escenario 3)"
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} noValidate className="miga-form">
          <div className="miga-modal-body">
            {/* Campo 1: Coordenadas * */}
            <div className="miga-field-block">
              <div className="miga-label-row">
                <label className="miga-label">
                  Coordenadas <span className="miga-required">*</span>
                </label>
                <span className="miga-label-helper">
                  Ubicá el punto de entrega en el mapa
                </span>
              </div>

              <MigaMap
                coordinates={formData.coordenadas}
                onChange={handleCoordinatesChange}
                hasError={Boolean(errors.coordenadas)}
              />
            </div>

            {/* Fila 2: Calle * y Número * */}
            <div className="miga-row-2">
              <div className="miga-field-block flex-grow-2">
                <label htmlFor="input-calle" className="miga-label">
                  Calle <span className="miga-required">*</span>
                </label>
                <div className="miga-input-wrap">
                  <input
                    id="input-calle"
                    type="text"
                    name="calle"
                    placeholder="Ej. Avenida Corrientes"
                    className={`miga-input ${errors.calle ? 'has-error' : ''}`}
                    value={formData.calle}
                    onChange={handleChange}
                  />
                  {errors.calle && (
                    <span className="miga-error-icon" title={errors.calle}>
                      <AlertCircle size={16} />
                    </span>
                  )}
                </div>
                {errors.calle && (
                  <span className="miga-error-msg">{errors.calle}</span>
                )}
              </div>

              <div className="miga-field-block flex-grow-1">
                <label htmlFor="input-numero" className="miga-label">
                  Número <span className="miga-required">*</span>
                </label>
                <div className="miga-input-wrap">
                  <input
                    id="input-numero"
                    type="text"
                    name="numero"
                    placeholder="Ej. 1066"
                    className={`miga-input ${errors.numero ? 'has-error' : ''}`}
                    value={formData.numero}
                    onChange={handleChange}
                  />
                  {errors.numero && (
                    <span className="miga-error-icon" title={errors.numero}>
                      <AlertCircle size={16} />
                    </span>
                  )}
                </div>
                {errors.numero && (
                  <span className="miga-error-msg">{errors.numero}</span>
                )}
              </div>
            </div>

            {/* Fila 3: Ciudad * y Localidad * */}
            <div className="miga-row-2">
              <div className="miga-field-block">
                <label htmlFor="input-ciudad" className="miga-label">
                  Ciudad <span className="miga-required">*</span>
                </label>
                <div className="miga-input-wrap">
                  <input
                    id="input-ciudad"
                    type="text"
                    name="ciudad"
                    placeholder="Ej. Buenos Aires"
                    className={`miga-input ${errors.ciudad ? 'has-error' : ''}`}
                    value={formData.ciudad}
                    onChange={handleChange}
                  />
                  {errors.ciudad && (
                    <span className="miga-error-icon" title={errors.ciudad}>
                      <AlertCircle size={16} />
                    </span>
                  )}
                </div>
                {errors.ciudad && (
                  <span className="miga-error-msg">{errors.ciudad}</span>
                )}
              </div>

              <div className="miga-field-block">
                <label htmlFor="input-localidad" className="miga-label">
                  Localidad <span className="miga-required">*</span>
                </label>
                <div className="miga-input-wrap">
                  <input
                    id="input-localidad"
                    type="text"
                    name="localidad"
                    placeholder="Ej. San Nicolás"
                    className={`miga-input ${errors.localidad ? 'has-error' : ''}`}
                    value={formData.localidad}
                    onChange={handleChange}
                  />
                  {errors.localidad && (
                    <span className="miga-error-icon" title={errors.localidad}>
                      <AlertCircle size={16} />
                    </span>
                  )}
                </div>
                {errors.localidad && (
                  <span className="miga-error-msg">{errors.localidad}</span>
                )}
              </div>
            </div>

            {/* Fila 4: Alias * */}
            <div className="miga-field-block">
              <label htmlFor="input-alias" className="miga-label">
                Alias <span className="miga-required">*</span>
              </label>
              <div className="miga-input-wrap">
                <input
                  id="input-alias"
                  type="text"
                  name="alias"
                  placeholder="¿Cómo llamamos a este lugar?"
                  className={`miga-input ${errors.alias ? 'has-error' : ''}`}
                  value={formData.alias}
                  onChange={handleChange}
                />
                {errors.alias && (
                  <span className="miga-error-icon" title={errors.alias}>
                    <AlertCircle size={16} />
                  </span>
                )}
              </div>
              {errors.alias ? (
                <span className="miga-error-msg">{errors.alias}</span>
              ) : (
                <span className="miga-input-hint">
                  Ejemplos: Casa, Trabajo o Facultad.
                </span>
              )}
            </div>

            {/* Nota de campos obligatorios */}
            <p className="miga-footnote">
              <span className="miga-required">*</span> Todos los campos son obligatorios.
            </p>
          </div>

          {/* Footer con botón Cancelar y Guardar */}
          <div className="miga-modal-footer">
            <button
              type="button"
              className="miga-btn-cancel"
              onClick={handleCancel}
              title="Cancelar (Escenario 3)"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`miga-btn-submit ${isFormComplete ? 'complete' : 'pending'}`}
              title="Guardar dirección"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

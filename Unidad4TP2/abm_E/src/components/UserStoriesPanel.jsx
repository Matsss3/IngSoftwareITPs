import { useState } from 'react'
import { BookOpen, CheckCircle, AlertCircle, XCircle, Play, Sparkles, Layers, ShieldCheck, ChevronRight } from 'lucide-react'

export default function UserStoriesPanel({ onRunScenario, isOpen, onClose }) {
  const [activeStoryTab, setActiveStoryTab] = useState('hu-01')

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container modal-lg hu-panel"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge hu-badge">
              <BookOpen size={20} />
            </div>
            <div>
              <h2 className="modal-title">Historias de Usuario y Criterios de Aceptación</h2>
              <p className="modal-subtitle">
                Ingeniería de Software I - Especificación y Validación BDD / Gherkin
              </p>
            </div>
          </div>
          <button type="button" className="btn-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Stories Navigation */}
        <div className="hu-tabs-bar">
          <button
            type="button"
            className={`hu-tab-btn ${activeStoryTab === 'hu-01' ? 'active' : ''}`}
            onClick={() => setActiveStoryTab('hu-01')}
          >
            <span>HU-01: Agregar Dirección</span>
            <span className="hu-priority-badge">Prioridad Alta</span>
          </button>
          <button
            type="button"
            className={`hu-tab-btn ${activeStoryTab === 'hu-02' ? 'active' : ''}`}
            onClick={() => setActiveStoryTab('hu-02')}
          >
            <span>HU-02: Seleccionar Entrega</span>
          </button>
          <button
            type="button"
            className={`hu-tab-btn ${activeStoryTab === 'hu-03' ? 'active' : ''}`}
            onClick={() => setActiveStoryTab('hu-03')}
          >
            <span>HU-03: Eliminar Dirección</span>
          </button>
        </div>

        <div className="modal-body-scroll hu-body">
          {activeStoryTab === 'hu-01' && (
            <div className="hu-detail-card">
              {/* Story Meta Header */}
              <div className="hu-header-meta">
                <div className="hu-meta-tag">
                  <strong>ID:</strong> HU-01
                </div>
                <div className="hu-meta-tag">
                  <strong>Título:</strong> Agregar dirección de entrega
                </div>
                <div className="hu-meta-tag">
                  <strong>Estimación:</strong> 5 puntos de historia
                </div>
                <div className="hu-meta-tag highlight">
                  <strong>Prioridad:</strong> 1 (Alta)
                </div>
              </div>

              {/* Description narrative */}
              <div className="hu-narrative-box">
                <p className="narrative-line">
                  <span className="narrative-role">Como</span> usuario de la aplicación de delivery,
                </p>
                <p className="narrative-line">
                  <span className="narrative-role">quiero</span> acceder a un formulario para agregar una nueva dirección,
                </p>
                <p className="narrative-line">
                  <span className="narrative-role">para</span> poder registrar el lugar donde deseo recibir mis pedidos.
                </p>
              </div>

              {/* Acceptance Criteria in Gherkin */}
              <h3 className="hu-scenarios-heading">
                <ShieldCheck size={18} />
                <span>Criterios de Aceptación (Escenarios BDD)</span>
              </h3>

              <div className="scenarios-list">
                {/* Escenario 1 */}
                <div className="scenario-card success-border">
                  <div className="scenario-card-header">
                    <div className="scenario-title-box">
                      <span className="scenario-tag tag-success">Escenario 1</span>
                      <h4 className="scenario-title">Guardado exitoso de una nueva dirección</h4>
                    </div>
                    <button
                      type="button"
                      className="btn-run-scenario"
                      onClick={() => onRunScenario(1)}
                      title="Abrir formulario pre-cargado para probar guardado exitoso"
                    >
                      <Play size={13} fill="currentColor" /> Probar Escenario 1
                    </button>
                  </div>

                  <div className="gherkin-block">
                    <div className="gherkin-line">
                      <span className="k-given">Dado</span> que el cliente se encuentra en la ventana "Agregar dirección"
                    </div>
                    <div className="gherkin-line">
                      <span className="k-and">Y</span> ha completado correctamente los campos obligatorios indicados con asterisco (Coordenadas, Calle, Número, Ciudad, Localidad y Alias)
                    </div>
                    <div className="gherkin-line">
                      <span className="k-when">Cuando</span> el cliente presiona el botón "Guardar"
                    </div>
                    <div className="gherkin-line">
                      <span className="k-then">Entonces</span> el sistema registra la nueva dirección en la cuenta del usuario
                    </div>
                    <div className="gherkin-line">
                      <span className="k-and">Y</span> la ventana modal se cierra automáticamente.
                    </div>
                  </div>
                </div>

                {/* Escenario 2 */}
                <div className="scenario-card danger-border">
                  <div className="scenario-card-header">
                    <div className="scenario-title-box">
                      <span className="scenario-tag tag-danger">Escenario 2</span>
                      <h4 className="scenario-title">Intento de guardado con campos obligatorios faltantes</h4>
                    </div>
                    <button
                      type="button"
                      className="btn-run-scenario btn-danger-scenario"
                      onClick={() => onRunScenario(2)}
                      title="Abrir formulario vacío e intentar guardar para ver validación"
                    >
                      <Play size={13} fill="currentColor" /> Probar Escenario 2
                    </button>
                  </div>

                  <div className="gherkin-block">
                    <div className="gherkin-line">
                      <span className="k-given">Dado</span> que el cliente se encuentra en la ventana "Agregar dirección"
                    </div>
                    <div className="gherkin-line">
                      <span className="k-and">Y</span> ha dejado vacío uno o más campos obligatorios (ej. Calle, Número, Ciudad)
                    </div>
                    <div className="gherkin-line">
                      <span className="k-when">Cuando</span> el cliente presiona el botón "Guardar"
                    </div>
                    <div className="gherkin-line">
                      <span className="k-then">Entonces</span> el sistema muestra un mensaje de validación negando el pedido de guardado
                    </div>
                    <div className="gherkin-line">
                      <span className="k-and">Y</span> los datos no son guardados.
                    </div>
                  </div>
                </div>

                {/* Escenario 3 */}
                <div className="scenario-card neutral-border">
                  <div className="scenario-card-header">
                    <div className="scenario-title-box">
                      <span className="scenario-tag tag-neutral">Escenario 3</span>
                      <h4 className="scenario-title">Cancelación de la carga de dirección</h4>
                    </div>
                    <button
                      type="button"
                      className="btn-run-scenario btn-neutral-scenario"
                      onClick={() => onRunScenario(3)}
                      title="Abrir formulario con datos parciales para probar cancelación"
                    >
                      <Play size={13} fill="currentColor" /> Probar Escenario 3
                    </button>
                  </div>

                  <div className="gherkin-block">
                    <div className="gherkin-line">
                      <span className="k-given">Dado</span> que el cliente se encuentra en la ventana "Agregar dirección"
                    </div>
                    <div className="gherkin-line">
                      <span className="k-and">Y</span> ha ingresado datos parciales en el formulario
                    </div>
                    <div className="gherkin-line">
                      <span className="k-when">Cuando</span> el cliente presiona el botón "Cancelar" o la "X" en la esquina superior derecha
                    </div>
                    <div className="gherkin-line">
                      <span className="k-then">Entonces</span> el sistema descarta toda la información ingresada
                    </div>
                    <div className="gherkin-line">
                      <span className="k-and">Y</span> la ventana modal se cierra sin realizar modificaciones en la cuenta.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStoryTab === 'hu-02' && (
            <div className="hu-detail-card">
              <div className="hu-header-meta">
                <div className="hu-meta-tag"><strong>ID:</strong> HU-02</div>
                <div className="hu-meta-tag"><strong>Título:</strong> Seleccionar dirección activa de entrega</div>
                <div className="hu-meta-tag"><strong>Estimación:</strong> 3 puntos</div>
                <div className="hu-meta-tag"><strong>Prioridad:</strong> Media</div>
              </div>
              <div className="hu-narrative-box">
                <p><strong>Como</strong> usuario de la app de delivery,</p>
                <p><strong>quiero</strong> seleccionar una de mis direcciones registradas como destino de entrega,</p>
                <p><strong>para</strong> que los restaurantes y repartidores sepan a dónde enviar mi orden actual.</p>
              </div>
              <div className="gherkin-block mt-3">
                <div className="gherkin-line"><span className="k-given">Dado</span> que el cliente visualiza sus direcciones registradas</div>
                <div className="gherkin-line"><span className="k-when">Cuando</span> presiona el botón "Entregar aquí" en una de las tarjetas</div>
                <div className="gherkin-line"><span className="k-then">Entonces</span> el sistema actualiza la dirección activa en la barra superior</div>
                <div className="gherkin-line"><span className="k-and">Y</span> muestra la confirmación de selección.</div>
              </div>
            </div>
          )}

          {activeStoryTab === 'hu-03' && (
            <div className="hu-detail-card">
              <div className="hu-header-meta">
                <div className="hu-meta-tag"><strong>ID:</strong> HU-03</div>
                <div className="hu-meta-tag"><strong>Título:</strong> Eliminar dirección registrada</div>
                <div className="hu-meta-tag"><strong>Estimación:</strong> 2 puntos</div>
                <div className="hu-meta-tag"><strong>Prioridad:</strong> Media</div>
              </div>
              <div className="hu-narrative-box">
                <p><strong>Como</strong> usuario de la app de delivery,</p>
                <p><strong>quiero</strong> eliminar una dirección que ya no utilizo,</p>
                <p><strong>para</strong> mantener actualizada y ordenada mi lista de destinos.</p>
              </div>
              <div className="gherkin-block mt-3">
                <div className="gherkin-line"><span className="k-given">Dado</span> que el cliente presiona el ícono de papelera en una dirección</div>
                <div className="gherkin-line"><span className="k-when">Cuando</span> confirma la eliminación en el diálogo de confirmación</div>
                <div className="gherkin-line"><span className="k-then">Entonces</span> la dirección es removida de la cuenta del usuario.</div>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-save" onClick={onClose}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}

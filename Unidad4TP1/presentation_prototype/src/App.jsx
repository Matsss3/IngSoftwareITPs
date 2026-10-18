import { useState } from 'react'
import './App.css'

const initialUsers = [
  { initials: 'VR', name: 'Valentina Ríos', email: 'valentina.rios@nexo.com', department: 'Administración', phone: '+54 11 4321-7890', birth: '11/04/1994', address: 'Av. San Martín 1492, Buenos Aires', color: 'purple' },
  { initials: 'DM', name: 'Diego Méndez', email: 'diego.mendez@nexo.com', department: 'Operaciones', phone: '+54 11 4440-2320', birth: '18/09/1991', address: 'Av. Córdoba 880, Buenos Aires', color: 'blue' },
  { initials: 'CT', name: 'Camila Torres', email: 'camila.torres@nexo.com', department: 'Finanzas', phone: '+54 11 4555-1022', birth: '06/01/1992', address: 'Av. Belgrano 445, Buenos Aires', color: 'orange' },
  { initials: 'NA', name: 'Nicolás Acosta', email: 'nicolas.acosta@nexo.com', department: 'Comercial', phone: '+54 11 4122-9870', birth: '25/03/1990', address: 'Av. Rivadavia 220, Buenos Aires', color: 'indigo' },
  { initials: 'PB', name: 'Paula Benítez', email: 'paula.benitez@nexo.com', department: 'Personas', phone: '+54 11 4870-6502', birth: '09/07/1993', address: 'Av. Callao 311, Buenos Aires', color: 'pink' },
  { initials: 'JC', name: 'Julián Castro', email: 'julian.castro@nexo.com', department: 'Operaciones', phone: '+54 11 4688-1920', birth: '12/12/1989', address: 'Av. Santa Fe 731, Buenos Aires', color: 'slate' },
]

function Icon({ name, size = 16 }) {
  const icons = { 
      logo: '✦', 
      overview: '⌂',
      users: '♙', 
      department: '▣',
      reports: '⌁',
      settings: '⚙',
      bell: '♧', 
      search: '⌕', 
      plus: '+', 
      filter: '☷', 
      export: '⇩',
      edit: '♢',
      remove: '⌁',
      close: '×',
      lock: '♙',
      check: '✓',
      chevron: '⌄',
      back: '‹', 
      forward: '›', 
      help: '?', 
      user: '♙',
      warning: '!',
      alert: '!'
  }
  
  return <span className={`icon icon-${name}`} style={{ fontSize: size }} aria-hidden="true">{icons[name] || '•'}</span>
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [modal, setModal] = useState(null)
  const [users, setUsers] = useState(initialUsers)
  const [notice, setNotice] = useState(null)
  const [loginError, setLoginError] = useState('')
  const [formError, setFormError] = useState('')

  const closeModal = () => { setModal(null); setFormError('') }
  const toast = (message, type = 'success') => { 
      setNotice({ message, type }); 
      window.setTimeout(() => setNotice(null), 3600) 
  }

  // Escenario de Caso de Uso 04 — Acceso Remoto al Sistema.
  const handleLogin = (event) => { 
      event.preventDefault(); 
      const data = new FormData(event.currentTarget); 
      if (!data.get('email') || !data.get('password')) { 
          setLoginError('Ingresá tu correo electrónico y contraseña para continuar.'); 
          return 
      }
      setLoginError(''); 
      setLoggedIn(true);
  }

  // Escenarios de Caso de Uso 01 / 03.
  const saveUser = (event) => {
      event.preventDefault(); 
      const data = Object.fromEntries(new FormData(event.currentTarget));
      if (Object.values(data).some((value) => !value.trim())) {
          setFormError('Completá todos los campos obligatorios.');
          return; 
      } 
      if (!/^\S+@\S+\.\S+$/.test(data.email)) { 
          setFormError('Ingresá una dirección de correo electrónico válida.'); 
          return; 
      } 

      const duplicate = users.some((user) => user.email === data.email && user !== modal.user);
      if (duplicate) { 
          setFormError('Este correo electrónico ya está asociado a una cuenta.');
          return; 
      } 

      if (modal.type === 'new') { 
          const name = `${data.name} ${data.surname}`;
          setUsers((current) => [{ 
              ...data,
              name,
              initials: `${data.name[0]}${data.surname[0]}`.toUpperCase(),
              department: 'Administración', color: 'purple' 
          }, ...current]);
          closeModal();
          toast('El empleado se creó correctamente.')
      } else { 
          const name = `${data.name} ${data.surname}`;
          setUsers((current) => current.map((user) => user === modal.user ? { ...user, ...data, name } : user));
          closeModal();
          toast('Los cambios se guardaron correctamente.')
      } 
  }

  // Escenario de Caso de Uso 02.
  const deactivateUser = () => { 
      if (modal.user.email === 'valentina.rios@nexo.com') { 
          closeModal(); 
          toast('No es posible dar de baja tu propia cuenta.', 'error');
          return; 
      } 
      setUsers((current) => current.map((user) => user === modal.user ? { ...user, inactive: true } : user));
      closeModal(); 
      toast('El usuario se dio de baja correctamente.')
  }
  
  // Escenario de Caso de Uso 05 — Solo frontend.
  const exportUsers = () => toast('La exportación está lista para descargar.')
  if (!loggedIn) return <Login onSubmit={handleLogin} error={loginError} />
  return (
      <div className="app-shell">
          <Sidebar />
          <main className="workspace">
            <Topbar />
            <section className="content">
                <div className="breadcrumbs">
                    <span>Administración</span><b>›</b><strong>Usuarios</strong>
                </div>
                <div className="eyebrow">PERSONAS Y ACCESOS</div>
                <div className="page-heading">
                    <div>
                        <h1>Tu equipo, en un solo lugar</h1>
                        <p>Gestioná la información y el acceso de las personas de tu empresa.</p>
                    </div>
                    <button className="primary" onClick={() => setModal({ type: 'new' })}><Icon name="plus" /> Alta de empleado</button>
                </div>
                <div className="tabs">
                    <button className="active">Todos los usuarios</button>
                    <button>Activos <span>6</span></button>
                    <button>Inactivos <span>0</span></button>
                </div>
                <div className="toolbar">
                    <label className="search">
                        <Icon name="search" />
                        <input placeholder="Buscar por nombre o correo electrónico" />
                    </label>
                    <div className="toolbar-actions">
                        <button className="select-button"><Icon name="filter" /> Todos los departamentos <Icon name="chevron" /></button>
                        <button className="export" onClick={exportUsers}><Icon name="export" /> Exportar</button>
                    </div>
                </div>
                <UserTable users={users} onEdit={(user) => setModal({ type: 'edit', user })} onRemove={(user) => setModal({ type: 'remove', user })} />
            </section>
            <footer>© 2025 Nexo · Grupo Horizonte <span><Icon name="help" /> Un espacio seguro para tu equipo</span></footer>
        </main>
        {notice && <div className={`toast ${notice.type}`}><Icon name={notice.type === 'error' ? 'alert' : 'check'} /> {notice.message}</div>}
        {modal?.type === 'new' || modal?.type === 'edit' ? <EmployeeModal modal={modal} error={formError} onSubmit={saveUser} onClose={closeModal} /> : null}
        {modal?.type === 'remove' ? <RemovalModal user={modal.user} onClose={closeModal} onConfirm={deactivateUser} /> : null}</div>
  )
}

// Escenario de Caso de Uso 04.
function Login({ onSubmit, error }) { 
    return (
        <div className="login-page">
            <header className="login-top"><span>Inicio de sesión</span></header>
            <div className="login-nav">
                <div className="brand">
                    <Icon name="logo" /> 
                    <b>nexo</b>
                </div>
                <span>¿Necesitás ayuda?</span>
            </div>
            <div className="login-card">
                <div className="login-symbol">
                    <Icon name="lock" />
                </div>
                <h1>Te damos la bienvenida</h1>
                <p>Iniciá sesión para conectar con tu equipo.</p>
                <div className="workspace-choice">
                    <span className="workspace-mark">GH</span>
                    <div>
                        <b>Grupo Horizonte</b>
                        <small>Espacio de trabajo</small>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <label>Correo electrónico<input name="email" type="email" placeholder="nombre.apellido@nexo.com" /></label>
                    <label>Contraseña<input name="password" type="password" placeholder="Ingresá tu contraseña" /></label>
                    {error && <p className="form-error"><Icon name="alert" />{error}</p>}
                    <div className="login-options">
                        <label><input type="checkbox" /> Recordarme</label>
                        <button type="button">¿Olvidaste tu contraseña?</button>
                    </div>
                    <button className="primary login-button" type="submit">Iniciar sesión</button>
                </form>
                <div className="secure"><Icon name="lock" /> Conexión segura</div>
            </div>
            <footer className="login-footer">
                <span>© 2025 Nexo · Grupo Horizonte</span>
                <span><Icon name="help" /> Un espacio seguro para tu equipo</span>
            </footer>
        </div>
    ) 
}

function Sidebar() { 
    return (
        <aside className="sidebar">
            <div className="brand">
                <Icon name="logo" /> 
                <b>nexo</b>
            </div>
            <div className="workspace-name">
                Grupo Horizonte 
                <Icon name="chevron" />
                <small>Espacio de trabajo</small>
            </div>
            <nav>
                <small>GESTIÓN</small>
                <a><Icon name="overview" /> Resumen</a>
                <a className="selected"><Icon name="users" /> Usuarios <em>6</em></a>
                <a><Icon name="department" /> Departamentos</a>
                <small>SISTEMA</small>
                <a><Icon name="reports" /> Informes</a>
                <a><Icon name="settings" /> Configuración</a>
            </nav>
            <div className="sidebar-help">
                <Icon name="help" />
                <b>Estamos para ayudarte</b>
                <span>Resolvé tus dudas o<br />contactá al equipo.</span>
                <button>Centro de ayuda <Icon name="forward" /></button>
            </div>
        </aside>
    )
}

function Topbar() { 
    return (
        <header className="topbar">
            <span></span>
            <div>
                <button className="round"><Icon name="bell" /></button>
                <div className="avatar ms">MS</div>
                <div className="profile"><b>Martina Suárez</b><small>Administradora</small></div>
                <Icon name="chevron" />
            </div>
        </header>
    ) 
}

// Escenarios de Caso de Uso 01–05:
function UserTable({ users, onEdit, onRemove }) { 
    return (
        <div className="table-card">
            <table>
                <thead>
                    <tr>
                        <th>Empleado</th>
                        <th>Correo electrónico</th>
                        <th>Departamento</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => 
                        <tr key={user.email}>
                            <td>
                                <span className={`avatar ${user.color}`}>{user.initials}</span>
                                <div>
                                    <b>{user.name}</b>
                                    <small>{user.email === 'valentina.rios@nexo.com' ? 'Administradora' : 'Equipo'}</small>
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td><span className={`status ${user.inactive ? 'inactive' : ''}`}>• {user.inactive ? 'Inactivo' : 'Activo'}</span></td>
                            <td>
                                <button className="action" aria-label={`Modificar ${user.name}`} onClick={() => onEdit(user)}><Icon name="edit" /></button>
                                <button className="action" aria-label={`Dar de baja ${user.name}`} onClick={() => onRemove(user)}><Icon name="remove" /></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className="table-bottom">
                <span>Mostrando 1-6 de 6 usuarios</span>
                <div>
                    <button><Icon name="back" /></button>
                    <button className="current">1</button>
                    <button><Icon name="forward" /></button>
                </div>
            </div>
        </div>
    ) 
}

// Escenario de Caso de Uso 01 pasos 1–8 y Escenario de Caso de Uso 03 pasos 2–10:
function EmployeeModal({ modal, error, onSubmit, onClose }) { 
    const isEdit = modal.type === 'edit'; 
    const user = modal.user; 
    const names = user?.name.split(' ') || []; 
    return (
        <div className="overlay">
            <section className="modal employee-modal">
                <button className="modal-close" onClick={onClose}><Icon name="close" /></button>
                <div className="modal-title">
                    <span className="modal-icon"><Icon name={isEdit ? 'edit' : 'users'} /></span>
                    <div>
                        <h2>{isEdit ? 'Modificar empleado' : 'Un nuevo integrante para tu equipo'}</h2>
                        <p>{isEdit ? 'Actualizá la información personal y de contacto.' : 'Completá la información para darlo de alta.'}</p>
                    </div>
                </div>
                {isEdit && 
                    <div className="edit-person">
                        <span className={`avatar ${user.color}`}>{user.initials}</span>
                        <div>
                            <b>{user.name}</b>
                            <small>{user.email}</small>
                        </div>
                        <span className="status">• Activo</span>
                    </div>
                }
                <div className="section-label">DATOS DEL EMPLEADO <small>* Campos obligatorios</small></div>
                <form onSubmit={onSubmit}>
                    <div className="field-grid">
                        <label>Nombre *<input name="name" defaultValue={isEdit ? names[0] : ''} placeholder="Ej. Sofía" /></label>
                        <label>Apellido *<input name="surname" defaultValue={isEdit ? names.slice(1).join(' ') : ''} placeholder="Ej. Ríos" /></label>
                    </div>
                    <label>Correo electrónico · usuario de acceso *<input name="email" defaultValue={user?.email || ''} placeholder="nombre.apellido@nexo.com" /></label>
                    <div className="field-grid">
                        <label>Teléfono *<input name="phone" defaultValue={user?.phone || ''} placeholder="+54 11 0000-0000" /></label>
                        <label>Fecha de nacimiento *<input name="birth" defaultValue={user?.birth || ''} placeholder="dd/mm/aaaa" /></label>
                    </div>
                    <label>Dirección *<input name="address" defaultValue={user?.address || ''} placeholder="Calle, número y ciudad" /></label>
                    {isEdit ? 
                        <p className="info-line"><Icon name="lock" /> Los cambios se notifican y se registran en su historial.</p> : 
                        <p className="info-line"><Icon name="lock" /> La contraseña se genera automáticamente y se envía por correo.</p>
                    }{error && 
                        <p className="form-error"><Icon name="alert" />{error}</p>
                    }
                    <div className="modal-actions">
                        <span>Todos los datos se guardan de forma segura.</span>
                        <div>
                            <button type="button" className="secondary" onClick={onClose}>Cancelar</button>
                            <button type="submit" className="primary">{isEdit ? 'Guardar cambios' : 'Dar de alta'}</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    ) 
}

// Escenario de Caso de Uso 02 pasos 2–7.
function RemovalModal({ user, onClose, onConfirm }) { 
    return (
        <div className="overlay">
            <section className="modal removal-modal">
                <button className="modal-close" onClick={onClose}><Icon name="close" /></button>
                <span className="modal-icon danger"><Icon name="user" /></span>
                <h2>¿Dar de baja a {user.name.split(' ')[0]}?</h2>
                <p>Confirmá que querés dar de baja a este empleado y revocar su acceso.</p>
                <div className="edit-person">
                    <span className={`avatar ${user.color}`}>{user.initials}</span>
                    <div>
                        <b>{user.name}</b>
                        <small>{user.email}</small>
                    </div>
                    <span className="status">• Activo</span>
                </div>
                <p className="danger-line"><Icon name="warning" /> Perderá el acceso al sistema de forma definitiva. Su historial se conservará para consultas.</p>
                <div className="modal-actions">
                    <span></span>
                    <div>
                        <button className="secondary" onClick={onClose}>Cancelar</button>
                        <button className="danger-button" onClick={onConfirm}>Confirmar baja</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App

# Ingeniería de Software I — TP2: Aplicación de Delivery "miga"
## Módulo: Gestión de Direcciones de Entrega

---

### **Historia de Usuario 01: Agregar dirección de entrega**

- **ID:** HU-01
- **Título:** Agregar dirección de entrega
- **Descripción:**  
  *Como* usuario de la aplicación de delivery "miga",  
  *quiero* acceder a un formulario para agregar una nueva dirección,  
  *para* poder registrar el lugar donde deseo recibir mis pedidos.
- **Estimación:** 5 puntos de historia.
- **Prioridad:** 1 (Alta).

---

### **Criterios de Aceptación (Formato BDD / Gherkin)**

#### **Escenario 1: Guardado exitoso de una nueva dirección**
```gherkin
Escenario: Guardado exitoso de una nueva dirección
  Dado que el cliente se encuentra en la ventana "Agregar dirección"
  Y ha completado correctamente los campos obligatorios indicados con asterisco (Coordenadas, Calle, Número, Ciudad, Localidad y Alias)
  Cuando el cliente presiona el botón "Guardar"
  Entonces el sistema registra la nueva dirección en la cuenta del usuario
  Y la ventana modal se cierra automáticamente.
```

#### **Escenario 2: Intento de guardado con campos obligatorios faltantes**
```gherkin
Escenario: Intento de guardado con campos obligatorios faltantes
  Dado que el cliente se encuentra en la ventana "Agregar dirección"
  Y ha dejado vacío uno o más campos obligatorios (ej. Coordenadas, Calle, Número, Ciudad, Localidad, Alias)
  Cuando el cliente presiona el botón "Guardar"
  Entonces el sistema muestra un mensaje de validación negando el pedido de guardado (indicando visualmente los campos con error: "Ingresá la calle.", "Ingresá el número.", etc.)
  Y los datos no son guardados en la cuenta del usuario.
```

#### **Escenario 3: Cancelación de la carga de dirección**
```gherkin
Escenario: Cancelación de la carga de dirección
  Dado que el cliente se encuentra en la ventana "Agregar dirección"
  Y ha ingresado datos parciales en el formulario
  Cuando el cliente presiona el botón "Cancelar" o la "X" en la esquina superior derecha
  Entonces el sistema descarta toda la información ingresada
  Y la ventana modal se cierra sin realizar modificaciones en la cuenta.
```

---

### **Historias de Usuario Complementarias (Gestión Completa de Direcciones)**

#### **Historia de Usuario 02: Listar direcciones guardadas**
- **Descripción:** Como usuario registrado, quiero ver la lista de todas mis direcciones guardadas con sus etiquetas (Casa, Trabajo, Facultad) para seleccionar rápidamente a dónde quiero que me entreguen.
- **Prioridad:** Alta.
- **Criterios de Aceptación:**
  - **Escenario 1:** Dado que el usuario accede a la sección "Mis direcciones", el sistema lista todas las direcciones registradas con su alias, calle, número, localidad y ciudad.
  - **Escenario 2:** La dirección principal muestra la insignia "Predeterminada".

#### **Historia de Usuario 03: Geolocalización y fijación de coordenadas en mapa**
- **Descripción:** Como usuario, quiero hacer clic en el mapa interactivo para seleccionar la ubicación exacta de entrega y confirmar mis coordenadas geográficas.
- **Prioridad:** Media.
- **Criterios de Aceptación:**
  - **Escenario 1:** Al hacer clic sobre el mapa, el pin se sitúa en el punto indicado y el estado cambia a "Ubicación seleccionada" con las coordenadas latitud/longitud confirmadas.

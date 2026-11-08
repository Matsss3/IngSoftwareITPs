import { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({ nombre: "", apellido: "" });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log(`Nombre: ${formData.nombre}, Apellido: ${formData.apellido}`);
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={manejarCambio}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={manejarCambio}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;

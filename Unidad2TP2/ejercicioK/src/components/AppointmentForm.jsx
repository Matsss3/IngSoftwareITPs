import { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    especialidad: "",
    sede: "",
    fecha: "",
    motivo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Turno solicitado:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4964] font-poppins mb-3">
            Solicitá tu turno
          </h2>
          <p className="text-base sm:text-lg text-[#444444] font-roboto">
            Completá el formulario y nuestro equipo se pondrá en contacto para
            confirmar la disponibilidad.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Fila 1: Datos de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y apellido"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1977CC] focus:border-transparent outline-none text-sm text-gray-800 placeholder-gray-400 bg-white transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1977CC] focus:border-transparent outline-none text-sm text-gray-800 placeholder-gray-400 bg-white transition"
              required
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1977CC] focus:border-transparent outline-none text-sm text-gray-800 placeholder-gray-400 bg-white transition"
              required
            />
          </div>

          {/* Fila 2: Selección de Especialidad, Sede y Fecha */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <select
              name="especialidad"
              value={formData.especialidad}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1977CC] focus:border-transparent outline-none text-sm text-gray-600 bg-white transition"
              required
            >
              <option value="" disabled hidden>
                Elegí una especialidad
              </option>
              <option value="clinica">Clínica médica</option>
              <option value="pediatria">Pediatría</option>
              <option value="cardiologia">Cardiología</option>
              <option value="ginecologia">Ginecología y obstetricia</option>
              <option value="traumatologia">Traumatología</option>
              <option value="laboratorio">Laboratorio e imágenes</option>
            </select>

            <select
              name="sede"
              value={formData.sede}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1977CC] focus:border-transparent outline-none text-sm text-gray-600 bg-white transition"
              required
            >
              <option value="" disabled hidden>
                Elegí una sede
              </option>
              <option value="central">Sede Central</option>
              <option value="norte">Sede Norte</option>
              <option value="sur">Sede Sur</option>
            </select>

            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1977CC] focus:border-transparent outline-none text-sm text-gray-600 bg-white transition"
              required
            />
          </div>

          {/* Fila 3: Motivo de consulta */}
          <div>
            <textarea
              name="motivo"
              rows={4}
              placeholder="Contanos brevemente el motivo de tu consulta o especialidad..."
              value={formData.motivo}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1977CC] focus:border-transparent outline-none text-sm text-gray-800 placeholder-gray-400 bg-white transition resize-none"
            ></textarea>
          </div>

          {/* Botón de envío */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-[#1977CC] hover:bg-[#1565B0] text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-sm font-poppins text-sm sm:text-base"
            >
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

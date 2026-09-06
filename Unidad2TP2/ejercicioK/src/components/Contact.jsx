import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar el envío del formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4964] font-poppins relative inline-block pb-3">
            Contacto
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#1977CC] rounded-full"></span>
          </h2>
          <p className="mt-3 text-base text-[#444444] font-roboto">
            Estamos disponibles para ayudarte a encontrar la atención que
            necesitás.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Columna Izquierda: Datos de contacto */}
          <div className="lg:col-span-5 space-y-8">
            {/* Centro de atención */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#1977CC] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2C4964] font-poppins">
                  Centro de atención
                </h3>
                <p className="text-sm font-medium text-[#444444] font-roboto mt-0.5">
                  0800 000 0000
                </p>
                <p className="text-xs text-gray-500 font-roboto">
                  Lunes a viernes de 8 a 20 h.
                </p>
              </div>
            </div>

            {/* Correo electrónico */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#1977CC] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2C4964] font-poppins">
                  Correo electrónico
                </h3>
                <p className="text-sm text-[#444444] font-roboto mt-0.5">
                  contacto@centromedicohorizonte.example
                </p>
              </div>
            </div>

            {/* Urgencias */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#1977CC] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2C4964] font-poppins">
                  Urgencias
                </h3>
                <p className="text-sm text-[#444444] font-roboto leading-snug mt-0.5">
                  Para emergencias graves, comunicate con el servicio local de
                  emergencias.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de contacto */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre y apellido"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#1977CC] font-roboto placeholder:text-gray-400 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#1977CC] font-roboto placeholder:text-gray-400 transition-colors"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#1977CC] font-roboto placeholder:text-gray-400 transition-colors"
                required
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#1977CC] font-roboto placeholder:text-gray-400 resize-none transition-colors"
                required
              ></textarea>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1977CC] text-white font-medium text-sm rounded-full hover:bg-[#1565b0] transition-colors shadow-sm font-roboto"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

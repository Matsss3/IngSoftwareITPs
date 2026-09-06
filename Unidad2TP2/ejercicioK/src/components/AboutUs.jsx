export default function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Imagen */}
          <div className="w-full flex justify-center">
            <img
              src="/ConsultorioDeUnCentroMdico.png"
              alt="Consultorio de un centro médico"
              className="w-full max-w-lg lg:max-w-none h-[350px] sm:h-[450px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Columna Derecha: Contenido */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4964] font-poppins leading-tight">
                Una institución cercana y confiable
              </h2>
              <p className="text-base sm:text-lg text-[#444444] font-roboto leading-relaxed">
                Trabajamos para que cada persona encuentre atención médica de
                calidad, desde la consulta ambulatoria hasta el diagnóstico y el
                seguimiento.
              </p>
            </div>

            {/* Lista de características */}
            <div className="space-y-6 pt-4">
              {/* Ítem 1 */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1977CC]/10 text-[#1977CC] rounded-xl flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C4964] font-poppins mb-1">
                    Profesionales especializados
                  </h3>
                  <p className="text-sm sm:text-base text-[#444444] font-roboto leading-relaxed">
                    Un equipo interdisciplinario que escucha y acompaña cada
                    necesidad.
                  </p>
                </div>
              </div>

              {/* Ítem 2 */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1977CC]/10 text-[#1977CC] rounded-xl flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C4964] font-poppins mb-1">
                    Diagnóstico y prevención
                  </h3>
                  <p className="text-sm sm:text-base text-[#444444] font-roboto leading-relaxed">
                    Laboratorio y diagnóstico por imágenes con procesos seguros
                    y resultados oportunos.
                  </p>
                </div>
              </div>

              {/* Ítem 3 */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1977CC]/10 text-[#1977CC] rounded-xl flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 4 4 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C4964] font-poppins mb-1">
                    Atención para toda la familia
                  </h3>
                  <p className="text-sm sm:text-base text-[#444444] font-roboto leading-relaxed">
                    Espacios y circuitos de atención para adultos, niños y
                    adolescentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

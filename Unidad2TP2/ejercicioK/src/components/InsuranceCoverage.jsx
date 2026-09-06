export default function InsuranceCoverage() {
  return (
    <section className="bg-[#F1F7FC] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Columna Izquierda: Información principal */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4964] font-poppins">
              Tu cobertura, en un solo lugar
            </h2>
            <p className="text-base text-[#444444] font-roboto leading-relaxed">
              Trabajamos con distintas obras sociales, prepagas y pacientes
              particulares. Consultá previamente la cobertura disponible para
              cada especialidad, sede o estudio.
            </p>
            <div className="pt-2">
              <a
                href="#cobertura"
                className="inline-flex items-center gap-2 text-[#1977CC] font-bold font-roboto text-base hover:underline"
              >
                Consultar cobertura
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas Obras Sociales y Particulares */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Obras Sociales */}
            <div className="p-6 space-y-3">
              <div className="text-[#444444]">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#2C4964] font-poppins mb-1">
                  Obras sociales
                </h3>
                <p className="text-sm text-[#444444] font-roboto">
                  Verificá autorizaciones y requisitos.
                </p>
              </div>
            </div>

            {/* Particulares */}
            <div className="p-6 space-y-3">
              <div className="text-[#444444]">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#2C4964] font-poppins mb-1">
                  Particulares
                </h3>
                <p className="text-sm text-[#444444] font-roboto">
                  Opciones de atención y medios de pago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

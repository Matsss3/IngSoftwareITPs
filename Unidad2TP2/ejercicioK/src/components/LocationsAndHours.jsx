export default function LocationAndHours() {
  const sedes = [
    {
      id: 1,
      name: "Sede Central",
      address: "Av. Central 1234, Ciudad",
      hours: "Lunes a viernes de 8 a 20 h.",
    },
    {
      id: 2,
      name: "Sede Norte",
      address: "Av. del Parque 560, Ciudad",
      hours: "Lunes a viernes de 8 a 19 h.",
    },
    {
      id: 3,
      name: "Sede Sur",
      address: "Ruta Urbana 88, Ciudad",
      hours: "Lunes a viernes de 9 a 18 h.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F1F7FC] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4964] font-poppins relative inline-block pb-3">
            Sedes y horarios
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#1977CC] rounded-full"></span>
          </h2>
          <p className="mt-3 text-base text-[#444444] font-roboto">
            Elegí la sede más conveniente para tu consulta o estudio.
          </p>
        </div>

        {/* Grilla horizontal de sedes (3 columnas en desktop, 1 en mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sedes.map((sede) => (
            <div key={sede.id} className="flex items-start gap-4">
              {/* Ícono de ubicación */}
              <div className="w-11 h-11 rounded-full bg-[#1977CC] flex items-center justify-center shrink-0 shadow-sm mt-1">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              {/* Información de la sede */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#2C4964] font-poppins">
                  {sede.name}
                </h3>
                <p className="text-sm text-[#444444] font-roboto leading-snug">
                  {sede.address}
                </p>
                <p className="text-sm text-[#444444] font-roboto leading-snug">
                  {sede.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

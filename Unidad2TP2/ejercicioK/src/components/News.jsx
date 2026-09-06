export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Consejos para el cuidado preventivo",
      description:
        "Hábitos simples y controles periódicos que ayudan a cuidar tu salud durante todo el año.",
      link: "#",
      // Ícono de tarjeta / informe de salud
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Acompañamiento durante la maternidad",
      description:
        "Información y orientación para transitar cada etapa con el acompañamiento de nuestro equipo.",
      link: "#",
      // Ícono de maternidad / cuidado
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Nuevos servicios de diagnóstico",
      description:
        "Incorporamos herramientas y procesos para facilitar estudios confiables y oportunos.",
      link: "#",
      // Ícono de diagnóstico / microscopio
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4964] font-poppins relative inline-block pb-3">
            Novedades
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#1977CC] rounded-full"></span>
          </h2>
          <p className="mt-3 text-base text-[#444444] font-roboto">
            Noticias, recomendaciones y novedades de nuestra institución.
          </p>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center"
            >
              {/* Ícono contenedor azul */}
              <div className="w-12 h-12 bg-[#1977CC] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-[#2C4964] font-poppins mb-3 min-h-[56px] flex items-center justify-center">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-[#444444] font-roboto leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* Enlace Leer más */}
              <a
                href={item.link}
                className="text-[#1977CC] font-bold font-roboto text-sm hover:underline inline-flex items-center gap-1 mt-auto"
              >
                Leer más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

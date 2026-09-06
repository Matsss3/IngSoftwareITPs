import { useState } from "react";

export default function PatientServices() {
  const [activeTab, setActiveTab] = useState("diagnostico");

  const servicesData = [
    {
      id: "diagnostico",
      label: "Diagnóstico por imágenes",
      title: "Diagnóstico por imágenes",
      description1:
        "Estudios coordinados con equipamiento de última generación y profesionales especializados.",
      description2:
        "Ofrecemos radiología, ecografía, mamografía y otros estudios según indicación médica. Consultá requisitos y preparación al solicitar tu turno.",
      image: "/ConsultorioDeUnCentroMdico.png", // Reemplazar por la imagen correspondiente
    },
    {
      id: "laboratorio",
      label: "Laboratorio",
      title: "Laboratorio de análisis clínicos",
      description1:
        "Análisis de rutina y alta complejidad con procesamiento rápido de muestras.",
      description2:
        "Resultados disponibles en línea y envío por correo electrónico para mayor comodidad.",
      image: "/ConsultorioDeUnCentroMdico.png",
    },
    {
      id: "guardia",
      label: "Guardia médica",
      title: "Guardia médica 24 hs",
      description1:
        "Atención permanente de emergencias y urgencias para adultos y niños.",
      description2:
        "Sistema de triaje prioritario para garantizar una rápida asistencia médica.",
      image: "/ConsultorioDeUnCentroMdico.png",
    },
    {
      id: "vacunatorio",
      label: "Vacunatorio",
      title: "Vacunatorio oficial y privado",
      description1:
        "Aplicación de vacunas de calendario oficial y dosis de cobertura especial.",
      description2:
        "Personal capacitado y cadena de frío garantizada en todas nuestras sedes.",
      image: "/ConsultorioDeUnCentroMdico.png",
    },
    {
      id: "pediatria",
      label: "Atención pediátrica",
      title: "Atención pediátrica integral",
      description1:
        "Acompañamiento especializado en el desarrollo y salud de niños y adolescentes.",
      description2:
        "Consultorios acondicionados para brindar una experiencia tranquila y segura.",
      image: "/ConsultorioDeUnCentroMdico.png",
    },
  ];

  const currentService =
    servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4964] font-poppins mb-3">
            Servicios para pacientes
          </h2>
          <p className="text-base sm:text-lg text-[#444444] font-roboto">
            Información sobre las áreas que complementan tu atención médica.
          </p>
        </div>

        {/* Estructura principal: Pestañas + Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columna Izquierda: Menú de pestañas */}
          <div className="lg:col-span-3 flex flex-col space-y-2 border-b lg:border-b-0 lg:border-r border-gray-100 pb-4 lg:pb-0">
            {servicesData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-4 py-3 rounded-lg font-roboto text-sm sm:text-base transition-colors duration-150 ${
                  activeTab === tab.id
                    ? "text-[#1977CC] font-bold bg-[#1977CC]/5"
                    : "text-[#444444] font-medium hover:text-[#1977CC] hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Columna Derecha: Contenido e Imagen */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Texto del servicio seleccionado */}
            <div className="space-y-4">
              <div className="border-l-4 border-[#1977CC] pl-4">
                <h3 className="text-2xl font-bold text-[#2C4964] font-poppins">
                  {currentService.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#444444] font-roboto leading-relaxed">
                {currentService.description1}
              </p>
              <p className="text-sm sm:text-base text-[#444444] font-roboto leading-relaxed">
                {currentService.description2}
              </p>
            </div>

            {/* Imagen del servicio */}
            <div className="w-full flex justify-center">
              <img
                src="/PatientServicesImg.png"
                alt={currentService.title}
                className="w-full h-[260px] sm:h-[320px] object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

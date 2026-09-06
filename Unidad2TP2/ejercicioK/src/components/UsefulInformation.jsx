import { useState } from "react";

export default function UsefulInformation() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo solicito un turno?",
      answer:
        "Podés solicitar un turno a través de nuestro portal web de pacientes, por WhatsApp o llamando a nuestra central de atención telefónica de lunes a viernes.",
    },
    {
      question: "¿Qué debo llevar a la consulta?",
      answer:
        "Debés presentar tu Documento Nacional de Identidad (DNI), la credencial de tu obra social o prepaga y las autorizaciones o la orden médica correspondiente si aplica.",
    },
    {
      question: "¿Dónde consulto mis estudios e informes?",
      answer:
        "Podés acceder a tus resultados y estudios de imágenes ingresando a la sección 'Portal del Paciente' en nuestro sitio web con tu usuario y contraseña.",
    },
    {
      question: "¿La guardia atiende sin turno?",
      answer:
        "Sí, nuestra guardia médica atiende las 24 horas por orden de llegada con sistema de triaje prioritario según la urgencia médica.",
    },
    {
      question: "¿Qué cobertura aceptan?",
      answer:
        "Trabajamos con las principales obras sociales y prepagas del país, además de atención a pacientes particulares. Te sugerimos consultar la lista actualizada en nuestra sección de Cobertura.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F1F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4964] font-poppins relative inline-block pb-3">
            Información útil
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#1977CC] rounded-full"></span>
          </h2>
          <p className="mt-3 text-base text-[#444444] font-roboto">
            Respuestas a las consultas más frecuentes antes de tu visita.
          </p>
        </div>

        {/* Lista de preguntas (Acordeón) */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-gray-50/60 transition-colors"
                >
                  <span className="font-semibold text-[#2C4964] font-poppins text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#1977CC] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Respuesta desplegable */}
                {isOpen && (
                  <div className="px-6 pb-4 pt-1 text-sm sm:text-base text-[#444444] font-roboto border-t border-gray-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

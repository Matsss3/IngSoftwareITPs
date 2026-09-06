export default function HealthTeam() {
  const doctors = [
    {
      id: 1,
      role: "Especialista en clínica médica",
      specialty: "Atención de adultos",
      image: "/ProfesionalDeClnicaMdica.png",
    },
    {
      id: 2,
      role: "Especialista en pediatría",
      specialty: "Niños y adolescentes",
      image: "/ProfesionalDePediatra.png",
    },
    {
      id: 3,
      role: "Especialista en cardiología",
      specialty: "Prevención cardiovascular",
      image: "/ProfesionalDeCardiologa.png",
    },
    {
      id: 4,
      role: "Especialista en diagnóstico",
      specialty: "Estudios complementarios",
      image: "/ProfesionalDeDiagnstico.png",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4964] font-poppins relative inline-block pb-3">
            Equipo de salud
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#1977CC] rounded-full"></span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#444444] font-roboto">
            Profesionales preparados para brindarte una atención responsable y
            humana.
          </p>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4"
            >
              <img
                src={doctor.image}
                alt={doctor.role}
                className="w-32 h-32 rounded-full object-cover shadow-inner"
              />
              <div className="space-y-2 w-full">
                <h3 className="text-lg font-bold text-[#2C4964] font-poppins leading-snug">
                  {doctor.role}
                </h3>
                <p className="text-sm text-[#444444] font-roboto pb-3 relative inline-block">
                  {doctor.specialty}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-gray-200"></span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

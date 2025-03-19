import Image from "next/image";

export default function Nosotros() {
  return (
    <section className="w-full">
      {/* SECCIÓN PRINCIPAL CON IMAGEN DE FONDO */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Imagen de fondo optimizada */}
        <div className="absolute inset-0">
          <Image
            src="/Nosotros.jpg"
            alt="Nosotros"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Superposición azul semitransparente */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/40 to-transparent"></div>

        {/* Contenido centrado */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-6 sm:px-12">
          <h1 className="text-3xl md:text-5xl font-bold">Nosotros</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            With a belief that knowledge is power, we connect our patients directly with their results 
            so they have valuable health information when they need it most, care about our people and 
            are committed to excellence in our work.
          </p>

          {/* Botones responsivos */}
          <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
            >
              → Política de Calidad y Competencia Técnica
            </a>
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium text-white border border-white rounded-lg hover:bg-white hover:text-blue-600 transition w-full sm:w-auto text-center"
            >
              Política de Imparcialidad y Confidencialidad
            </a>
          </div>
        </div>
      </div>

      {/* SECCIÓN ADICIONAL CON TEXTO + IMAGEN RESPONSIVA */}
      <div className="container mx-auto px-6 py-16 bg-white rounded-lg shadow-lg mt-12 flex flex-col md:flex-row items-center">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/nosotros-equipo.jpg"
              alt="Nuestro equipo"
              width={600}
              height={400}
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left md:pl-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Nuestro Equipo
          </h2>

          <p className="text-gray-600 mt-4">
            Nuestro personal de trabajo está constituido por un grupo de especialistas en materia ambiental con
            <span className="font-bold"> experiencia en análisis en laboratorio</span> para brindar un servicio de calidad.
          </p>

          {/* Lista con Flexbox */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-200 text-green-600 flex items-center justify-center rounded-full mr-3">
                ✔
              </div>
              <h3 className="text-lg font-semibold text-blue-900">APOYO</h3>
            </div>
            <p className="text-gray-600 ml-10">
              Contamos con un sistema logístico, además de procedimientos acreditados para atender sus consultas, 
              planificar y ejecutar el servicio y aplicar medidas preventivas y de atención de contingencias 
              garantizando resultados confiables.
            </p>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-200 text-green-600 flex items-center justify-center rounded-full mr-3">
                ✔
              </div>
              <h3 className="text-lg font-semibold text-blue-900">OFRECEMOS</h3>
            </div>
            <p className="text-gray-600 ml-10">
              Canales de comunicación que permiten una atención rápida. Precios competitivos de accesibilidad al cliente. 
              Servicios de soporte para asegurarle un monitoreo eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


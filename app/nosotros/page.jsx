import Image from "next/image";

export default function Nosotros() {
  return (
    <section className="w-full">
      {/* SECCIÓN PRINCIPAL CON IMAGEN DE FONDO */}
      <div className="relative w-full h-screen">
        {/* Imagen de fondo optimizada */}
        <div className="absolute inset-0">
          <Image
            src="/Nosotros.jpg" // Asegúrate de que el nombre y extensión sean correctos
            alt="Nosotros"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Superposición con un azul semitransparente */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/40 to-transparent"></div>

        {/* Contenido centrado */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold">Nosotros</h1>
          <p className="mt-4 max-w-2xl text-lg">
            With a belief that knowledge is power, we connect our patients directly with their results so they have
            valuable health information when they need it most, care about our people and are committed to excellence in
            our work.
          </p>

          {/* Botones */}
          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              → Política de Calidad y Competencia Técnica
            </a>
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium text-white border border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Política de Imparcialidad y Confidencialidad
            </a>
          </div>
        </div>
      </div>

      {/* SECCIÓN ADICIONAL CON ESTILO PROFESIONAL */}
      <div className="container mx-auto px-6 py-16 bg-white rounded-lg shadow-lg mt-12 flex flex-col md:flex-row items-center">
        {/* Imagen a la izquierda con bordes redondeados */}
        <div className="relative w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg relative">
            <Image
              src="/nosotros-equipo.jpg" // Asegúrate de que la imagen está en 'public/'
              alt="Nuestro equipo"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Tarjeta flotante a la izquierda */}
          {/* <div className="absolute -bottom-6 -left-6 bg-teal-500 text-white p-4 rounded-lg flex items-center shadow-lg">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16l-2-2m0 0l2-2m-2 2h8m-6-6h6m4 4v6m0 0h6m-6 0h-6"
              ></path>
            </svg>
            <span className="text-sm font-semibold">New Advanced Instruments</span>
          </div> */}
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-blue-900">
          Nuestro Equipo

          </h2>

          <p className="text-gray-600 mt-4">
          Nuestro personal de trabajo está constituido por un grupo de especialistas en materia ambiental con
            <span className="font-bold">  experiencia en análisis en laboratorio</span> para brindar un servicio de calidad.
          </p>

          {/* Lista de beneficios */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-200 text-green-600 flex items-center justify-center rounded-full mr-3">
                ✔
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">APOYO</h3>
                <p className="text-gray-600">
                Contamos con un sistema logístico, además de procedimientos acreditados para atender sus consultas, planificar y ejecutar el servicio y aplicar medidas preventivas y de atención de contingencias garantizando resultados confiables.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-200 text-green-600 flex items-center justify-center rounded-full mr-3">
                ✔
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">OFRECEMOS</h3>
                <p className="text-gray-600">
                Canales de comunicación que permiten una atención rápida. Precios competitivos de accesibilidad al cliente. Servicios de soporte para asegurarle un monitoreo eficiente.
                </p>
              </div>
            </div>

            {/* <div className="flex items-start">
              <div className="w-8 h-8 bg-green-200 text-green-600 flex items-center justify-center rounded-full mr-3">
                ✔
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Family Scholarship Program</h3>
                <p className="text-gray-600">
                  Please avoid wearing scented perfumes or creams when visiting our Patient Service Centres.
                </p>
              </div>
            </div> */}
          </div>

          {/* Botón de acción */}
          {/* <div className="mt-6">
            <a
              href="#"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-md hover:bg-blue-700 transition flex items-center justify-center w-[220px]"
            >
              → Book A Lab Visit
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}


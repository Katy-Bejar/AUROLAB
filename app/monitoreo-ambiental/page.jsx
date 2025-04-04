import Image from "next/image";

export default function Ambiental() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative text-center p-12 md:p-20 bg-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Monitoreo Ambiental Integral</h1>
          <p className="text-xl md:text-2xl mb-8">Especialistas en análisis ambiental para la seguridad, calidad y cumplimiento normativo</p>
          <div className="bg-green-600 inline-block px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300">
            Solicitar cotización
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/images/ambiente-lab.jpg" 
              alt="Laboratorio ambiental"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-800 mb-6">🌿 ¿Qué hacemos en Medio Ambiente?</h2>
            <p className="text-lg mb-6">
              Ofrecemos servicios de monitoreo ambiental bajo los más altos estándares técnicos y normativos, con más de <strong>800 parámetros acreditados</strong> por INACAL e IAS, ambos miembros del acuerdo internacional ILAC-MRA.
            </p>
            <p className="text-lg">
              Cumplimos con los <strong>Estándares de Calidad Ambiental (ECA)</strong> para Agua, Aire, Suelo, Ruido, así como los <strong>Límites Máximos Permisibles (LMP)</strong> y otros reglamentos ambientales nacionales e internacionales.
            </p>
          </div>
        </div>
      </div>

      {/* Servicios */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nuestros Servicios de Monitoreo</h2>
          
          {/* Agua */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image 
                  src="/images/monitoreo-agua.jpg" 
                  alt="Técnico recolectando muestra de agua"
                  width={400}
                  height={300}
                  className="h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Monitoreo de Calidad de Agua</h3>
                <p className="mb-6">Realizamos análisis físico-químicos, microbiológicos y contaminantes especializados en fuentes naturales, industriales y recreativas.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Parámetros de campo: pH, Conductividad, Temperatura, OD, Salinidad, Caudal, Cloro</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Aniones y cationes (Cromatografía Iónica)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Metales totales y disueltos (ICP-MASA y ICP-OES)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Microbiológico, parasitológico e hidrobiológico</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Análisis en piscinas (amebas)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>TPH: C6-C40 (fracciones)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Pesticidas, COVs, BTEX, PAHs, PCBs, Gasolina, entre otros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Aire */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/3">
                <Image 
                  src="/images/monitoreo-aire.jpg" 
                  alt="Captadores de aire en azotea"
                  width={400}
                  height={300}
                  className="h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Monitoreo de Calidad de Aire</h3>
                <p className="mb-6">Medimos la presencia de contaminantes en el aire ambiente para garantizar la salud pública y cumplir la normativa vigente.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Material particulado: PM10, PM2.5, PTS</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Gases: SO₂, NO₂, CO, H₂S, O₃</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Metales pesados: Plomo, Mercurio</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Barrido de 33 metales (ICP)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Benceno, NH₃, HCl, COVs, Aniones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suelo */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image 
                  src="/images/monitoreo-suelo.jpg" 
                  alt="Técnico tomando muestra de suelo"
                  width={400}
                  height={300}
                  className="h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Monitoreo de Suelo, Sedimentos y Lodos</h3>
                <p className="mb-6">Evaluamos el estado ambiental del suelo a través de análisis integrales que identifican contaminantes y características fisicoquímicas.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Metales pesados (33 elementos)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>PCBs, BTEX, COVs, PAHs, Pristanos y Fitanos</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>TPH: Fracciones C6–C40</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Cianuro libre, bario, carbono, materia orgánica</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Análisis microbiológicos y fisicoquímicos</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Macrobentos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emisiones */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/3">
                <Image 
                  src="/images/monitoreo-emisiones.jpg" 
                  alt="Equipo de muestreo en chimenea"
                  width={400}
                  height={300}
                  className="h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Monitoreo de Emisiones</h3>
                <p className="mb-6">Medimos contaminantes emitidos por fuentes estacionarias como calderas o chimeneas, usando protocolos reconocidos (EPA, NTP).</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Gases: CO, CO₂, NOx, SO₂, O₂</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Material particulado (EPA 5, AP-42)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Dioxinas y Furanos, COVs</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Metales + Hg (EPA 29)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Azufre pirítico, análisis de filtros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ruido */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image 
                  src="/images/monitoreo-ruido.jpg" 
                  alt="Técnico midiendo ruido"
                  width={400}
                  height={300}
                  className="h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Monitoreo de Ruido</h3>
                <p className="mb-6">Determinamos los niveles sonoros en entornos urbanos, industriales o laborales para evaluar exposición y cumplimiento normativo.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Ruido ambiental (diurno y nocturno)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Ruido continuo</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Ruido ocupacional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Radiación */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/3">
                <Image 
                  src="/images/monitoreo-radiacion.jpg" 
                  alt="Antena con medidor EMF"
                  width={400}
                  height={300}
                  className="h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Monitoreo de Radiación No Ionizante</h3>
                <p className="mb-6">Verificamos que los niveles de campos electromagnéticos emitidos por diversas fuentes estén dentro de lo permitido.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Aplicaciones: telecomunicaciones, electricidad, entorno urbano</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✔️</span>
                    <span>Evaluación de cumplimiento con límites seguros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas servicios de monitoreo ambiental?</h2>
          <p className="text-xl mb-8">Contáctanos para asesorarte sobre el mejor plan para tus necesidades</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300">
              Solicitar información
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300">
              Llamar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
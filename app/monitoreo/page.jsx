import Image from "next/image";

export default function Monitoreo() {
  return (
    <section className="w-full">
      {/* SECCIÓN PRINCIPAL CON IMAGEN DE FONDO */}
      <div className="relative w-full h-screen flex items-center justify-start px-6 sm:px-16">
        {/* Imagen de fondo optimizada */}
        <div className="absolute inset-0">
          <Image
            src="/monitoreo-fondo.jpg"
            alt="Monitoreo"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Superposición azul semitransparente */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/40 to-transparent"></div>

        {/* Contenido centrado */}
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold">Monitoreo</h1>
          <p className="mt-4 text-lg md:text-xl">
            The information gathered can help confirm the cause of health 
            concerns or rule out any potential concerns which are critical 
            tools in helping healthcare providers understand.
          </p>

          {/* Botones responsivos */}
          {/* <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
            >
              → Insurance Plans
            </a>
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium text-white border border-white rounded-lg hover:bg-white hover:text-blue-600 transition w-full sm:w-auto text-center"
            >
              Prepare For A Test
            </a>
          </div> */}
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-10 mt-12">
        {/* Sidebar Izquierdo */}
        <div className="w-full lg:w-1/4 space-y-6">
          {/* Lista de Tests */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900">Servicios</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Monitoreo Ambiental",
                "Monitoreo Ocupacional",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`block px-4 py-3 rounded-lg ${
                      index === 0
                        ? "bg-green-400 text-white"
                        : "bg-blue-900 text-white hover:bg-blue-800"
                    } transition`}
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección de Preparación */}
          <div className="bg-green-400 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Se realizan Monitoreo Ambientales y ocupacionales   
            .</h3>
            <p className="mt-2 text-sm">
              To reduce your wait time, complete the personal information on the form.
            </p>
          </div>

          {/* Descarga de Brochures */}
          {/* <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900">Download Brochure</h3>
            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="flex items-center justify-between px-4 py-3 bg-green-400 text-white rounded-lg hover:bg-green-500 transition"
              >
                <span>📄 Our Report 2022</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-between px-4 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
              >
                <span>📄 Company Brochure</span>
              </a>
            </div>
          </div> */}
        </div>

        {/* Contenido Principal */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold text-blue-900">Overview</h2>
          <p className="mt-4 text-gray-600">
            Organic acids are a broad class of compounds formed during fundamental metabolic 
            processes in the body. Metabolic reactions produce these compounds from the digestion 
            of dietary protein, fat, and carbohydrates.
          </p>

          {/* Imagen con Botón de Video */}
          {/* <div className="relative mt-6">
            <Image
              src="/general-diagnostic-video.jpg"
              alt="General Diagnostic"
              width={800}
              height={450}
              className="rounded-lg shadow-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                ▶
              </span>
            </button>
          </div> */}

          {/* Imágenes Adicionales */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/monitoreo-ambiental.jpg"
              alt="Blood Test"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/monitoreo-ocupacional.jpg"
              alt="Sample Analysis"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

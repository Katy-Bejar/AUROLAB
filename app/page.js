'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const serviciosRef = useRef(null);
  const isInView = useInView(serviciosRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] md:h-[600px] lg:h-[900px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://demo.cmssuperheroes.com/themeforest/chemlabs/wp-content/uploads/chemlabs-slider-1.jpg)",
            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
            BIENVENIDO A AUROLAB
          </h1>
          <Link href="/cotizacion">
          <button className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-white text-blue-900 font-bold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition">
            Solicitar una Cotización
          </button>
          </Link>
        </div>
      </div>

      {/* Servicios */}
      <div className="container mx-auto mt-12 px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-700 uppercase">
          Atención a Nivel Nacional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Análisis Químico",
              description: "Evaluación de propiedades químicas y físicas en muestras.",
              image: "/fisicoquimico.jpg",
              button: "→ Ver más información",
              href: "/analisis/quimico",
            },
            {
              title: "Análisis Microbiológico",
              description: "Detección de microorganismos en diversas muestras.",
              image: "/microbiologico.jpg",
              button: "→ Ver más información",
              href: "/analisis/microbiologico",
            },
            {
              title: "Monitoreo Ambiental",
              description: "Control y evaluación de calidad ambiental.",
              image: "/monitoreo.jpg",
              button: "→ Ver más información",
              href: "/monitoreo",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-[200px] md:h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 hover:opacity-40 transition duration-300"></div>
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 500 50"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,50 C150,0 350,0 500,50 L500,50 L0,50 Z"
                    className="fill-white"
                  ></path>
                </svg>
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-blue-900">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mt-2">{service.description}</p>
                <Link href={service.href}>
                  <span className="mt-4 inline-block px-3 py-1 md:px-4 md:py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition">
                    {service.button}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Adicional */}
      <div className="max-w-6xl mx-auto p-4 md:p-6" ref={serviciosRef}>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-700 uppercase">
          Más Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {[
            {
              title: "Innovación en Vacunas a Gran Velocidad",
              description:
                "La seguridad es clave en este proceso, por lo que identificamos y discutimos factores clave en el desarrollo de vacunas.",
              image: "/certificado.jpg",
              tag: "Vacunas",
              tagColor: "bg-blue-500",
            },
            {
              title: "Aumento de la Inscripción en Ensayos Clínicos",
              description:
                "Brindamos soporte en el reclutamiento de pacientes para ensayos clínicos, asegurando calidad y precisión.",
              image: "/info.jpg",
              tag: "Investigación",
              tagColor: "bg-yellow-500",
            },
            {
              title: "Incorporando la Voz del Paciente",
              description:
                "Ayudamos a integrar la perspectiva del paciente en procesos de reclutamiento y desarrollo médico.",
              image: "/hoja.jpg",
              tag: "Participación",
              tagColor: "bg-teal-500",
            },
            {
              title: "Cerrando la Brecha en Oncología Pediátrica",
              description:
                "El entorno regulatorio ayuda a los patrocinadores con esfuerzos complejos en oncología pediátrica.",
              iframe: "https://www.youtube.com/embed/TCkE9s-sku8",
              tag: "Pediatría",
              tagColor: "bg-green-500",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {service.iframe ? (
                <iframe
                  className="w-full h-48 md:h-72"
                  src={service.iframe}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="w-full h-48 md:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900 opacity-0 hover:opacity-40 transition duration-300"></div>
                </div>
              )}
              <div className="p-4">
                <span
                  className={`${service.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {service.tag}
                </span>
                <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

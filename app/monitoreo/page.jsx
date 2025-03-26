'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Monitoreo() {
  return (
    <section className="w-full overflow-x-hidden">
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
            <h3 className="text-lg font-semibold">
              Se realizan Monitoreo Ambientales y Ocupacionales.
            </h3>
            <p className="mt-2 text-sm">
              To reduce your wait time, complete the personal information on the form.
            </p>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold text-blue-900">Overview</h2>
          <p className="mt-4 text-gray-600">
            Organic acids are a broad class of compounds formed during fundamental metabolic 
            processes in the body. Metabolic reactions produce these compounds from the digestion 
            of dietary protein, fat, and carbohydrates.
          </p>

          {/* Imágenes Adicionales con animación y efecto hover */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "/monitoreo-ambiental.jpg",
                alt: "Monitoreo Ambiental",
              },
              {
                src: "/monitoreo-ocupacional.jpg",
                alt: "Monitoreo Ocupacional",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
                className="relative rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-blue-500/40 hover:shadow-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 hover:opacity-50 transition duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


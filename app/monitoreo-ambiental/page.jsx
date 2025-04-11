"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MolecularBackground from '@/components/MolecularBackground';

export default function Ambiental() {
  return (
    <div className="bg-gradient-to-b">
      <MolecularBackground />
      {/* Hero Section */}
      <section className="relative text-center p-12 md:p-20 bg-green-800 text-white h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Nosotros.jpg"
            alt="Equipo de laboratorio realizando análisis ambientales"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            MONITOREO AMBIENTAL INTEGRAL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8"
          >
            Especialistas en análisis ambiental para la seguridad, calidad y cumplimiento normativo
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 inline-block px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300 cursor-pointer"
          >
            Solicitar cotización
          </motion.div>
        </div>
      </section>

      {/* Introducción */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/monitoreo-ambiental-inicio.jpeg"
              alt="Laboratorio ambiental"
              width={600}
              height={350}
              className="rounded-lg object-cover w-full h-auto scale-100 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-800 mb-6">🌿 ¿Qué hacemos en Medio Ambiente?</h2>
            <p className="text-lg mb-6 text-black">
              Ofrecemos servicios de monitoreo ambiental bajo los más altos estándares técnicos y normativos, con más de <strong>800 parámetros acreditados</strong> por INACAL e IAS, ambos miembros del acuerdo internacional ILAC-MRA.
            </p>
            <p className="text-lg text-black">
              Cumplimos con los <strong>Estándares de Calidad Ambiental (ECA)</strong> para Agua, Aire, Suelo, Ruido, así como los <strong>Límites Máximos Permisibles (LMP)</strong> y otros reglamentos ambientales nacionales e internacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-16">Nuestros Servicios de Monitoreo</h2>

          {/* Bloques de Servicios */}
          {[
            {
              title: "Monitoreo de Calidad de Agua",
              description: "Realizamos análisis físico-químicos, microbiológicos y contaminantes especializados en fuentes naturales, industriales y recreativas.",
              image: "/calidad-agua.jpg",
              reverse: false,
              items: [
                "Parámetros de campo: pH, Conductividad, Temperatura, OD, Salinidad, Caudal, Cloro",
                "Aniones y cationes (Cromatografía Iónica)",
                "Metales totales y disueltos (ICP-MASA y ICP-OES)",
                "Microbiológico, parasitológico e hidrobiológico",
                "Análisis en piscinas (amebas)",
                "TPH: C6-C40 (fracciones)",
                "Pesticidas, COVs, BTEX, PAHs, PCBs, Gasolina, entre otros"
              ]
            },
            {
              title: "Monitoreo de Calidad de Aire",
              description: "Medimos la presencia de contaminantes en el aire ambiente para garantizar la salud pública y cumplir la normativa vigente.",
              image: "/calidad-aire.jpg",
              reverse: true,
              items: [
                "Material particulado: PM10, PM2.5, PTS",
                "Gases: SO₂, NO₂, CO, H₂S, O₃",
                "Metales pesados: Plomo, Mercurio",
                "Barrido de 33 metales (ICP)",
                "Benceno, NH₃, HCl, COVs, Aniones"
              ]
            },
            {
              title: "Monitoreo de Suelo, Sedimentos y Lodos",
              description: "Evaluamos el estado ambiental del suelo a través de análisis integrales que identifican contaminantes y características fisicoquímicas.",
              image: "/calidad-suelo.jpg",
              reverse: false,
              items: [
                "Metales pesados (33 elementos)",
                "PCBs, BTEX, COVs, PAHs, Pristanos y Fitanos",
                "TPH: Fracciones C6–C40",
                "Cianuro libre, bario, carbono, materia orgánica",
                "Análisis microbiológicos y fisicoquímicos",
                "Macrobentos"
              ]
            }
          ].map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg mb-12 overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-l-8 hover:border-green-600"
            >
              <div className={`md:flex ${servicio.reverse ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/3">
                  <Image
                    src={servicio.image}
                    alt={servicio.title}
                    width={500}
                    height={350}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">{servicio.title}</h3>
                  <p className="mb-6 text-black">{servicio.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servicio.items.map((item, i) => (
                      <li key={i} className="flex items-start group transition-transform duration-200 hover:scale-105 text-blue-900">
                        <span className="text-green-600 mr-2 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">✔️</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-green-800 text-white py-16">
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
      </section>
    </div>
  );
}

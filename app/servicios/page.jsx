'use client';
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Servicios() {
  useEffect(() => {
    window.scrollTo(0, 0); // Forzar el scroll al inicio de la página
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Título de la página */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            NUESTROS  <span className="text-blue-600">SERVICIOS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Servicios destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Análisis Ambientales",
              description: "Evaluación de agua, aire, suelo y sedimentos con metodologías acreditadas",
              icon: "/icons/analisis-ambiental.svg"
            },
            {
              title: "Monitoreo Ocupacional",
              description: "Evaluación de agentes físicos y químicos en ambientes laborales",
              icon: "/icons/monitoreo-ocupacional.svg"
            },
            {
              title: "Asesoría Técnica",
              description: "Consultoría especializada en gestión ambiental y seguridad ocupacional",
              icon: "/icons/asesoria-tecnica.svg"
            },
            {
              title: "Planificación Logística",
              description: "Diseño e implementación de sistemas de monitoreo ambiental",
              icon: "/icons/planificacion-logistica.svg"
            },
            {
              title: "Gestión de Contingencias",
              description: "Protocolos para prevención y atención de situaciones emergentes",
              icon: "/icons/gestion-contingencias.svg"
            },
            {
              title: "Capacitaciones",
              description: "Programas de formación en seguridad y monitoreo ambiental",
              icon: "/icons/capacitaciones.svg"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all h-full"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Servicios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicios = [
    {
      title: "Análisis Ambientales",
      description: "Evaluación de agua, aire, suelo y sedimentos con metodologías acreditadas",
      icon: "/laboratory.png"
    },
    {
      title: "Monitoreo Ocupacional",
      description: "Evaluación de agentes físicos y químicos en ambientes laborales",
      icon: "/investigacion.png"
    },
    {
      title: "Asesoría Técnica",
      description: "Consultoría especializada en gestión ambiental y seguridad ocupacional",
      icon: "/observacion.png"
    },
    {
      title: "Planificación Logística",
      description: "Diseño e implementación de sistemas de monitoreo ambiental",
      icon: "/ciencia-de-los-datos.png"
    },
    {
      title: "Gestión de Contingencias",
      description: "Protocolos para prevención y atención de situaciones emergentes",
      icon: "/laboratory-equipment.png"
    },
    {
      title: "Capacitaciones",
      description: "Programas de formación en seguridad y monitoreo ambiental",
      icon: "/presentacion.png"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            NUESTROS <span className="text-blue-600">SERVICIOS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4" />
        </motion.div>

        {/* Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all h-full group"
            >
              {/* Ícono estilizado */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <div className="relative w-8 h-8">
                  <Image
                    src={service.icon}
                    alt={`Ícono de ${service.title}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Texto */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

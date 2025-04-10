'use client';
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Servicios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicios = [
    {
      title: "Análisis Ambientales",
      description: "Evaluación de agua, aire, suelo y sedimentos con metodologías acreditadas",
      icon: "/laboratory.png",
      borderColor: "border-blue-200",
      innerColor: "bg-blue-50"
    },
    {
      title: "Monitoreo Ocupacional",
      description: "Evaluación de agentes físicos y químicos en ambientes laborales",
      icon: "/investigacion.png",
      borderColor: "border-green-200",
      innerColor: "bg-green-50"
    },
    {
      title: "Asesoría Técnica",
      description: "Consultoría especializada en gestión ambiental y seguridad ocupacional",
      icon: "/observacion.png",
      borderColor: "border-purple-200",
      innerColor: "bg-purple-50"
    },
    {
      title: "Planificación Logística",
      description: "Diseño e implementación de sistemas de monitoreo ambiental",
      icon: "/ciencia-de-los-datos.png",
      borderColor: "border-amber-200",
      innerColor: "bg-amber-50"
    },
    {
      title: "Gestión de Contingencias",
      description: "Protocolos para prevención y atención de situaciones emergentes",
      icon: "/laboratory-equipment.png",
      borderColor: "border-red-200",
      innerColor: "bg-red-50"
    },
    {
      title: "Capacitaciones",
      description: "Programas de formación en seguridad y monitoreo ambiental",
      icon: "/presentacion.png",
      borderColor: "border-indigo-200",
      innerColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:py-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              NUESTROS SERVICIOS
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales y personalizadas para todas tus necesidades ambientales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative ${service.innerColor} rounded-xl p-8 border-2 ${service.borderColor} hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center`}
            >
              {/* Ícono con fondo suave */}
              <div className={`w-20 h-20 rounded-full ${service.innerColor} border border-white flex items-center justify-center mb-6 transition-all`}>
                <div className="relative w-10 h-10">
                  <Image
                    src={service.icon}
                    alt={`Ícono de ${service.title}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contacto"
            className="inline-block bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:brightness-110 transition-all"
          >
            Contáctanos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
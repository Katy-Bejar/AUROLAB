'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <section className="w-full overflow-x-hidden bg-white">
      {/* SECCIÓN PRINCIPAL CON IMAGEN DE FONDO */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Nosotros.jpg"
            alt="Equipo de laboratorio realizando análisis ambientales"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 flex flex-col items-center text-center text-white px-6 sm:px-12 max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Expertos en Soluciones Ambientales Integrales
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 max-w-4xl text-lg md:text-xl leading-relaxed"
          >
            Más de 7 años de experiencia nos respaldan en el análisis y monitoreo ambiental, 
            ofreciendo servicios técnicos especializados con los más altos estándares de calidad.
          </motion.p>
        </div>
      </div>

      {/* SECCIÓN DE SERVICIOS */}
      <div className="container mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Nuestros Servicios Especializados</h2>
          <p className="text-gray-700 text-lg">
            Laboratorio acreditado bajo la norma ISO 17025:2017 por INACAL e IAS, ofreciendo resultados confiables 
            y trazables internacionalmente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} service={service} />
          ))}
        </div>
      </div>

      {/* SECCIÓN DE CERTIFICACIONES */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Certificaciones Internacionales</h2>
            <p className="text-gray-700 text-lg">
              Contamos con el respaldo de las más prestigiosas organizaciones de acreditación a nivel mundial.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} index={index} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente para las tarjetas de servicio
const ServiceCard = ({ index, service }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow hover:border-blue-200 group"
  >
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
      <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">{service.title}</h3>
    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{service.desc}</p>
  </motion.div>
);

// Componente para las tarjetas de certificación
const CertificationCard = ({ index, cert }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-lg shadow-md text-center min-w-[200px] flex flex-col items-center hover:shadow-lg transition-shadow"
  >
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
    <h3 className="text-lg font-bold text-blue-900">{cert.name}</h3>
    <p className="text-gray-600 font-medium">{cert.org}</p>
    <p className="text-gray-500 text-sm mt-1">{cert.desc}</p>
    <p className="text-gray-400 text-xs mt-2">{cert.detail}</p>
  </motion.div>
);

// Datos de servicios
const services = [
  {
    title: "Monitoreo y Ensayos Ambientales",
    desc: "Evaluación de calidad del aire, agua y suelo mediante técnicas acreditadas bajo normas internacionales."
  },
  {
    title: "Calibración de Equipos e Instrumentos de Medición",
    desc: "Certificación de precisión metrológica para instrumentos de laboratorio y campo."
  },
  {
    title: "Diagnóstico, Mantenimiento Preventivo y Correctivo de Equipos",
    desc: "Servicios técnicos especializados para equipos analíticos y de monitoreo ambiental."
  },
  {
    title: "Ensayos Agronómicos y Asesoramiento Agrícola",
    desc: "Análisis de suelos, tejidos vegetales y aguas para optimización agrícola."
  },
  {
    title: "Servicios Analíticos y Monitoreo de Agentes Ocupacionales",
    desc: "Evaluación de riesgos químicos, físicos y biológicos en ambientes laborales."
  },
  {
    title: "Ensayos de Productos Alimenticios",
    desc: "Control de calidad e inocuidad alimentaria mediante análisis fisicoquímicos y microbiológicos."
  },
  {
    title: "Ensayos de Muestras Geoquímicas",
    desc: "Caracterización de muestras minerales y geológicas con técnicas especializadas."
  },
  {
    title: "Ensayos Hidrobiológicos",
    desc: "Estudios de calidad acuática mediante análisis de comunidades biológicas."
  },
  {
    title: "Ensayos Parasitológicos",
    desc: "Detección e identificación de parásitos en muestras ambientales y biológicas."
  },
  {
    title: "Ensayos Microbiológicos",
    desc: "Análisis de microorganismos en matrices diversas con métodos estandarizados."
  },
  {
    title: "Ensayos Fitopatológicos",
    desc: "Diagnóstico de enfermedades vegetales y evaluación de fitosanitarios."
  },
  {
    title: "Biología Molecular",
    desc: "Técnicas avanzadas de PCR y secuenciación para estudios ambientales y biológicos."
  },
  {
    title: "Ensayos de Peligrosidad de Residuos",
    desc: "Clasificación de residuos según su potencial peligroso mediante pruebas normalizadas."
  },
  {
    title: "Ensayos Toxicológicos",
    desc: "Evaluación de efectos adversos de sustancias en sistemas biológicos."
  }
];

// Datos de certificaciones
const certifications = [
  { 
    name: "ISO 17025:2017", 
    org: "INACAL", 
    desc: "Norma peruana NTP-ISO/IEC 17025:2017",
    detail: "Sistema de gestión para laboratorios de ensayo y calibración"
  },
  { 
    name: "Acreditación IAS", 
    org: "Internacional", 
    desc: "International Accreditation Service",
    detail: "Reconocimiento global de competencia técnica"
  },
  { 
    name: "Certificación A2LA", 
    org: "Estados Unidos", 
    desc: "American Association for Laboratory Accreditation",
    detail: "Estándares de calidad americanos"
  },
  { 
    name: "ILAC-MRA", 
    org: "Reconocimiento mutuo", 
    desc: "International Laboratory Accreditation Cooperation",
    detail: "Validez internacional de resultados"
  }
];
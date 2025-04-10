'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <section className="w-full overflow-x-hidden bg-white">
      {/* HERO SECTION - MEJORADO */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Nosotros.jpg"
            alt="Equipo de laboratorio"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="brightness-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/50 to-blue-900/30"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center text-white px-6 sm:px-12 max-w-6xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">EXPERTOS</span> EN SOLUCIONES AMBIENTALES
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-4xl text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-blue-100 drop-shadow-md"
          >
            Más de 7 años de experiencia nos respaldan en el análisis y monitoreo ambiental con los más altos estándares de calidad.
          </motion.p>
        </motion.div>
      </div>

      {/* SERVICIOS - DISEÑO MEJORADO */}
      <div className="relative bg-white py-16 md:py-24">
        {/* Fondo decorativo abstracto */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern-labs.svg')] bg-[length:300px] bg-repeat opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-blue-600">Servicios</span> Especializados
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg md:text-xl">
              Laboratorio acreditado bajo la norma ISO 17025:2017, ofreciendo resultados confiables y trazables internacionalmente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* CERTIFICACIONES - DISEÑO MEJORADO */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Certificaciones <span className="text-blue-600">Internacionales</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg md:text-xl">
              Respaldados por las más prestigiosas organizaciones de acreditación a nivel mundial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} index={index} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// COMPONENTE SERVICIO MEJORADO
const ServiceCard = ({ index, service }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
  >
    {/* Efecto de gradiente al hacer hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative z-10 p-6 h-full flex flex-col">
      {/* Icono con fondo de gradiente */}
      <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p>
      
      {/* Detalle decorativo */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mb-4"></div>
      
      {/* Badge de especialidad */}
      <div className="self-start px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
        Especializado
      </div>
    </div>
  </motion.div>
);

// COMPONENTE CERTIFICACIÓN MEJORADO
const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
  >
    <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
      {/* Icono con animación */}
      <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center shadow-inner group-hover:shadow-md transition-shadow">
        <svg className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{cert.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{cert.org}</p>
      <p className="text-gray-600 mb-4">{cert.desc}</p>
      
      {/* Sello decorativo */}
      <div className="mt-auto pt-4 border-t border-gray-100 w-full">
        <span className="inline-block px-2 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded">
          {cert.detail}
        </span>
      </div>
    </div>
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
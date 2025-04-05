'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Acreditaciones() {
    return (
        <main className="bg-gray-100">

            {/* Introducción con fondo imagen + overlay azul */}
            <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/acreditacion.jpg')" }} // ← reemplaza con tu imagen
                ></div>

                {/* Superposición azul translúcida */}
                <div className="absolute inset-0 bg-blue-800/60 backdrop-brightness-100"></div>

                {/* Contenido centrado */}
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent flex items-center justify-center gap-3"
                    >
                        <svg className="w-10 h-10 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 21H5a1 1 0 01-.78-1.63L11 10.46V5a1 1 0 112 0v5.46l6.78 8.91A1 1 0 0119 21z" />
                        </svg>
                        Acreditaciones
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg text-white"
                    >
                        Contamos con acreditaciones que garantizan la calidad y confiabilidad de nuestros servicios, cumpliendo con los estándares nacionales e internacionales.
                    </motion.p>
                </div>
            </section>

            {/* Sección de Ventajas */}
            <section className="py-20 bg-white">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">

                        {/* Imagen decorativa */}
                        <div>
                            <Image
                                src="/labcertificado.jpg"
                                alt="Laboratorio acreditado"
                                width={500}
                                height={400}
                                className="rounded-xl shadow-xl w-full object-cover"
                            />
                        </div>

                        {/* Contenido con animación */}
                        <div className="flex flex-col justify-center">
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl md:text-3xl font-bold text-blue-700 mb-8 text-center md:text-left"
                            >
                                ¿Por qué trabajar con un laboratorio acreditado?
                            </motion.h2>

                            <ul className="space-y-6 text-gray-700 text-lg">
                                {[
                                    'Garantía de resultados confiables y precisos.',
                                    'Cumplimiento con estándares internacionales de calidad.',
                                    'Personal altamente calificado y tecnología de punta.',
                                    'Reconocimiento nacional e internacional.',
                                    'Compromiso con la mejora continua y la excelencia.',
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                            <svg
                                                className="w-4 h-4 text-blue-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Certificados */}
            <section className="py-20 bg-[#002678] text-white relative overflow-hidden">
                <div className="relative z-10 container mx-auto max-w-6xl px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold text-center tracking-wide mb-16 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent flex items-center justify-center gap-4"
                    >
                        {/* Ícono de diploma */}
                        <svg
                            className="w-10 h-10 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20 2H4a2 2 0 00-2 2v12a2 2 0 002 2h6v2.586l2 2 2-2V18h6a2 2 0 002-2V4a2 2 0 00-2-2zm0 14H4V4h16v12z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Certificados de Nuestro Laboratorio
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
                        {[
                            { src: '/certificadoinacal.jpg', alt: 'certificado inacal', width: 400, height: 300 },
                            { src: '/era_certificado.jpg', alt: 'certificado era', width: 400, height: 300 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-4 rounded-xl shadow-xl transform transition hover:scale-105"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={item.width}
                                    height={item.height}
                                    className="object-cover rounded"
                                />
                                <p className="mt-2 text-center text-sm font-medium text-gray-700"></p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Separador */}
            <div className="h-1 bg-gray-200 my-12 rounded-full w-3/4 mx-auto"></div>

            {/* Sección de Imágenes de Acreditaciones
            <section className="py-10">
                <div className="container mx-auto max-w-6xl px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-center text-[#002678] mb-16"
                    >
                        Nuestras Acreditaciones
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-12 justify-items-center">
                        {[
                            { src: '/inacal.png', alt: 'INACAL', description: '', width: 280, height: 280 },
                            { src: '/ias.png', alt: 'IAS', description: '', width: 380, height: 380 },
                            { src: '/iso.png', alt: 'ISO 17025', description: '', width: 130, height: 130 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={item.width}
                                    height={item.height}
                                    className="object-contain"
                                />
                                <p className="text-lg font-semibold text-gray-800">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Separador
            <div className="h-1 bg-gray-200 my-12 rounded-full w-3/4 mx-auto"></div> */}

            {/* Descarga PDFs */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto max-w-6xl px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-[#002678] mb-12"
                    >
                        Descarga nuestras acreditaciones
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            { name: 'Acreditación INACAL', file: '/acreditacion-inacal.pdf' },
                            { name: 'Acreditación IAS', file: '/acreditacion-ias.pdf' },
                        ].map((pdf, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-md"
                            >
                                <h3 className="text-lg font-semibold text-gray-800">{pdf.name}</h3>
                                <Link
                                    href={pdf.file}
                                    download
                                    className="mt-4 inline-block px-6 py-2 bg-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-900 transition"
                                >
                                    Descargar PDF
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

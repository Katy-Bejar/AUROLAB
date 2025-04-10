'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { useState, useEffect } from 'react';

// Carga dinámica con SSR desactivado
const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  { 
    ssr: false,
    loading: () => <LoadingPlaceholder />
  }
);

const LoadingPlaceholder = () => (
  <div className="flex items-center justify-center h-full bg-gray-50">
    <div className="text-center p-8">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-12 w-12 bg-blue-200 rounded-full mb-4"></div>
        <div className="h-4 bg-blue-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-blue-200 rounded w-1/2"></div>
      </div>
    </div>
  </div>
);

// Paleta de colores profesional
const colors = {
  primary: '#2563EB',
  secondary: '#7C3AED',
  accent: '#10B981',
  dark: '#1E293B',
  light: '#F8FAFC'
};
// Estilos premium para el PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica-Bold',
    backgroundColor: '#F8FAFC',
    position: 'relative'
  },
  watermark: {
    position: 'absolute',
    opacity: 0.03,
    fontSize: 120,
    color: colors.primary,
    transform: 'rotate(-30deg)',
    left: 100,
    top: 300
  },
  header: {
    marginBottom: 25,
    alignItems: 'center',
    position: 'relative'
  },
  logo: {
    width: 100,
    marginBottom: 15
  },
  titleContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1
  },
  subtitle: {
    fontSize: 12,
    color: colors.dark,
    textAlign: 'center',
    opacity: 0.8,
    marginBottom: 5
  },
  dateBadge: {
    backgroundColor: colors.accent,
    color: 'white',
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    marginTop: 5
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  card: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderTopWidth: 4,
    minHeight: 180
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.dark
  },
  cardContent: {
    fontSize: 11,
    lineHeight: 1.5,
    color: '#64748B'
  },
  fullWidthCard: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 9,
    color: '#94A3B8',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const ValoresPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Marca de agua */}
      <Text style={styles.watermark}>AUROLAB</Text>

      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>NUESTROS VALORES</Text>
        </View>
        <Text style={styles.subtitle}>Principios que guían nuestro trabajo diario</Text>
        <Text style={styles.dateBadge}>Actualizado: {new Date().toLocaleDateString()}</Text>
      </View>

      {/* Grid de valores */}
      <View style={styles.gridContainer}>
        {/* Fila 1 */}
        <View style={[styles.card, { borderTopColor: colors.primary }]}>
          <Text style={styles.cardTitle}>Innovación</Text>
          <Text style={styles.cardContent}>
            Lideramos el desarrollo farmacéutico con soluciones vanguardistas y tecnología de punta. 
            Nuestro equipo de investigación trabaja incansablemente para revolucionar los tratamientos médicos.
          </Text>
        </View>

        <View style={[styles.card, { borderTopColor: colors.secondary }]}>
          <Text style={styles.cardTitle}>Integridad</Text>
          <Text style={styles.cardContent}>
            Operamos con absoluta transparencia y ética profesional. Cada proceso y decisión en Aurolab 
            sigue los más estrictos estándares de compliance y buenas prácticas.
          </Text>
        </View>

        {/* Fila 2 */}
        <View style={[styles.card, { borderTopColor: colors.accent }]}>
          <Text style={styles.cardTitle}>Excelencia Científica</Text>
          <Text style={styles.cardContent}>
            Nos regimos por los más altos estándares de calidad. Desde el diseño experimental hasta 
            la producción final, cada paso es supervisado por nuestro equipo de expertos.
          </Text>
        </View>

        <View style={[styles.card, { borderTopColor: '#F59E0B' }]}>
          <Text style={styles.cardTitle}>Responsabilidad Social</Text>
          <Text style={styles.cardContent}>
            Contribuimos al desarrollo sostenible mediante programas de acceso a medicamentos, 
            apoyo a comunidades vulnerables y prácticas ambientalmente responsables.
          </Text>
        </View>
      </View>

      {/* Valor destacado */}
      <View style={styles.fullWidthCard}>
        <Text style={[styles.cardTitle, { fontSize: 18 }]}>
          Trabajo en Equipo
        </Text>
        <Text style={[styles.cardContent, { fontSize: 12 }]}>
          En Aurolab cultivamos una cultura de colaboración donde cada miembro es valorado. Nuestro modelo 
          interdisciplinario combina el conocimiento de químicos, biólogos, médicos y especialistas 
          regulatorios para lograr resultados excepcionales.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text>Documento interno - Confidencial</Text>
        <Text>© {new Date().getFullYear()} Aurolab - Todos los derechos reservados</Text>
      </View>
    </Page>
  </Document>
);

export default function PDFViewerPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async () => {
    try {
      const blob = await pdf(<ValoresPDF />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Valores-Aurolab.pdf';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Valores Corporativos</h1>
                <p className="text-blue-100 opacity-90 max-w-2xl">
                  El marco ético y profesional que define nuestra identidad institucional
                </p>
              </div>
              
              <Link 
                href="/nosotros/valores" 
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all border border-white/20 hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Volver</span>
              </Link>
            </div>
          </div>

          <div className="p-6">
            <div className="h-[75vh] rounded-xl overflow-hidden bg-gray-50 border border-gray-200 shadow-inner">
              {isClient && (
                <PDFViewer 
                  width="100%" 
                  height="100%"
                  showToolbar={true}
                  className="rounded-lg"
                >
                  <ValoresPDF />
                </PDFViewer>
              )}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar Documento
              </button>
              
              <Link
                href="/nosotros/valores"
                className="flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver Versión Resumida
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Aurolab © {new Date().getFullYear()} • Documento válido hasta diciembre 2024</p>
        </div>
      </motion.div>
    </div>
  );
}
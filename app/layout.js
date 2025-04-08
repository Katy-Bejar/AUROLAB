import FloatingButtons from '@/components/FloatingButtons';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from '@/components/AnimatedBackground';
import "./globals.css";

export const metadata = {
  title: "AuroLab",
  description: "Página oficial de AuroLab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full">
      <body className="relative min-h-screen">
        {/* Fondo animado - ahora con clase específica */}
        <div className="animated-background">
          <AnimatedBackground />
        </div>
        
        {/* Estructura principal */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          {/* Contenido principal */}
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </div>
        
        <FloatingButtons />
      </body>
    </html>
  );
}
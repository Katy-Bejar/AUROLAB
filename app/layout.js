import FloatingButtons from '@/components/FloatingButtons';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from '@/components/AnimatedBackground';
import SciFiBackground from '@/components/SciFiBackground';
import InteractiveBiotechBackground from '@/components/InteractiveBiotechBackground';
import DynamicLabBackground from "@/components/DynamicLabBackground";

import "./globals.css";

export const metadata = {
  title: "AuroLab",
  description: "Página oficial de AuroLab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full">
      <body className="relative">
        {/* Estructura principal */}
        
        <div className="flex flex-col min-h-screen relative z-10 bg-white">
          <Navbar />
          
          {/* Contenido principal */}
          <main className="flex-grow">
            {/* Fondo animado SOLO para el área del main */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <InteractiveBiotechBackground   />
            </div>
            
            {/* Contenido de la página */}
            <div className="relative z-10">
              {children}
            </div>
          </main>
          
          <Footer />
        </div>
        
        <FloatingButtons />
      </body>
    </html>
  );
}
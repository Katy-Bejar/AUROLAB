import FloatingButtons from '@/components/FloatingButtons';

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "AuroLab",
  description: "Página oficial de AuroLab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />

      </body>
    </html>
  );
}

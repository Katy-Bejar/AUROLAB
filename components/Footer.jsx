import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <Image src="/aurolab.jpg" alt="Logo AuroLab" width={120} height={80} className="mb-4 rounded-lg" />
          <p className="text-gray-300 text-sm">
            Comprometidos con la calidad en servicios de análisis y monitoreo ambiental.
          </p>
        </div>

        {/* Nosotros */}
        <div>
          <h3 className="font-bold text-lg mb-4">Nosotros</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/nosotros">¿Quiénes somos?</Link></li>
            <li><Link href="/analisis/quimico">Análisis Fisicoquímico</Link></li>
            <li><Link href="/analisis/microbiologico">Análisis Microbiológico</Link></li>
            <li><Link href="/monitoreo">Monitoreo Ambiental</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-green-400" />
              <a href="tel:+51941678446" className="hover:underline">+51 941 678 446</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-green-400" />
              <a href="mailto:comercial@aurolab.com.pe" className="hover:underline">comercial@aurolab.com.pe</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-green-400" />
              <span>Avenida Canadá, entre RosaLuz y Santa Rosa</span>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="font-bold text-lg mb-4">Síguenos</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/AuroLaboratorio/" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="text-white hover:text-[#21CDAD] transition" />
            </a>
            <a href="https://www.instagram.com/aurolaboratorio/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="text-white hover:text-[#21CDAD] transition" />
            </a>
            <a href="https://www.youtube.com/channel/UCPfSUFOpvglkc-Q30QLEeXg" target="_blank" rel="noopener noreferrer">
              <Youtube size={24} className="text-white hover:text-[#21CDAD] transition" />
            </a>
            <a href="https://www.linkedin.com/company/aurolab-s-a-c/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="text-white hover:text-[#21CDAD] transition" />
            </a>
            <a href="https://www.tiktok.com/@laboratorioauro?lang=es" target="_blank" rel="noopener noreferrer">
              <Image src="/tiktok-icon.png" alt="TikTok" width={24} height={24} className="hover:opacity-80 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Créditos inferiores */}
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AuroLab S.A.C. | Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

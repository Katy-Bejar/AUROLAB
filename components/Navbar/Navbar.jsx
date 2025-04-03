'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Menu, X, Search } from 'lucide-react';
import { links } from '@/data/links';
import NavItem from './NavItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  const toggleDropdown = (key) => {
    setIsOpen((prev) => ({ [key]: !prev[key] }));
  };

  const closeDropdown = () => setIsOpen({});

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Función para cerrar el menú móvil
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si el scroll está en la parte superior de la página
      if (currentScrollY === 0) {
        setIsScrolled(false);
        setHasScrolledOnce(false); // Opcional: restablecer el estado de "ha hecho scroll"
      }
      // Si el scroll es mayor a 50 y es la primera vez que se hace scroll
      else if (currentScrollY > 50 && !hasScrolledOnce) {
        setIsScrolled(true);
        setHasScrolledOnce(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledOnce]);

  return (
    <>
      {/* NAVBAR SUPERIOR */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Phone size={16} className="text-green-400" />
            <span className="hidden sm:inline">Celular: 941 678 446</span>
            <MapPin size={16} className="text-green-400" />
            <span className="hidden sm:inline">Ubicación: Lima</span>
            <Clock size={16} className="text-green-400" />
            <span className="hidden sm:inline">Lun - Vie: 9:00am - 6:00pm</span>
          </div>
        </div>
      </div>

      {/* NAVBAR PRINCIPAL */}
      <nav
        className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'
          }`}
      >
        <div className="container flex justify-between items-center ml-15">
          {/* Logo + Nombre */}
          <Link href="/" className="flex items-center space-x-2 ml-60">
            <Image
              src="/logo1.jpeg"
              alt="Logo de AuroLab"
              width={400}
              height={200}
              className={`transition-all duration-300 ${isScrolled ? 'w-40 h-10' : 'w-54 h-14'
                }`}
            />
          </Link>

          {/* Menú principal (Desktop) */}
          <ul className="hidden md:flex space-x-6 text-blue-900" ref={dropdownRef}>
            {Object.values(links).map((link, index) => (
              <NavItem
                key={index}
                link={link}
                isOpen={isOpen[link.href]}
                toggle={() => toggleDropdown(link.href)}
                close={closeDropdown}
              />
            ))}
          </ul>

          {/* Zona derecha: buscador + botón */}
          {/* <div className="hidden md:flex items-center space-x-4"> */}
          {/* Buscador */}
          {/* <div className="flex items-center space-x-2">
              <Search size={20} className="text-blue-900" />
              <input
                type="text"
                placeholder="Buscar..."
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#21CDAD] transition-all duration-200"
              />
            </div> */}

          {/* Botón de contacto */}
          {/* <Link
              href="/contacto"
              className="bg-[#21CDAD] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#1fb49a] transition"
            >
              Contáctanos
            </Link>
          </div> */}

          {/* Botón menú móvil */}
          <button className="md:hidden text-blue-900 hover:text-blue-600 mr-4" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 px-4">
            <ul className="flex flex-col space-y-4 text-blue-900">
              {Object.values(links).map((link, index) => (
                <NavItem
                  key={index}
                  link={link}
                  isOpen={isOpen[link.href]}
                  toggle={() => toggleDropdown(link.href)}
                  close={closeDropdown}
                  isMobile
                  closeMobileMenu={closeMobileMenu} // Pasa la función para cerrar el menú móvil
                />
              ))}
            </ul>

            {/* Buscador + botón de contacto en móvil */}
            <div className="mt-4 flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Search size={20} className="text-blue-900" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#21CDAD] transition-all duration-200"
                />
              </div>

              <Link
                href="/contacto"
                className="bg-[#21CDAD] text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-[#1fb49a] transition"
                onClick={closeMobileMenu} // Cierra el menú móvil al hacer clic
              >
                Contáctanos
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
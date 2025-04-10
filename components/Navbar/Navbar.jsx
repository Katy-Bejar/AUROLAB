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
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  // Manejo de dropdowns
  const toggleDropdown = (key) => {
    setIsOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const closeAllDropdowns = () => setIsOpen({});

  // Manejo del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    if (!isMobileMenuOpen) {
      closeAllDropdowns();
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    closeAllDropdowns();
  };

  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMobileMenu();
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50" ref={navbarRef}>
      {/* Barra superior de contacto */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-start items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-green-400 flex-shrink-0" />
              <span className="hidden sm:inline">Celular: 941 678 446</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green-400 flex-shrink-0" />
              <span className="hidden sm:inline">Ubicación: Lima</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-green-400 flex-shrink-0" />
              <span className="hidden sm:inline">Lun - Vie: 9:00am - 6:00pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal */}
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo1.jpeg"
              alt="Logo de AuroLab"
              width={160}
              height={60}
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10 w-auto' : 'h-12 w-auto'
              }`}
              priority
            />
          </Link>

          {/* Menú desktop */}
          <ul className="hidden md:flex space-x-6">
            {Object.values(links).map((link) => (
              <NavItem
                key={link.href}
                link={link}
                isOpen={isOpen[link.href]}
                toggle={() => toggleDropdown(link.href)}
                close={closeAllDropdowns}
              />
            ))}
          </ul>

          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-blue-900" />
            ) : (
              <Menu size={24} className="text-blue-900" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
            <ul className="space-y-2">
              {Object.values(links).map((link) => (
                <NavItem
                  key={link.href}
                  link={link}
                  isOpen={isOpen[link.href]}
                  toggle={() => toggleDropdown(link.href)}
                  close={closeAllDropdowns}
                  isMobile
                  closeMobileMenu={closeMobileMenu}
                />
              ))}
            </ul>

            {/* Buscador y botón de contacto (móvil) - COMENTADO */}
            {/*
            <div className="mt-4 space-y-3">
              <div className="relative">
                <Search 
                  size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900" 
                />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#21CDAD]"
                />
              </div>
              
              <Link
                href="/contacto"
                className="block bg-[#21CDAD] text-white px-4 py-2 rounded-md font-medium text-center hover:bg-[#1fb49a] transition"
                onClick={closeMobileMenu}
              >
                Contáctanos
              </Link>
            </div>
            */}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
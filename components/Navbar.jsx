'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";
import { links } from "@/data/links";
import { flushSync } from 'react-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Función para alternar los menús desplegables
  const toggleDropdown = (key) => {
    flushSync(() => {
      // Cierra todos los menús excepto el que se está abriendo
      const newState = { [key]: !isOpen[key] };
      setIsOpen(newState);
    });
  };

  // Cerrar el menú desplegable al hacer clic fuera o al seleccionar una opción
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen({}); // Cierra todos los menús
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Función para cerrar el menú al seleccionar una opción
  const closeDropdown = () => {
    setIsOpen({});
  };

  // Función para alternar el menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* NAVBAR SUPERIOR */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={16} className="text-green-400" />
            <span>Celular: 941 678 446</span>

            <MapPin size={16} className="text-green-400" />
            <span>Ubicación: Avenida Canadá, entre la calle RosaLuz y la calle Santa Rosa</span>

            <Clock size={16} className="text-green-400" />
            <span>Lun - Vie: 9:00am - 6:00pm</span>
          </div>
        </div>
      </div>

      {/* NAVBAR PRINCIPAL */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-900">
            AuroLab
          </Link>

          {/* Menú para pantallas grandes */}
          <ul className="hidden md:flex space-x-6 text-blue-900" ref={dropdownRef}>
            {Object.values(links).map((link, index) => (
              <li key={index} className="relative">
                {link.sublinks ? (
                  <>
                    {/* Parte del nombre del enlace (redirige a la página) */}
                    <Link
                      href={link.href || "#"} // Si no hay href, no redirige
                      className="hover:text-blue-600"
                    >
                      {link.name}
                    </Link>

                    {/* Flecha para desplegar el submenú */}
                    <button
                      className="hover:text-blue-600 ml-1"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      ▼
                    </button>

                    {/* Submenú desplegable */}
                    {isOpen[link.name] && (
                      <ul className="absolute bg-white shadow-md mt-2 py-2 w-48">
                        {link.sublinks.map((sublink, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={sublink.href}
                              className="block px-4 py-2 hover:bg-gray-100"
                              onClick={closeDropdown} // Cierra el menú al seleccionar una opción
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  // Enlace sin submenú
                  <Link href={link.href} className="hover:text-blue-600">
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden text-blue-900 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4 text-blue-900">
              {Object.values(links).map((link, index) => (
                <li key={index} className="relative">
                  {link.sublinks ? (
                    <>
                      {/* Parte del nombre del enlace (redirige a la página) */}
                      <Link
                        href={link.href || "#"} // Si no hay href, no redirige
                        className="hover:text-blue-600"
                        onClick={() => toggleDropdown(link.name)}
                      >
                        {link.name}
                      </Link>

                      {/* Submenú desplegable */}
                      {isOpen[link.name] && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {link.sublinks.map((sublink, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={sublink.href}
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={closeDropdown} // Cierra el menú al seleccionar una opción
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    // Enlace sin submenú
                    <Link href={link.href} className="hover:text-blue-600">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
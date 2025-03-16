"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { links } from "@/data/links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState({});

  // Función para alternar los menús desplegables
  const toggleDropdown = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
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

          {/* Menú */}
          <ul className="flex space-x-6 text-blue-900">
            {Object.values(links).map((link, index) => (
              <li key={index} className="relative">
                {link.sublinks ? (
                  <>
                    <button
                      className="hover:text-blue-600"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      {link.name} ▼
                    </button>
                    {isOpen[link.name] && (
                      <ul className="absolute bg-white shadow-md mt-2 py-2 w-48">
                        {link.sublinks.map((sublink, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={sublink.href}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="hover:text-blue-600">
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

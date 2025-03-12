"use client";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sections = [ 
    {
      id: "aboutMe",
      name: "Sobre mim",
    },
    {
      id: "experience",
      name: "Experiência Profissional",
    },
    {
      id: "skills",
      name: "Habilidades",
    },
    {
      id: "contact",
      name: "Contato",
    },
  ]


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition - navbarHeight - 10,
        behavior: "smooth",
      });

      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-emerald-600">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botão para abrir menu mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <div className={`block size-6 ${isMenuOpen ? "hidden" : "block"}`}>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div className={`block size-6 ${isMenuOpen ? "block" : "hidden"}`}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center cursor-pointer">
              <Image
                src="/icone.png"
                onClick={() => scrollToSection('banner')}
                alt="Minha foto"
                width={300}
                height={300}
                className="rounded-full h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`rounded-md px-3 py-2 text-sm font-medium  cursor-pointer ${activeSection === section.id
                      ? "bg-emerald-700  text-gray-200"
                      : "text-white hover:bg-emerald-700 hover:text-white"
                      }`}
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left rounded-md cursor-pointer px-3 py-2 text-base font-medium ${activeSection === section.id
                ? "bg-emerald-700 text-gray-200"
                : "text-white hover:bg-gray-700 hover:text-white"
                }`}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

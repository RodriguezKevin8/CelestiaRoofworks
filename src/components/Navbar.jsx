import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black " : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero">
            <h2 className="text-xl font-bold text-white">CELESTIA ROOFWORKS</h2>
          </a>
          <div className="hidden sm:flex space-x-4">
            <a
              href="#hero"
              className="text-white hover:text-gray-300 font-medium font-lora"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-white hover:text-gray-300 font-medium font-lora"
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              className="text-white hover:text-gray-300 font-medium font-lora"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="text-white hover:text-gray-300 font-medium font-lora"
            >
              Contacto
            </a>
          </div>
          <div className="hidden sm:block">
            <a
              href="#contacto"
              className="bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-900 font-lora"
            >
              Solicitar Cotización
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-white hover:text-gray-300 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-black bg-opacity-75 text-white">
          <a
            href="#hero"
            className="block px-4 py-2 hover:bg-gray-800 font-lora"
            onClick={handleLinkClick}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="block px-4 py-2 hover:bg-gray-800 font-lora"
            onClick={handleLinkClick}
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            className="block px-4 py-2 hover:bg-gray-800 font-lora"
            onClick={handleLinkClick}
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="block px-4 py-2 hover:bg-gray-800 font-lora"
            onClick={handleLinkClick}
          >
            Contacto
          </a>
          <a
            href="#cotizacion"
            className="block px-4 py-2 bg-emerald-700 hover:bg-emerald-600 font-lora"
            onClick={handleLinkClick}
          >
            Solicitar Cotización
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

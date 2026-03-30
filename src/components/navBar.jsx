import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
// IMPORTANTE: Asegúrate de que el nombre del archivo coincida con tu asset (png, jpg, svg, etc.)
import logoCarpium from '../assets/logo-carpium.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el fondo al hacer scroll (efecto glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#001A33]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* --- LOGO AREA (SOLO IMAGEN) --- */}
        <div 
          className="flex items-center group cursor-pointer bg-red" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Contenedor de la imagen del logo */}
          <div className="h-5 w-auto flex items-center group-hover:scale-120 transition-transform duration-300" >
            <img 
              src={logoCarpium} 
              alt="Carpium Elite Solutions LLC" 
              className="h-50 object-contain"
            />
          </div>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-sm font-medium tracking-wide">
            <li><a href="#home" className="text-white hover:text-[#E5C100] transition-colors uppercase">Home</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-[#E5C100] transition-colors uppercase">Services</a></li>
            <li><a href="#process" className="text-gray-300 hover:text-[#E5C100] transition-colors uppercase">Process</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-[#E5C100] transition-colors uppercase">About</a></li>
          </ul>
          
          <button className="bg-transparent border-2 border-[#E5C100] text-[#E5C100] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#E5C100] hover:text-[#001A33] transition-all duration-300 flex items-center gap-2 group shadow-[0_0_15px_rgba(229,193,0,0.1)]">
            Free Consultation
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="md:hidden flex items-center h-16">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#E5C100] p-2 rounded-lg bg-white/5">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isOpen && (
        <div className="md:hidden bg-[#001A33] absolute top-full left-0 w-full border-t border-gray-800 py-6 px-8 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <a href="#home" className="text-white text-lg font-semibold uppercase" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" className="text-gray-300 text-lg font-semibold uppercase" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#process" className="text-gray-300 text-lg font-semibold uppercase" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#contact" className="text-[#E5C100] text-lg font-bold uppercase" onClick={() => setIsOpen(false)}>Free Consultation</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
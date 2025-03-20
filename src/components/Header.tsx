import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-gold">
            Studio MN
          </a>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-white hover:text-gold transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-white hover:text-gold transition-colors duration-300">Serviços</a></li>
              <li><a href="#team" className="text-white hover:text-gold transition-colors duration-300">Profissionais</a></li>
              <li><a href="#gallery" className="text-white hover:text-gold transition-colors duration-300">Nosso Trabalho</a></li>
              <li><a href="#booking" className="text-white hover:text-gold transition-colors duration-300">Agendamento</a></li>
              <li><a href="#contact" className="text-white hover:text-gold transition-colors duration-300">Contato</a></li>
            </ul>
          </nav>

          <button 
            className="md:hidden text-white hover:text-gold transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        } md:hidden`}
        style={{ top: '80px' }}
      >
        <div className="flex items-center justify-center h-full">
          <ul className="px-4 py-6 space-y-8 text-center">
            <li>
              <a 
                href="#home" 
                className="block text-2xl text-white hover:text-gold transition-colors duration-300" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="block text-2xl text-white hover:text-gold transition-colors duration-300" 
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                className="block text-2xl text-white hover:text-gold transition-colors duration-300" 
                onClick={() => setIsMenuOpen(false)}
              >
                Profissionais
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className="block text-2xl text-white hover:text-gold transition-colors duration-300" 
                onClick={() => setIsMenuOpen(false)}
              >
                Nosso Trabalho
              </a>
            </li>
            <li>
              <a 
                href="#booking" 
                className="block text-2xl text-white hover:text-gold transition-colors duration-300" 
                onClick={() => setIsMenuOpen(false)}
              >
                Agendamento
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block text-2xl text-white hover:text-gold transition-colors duration-300" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Scissors } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'src/assets/images/logo/logostudiomn.ico',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.3)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gold">Studio MN</span>
            <br />
            Beleza & Estilo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transforme seu visual com profissionais especializados em cortes, barbearia e design de sobrancelhas.
          </p>
          <a 
            href="https://topsalao.com?id=130610" 
            className="inline-flex items-center px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-gold/90 transition transform hover:scale-105"
          >
            <Scissors className="mr-2" size={20} />
            Agende seu Horário
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
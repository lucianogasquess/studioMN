import React from 'react';

const Services = () => {
  const services = {
    marcelo: [
      { name: 'Corte e Barba', price: '85,00' },
      { name: 'Barba', price: '45,00' },
      { name: 'Corte', price: '45,00' }
    ],
    nayara: [
      { name: 'Design personalizado simples', price: '45,00' },
      { name: 'Design personalizado com Henna', price: '60,00' },
      { name: 'Maquiagem', price: '180,00' },
      { name: 'Micropigmentação Shadow', price: '480,00' },
      { name: 'Brow Lamination', price: '140,00' }
    ]
  };

  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nossos <span className="text-gold">Serviços</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black p-8 rounded-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-6 text-gold">Barbearia - Marcelo</h3>
            <ul className="space-y-4">
              {services.marcelo.map((service, index) => (
                <li key={index} className="flex justify-between items-center border-b border-zinc-800 pb-4">
                  <span>{service.name}</span>
                  <span className="text-gold">R$ {service.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black p-8 rounded-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-6 text-gold">Sobrancelhas & Make - Nayara</h3>
            <ul className="space-y-4">
              {services.nayara.map((service, index) => (
                <li key={index} className="flex justify-between items-center border-b border-zinc-800 pb-4">
                  <span>{service.name}</span>
                  <span className="text-gold">R$ {service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
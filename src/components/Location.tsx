import React from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Onde <span className="text-gold">Estamos</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.2206976930865!2d-46.97555162390161!3d-22.94209783913561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8d20379909fc5%3A0xb74e1ed3b5e6f3fc!2sAv.%20Pres.%20Tancredo%20Neves%2C%2073%20-%20Parque%20das%20Colinas%2C%20Valinhos%20-%20SP%2C%2013273-610!5e0!3m2!1spt-BR!2sbr!4v1741634415926!5m2!1spt-BR!2sbr"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center justify-center space-x-2">
              <MapPin className="text-gold" size={24} />
              <p className="text-lg">Avenida presidente tancredo neves número 73 Parque das colinas Valinhos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
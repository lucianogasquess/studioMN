import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Agende o seu horário <span className="text-gold">on-line</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Agende e gerencie seus horários com facilidade e muito mais! Clique no botão abaixo para fazer seu agendamento ou baixe nosso aplicativo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Calendar className="text-gold" size={24} />
                <span>Escolha o dia e horário de sua preferência</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-gold" size={24} />
                <span>Confirmação instantânea do agendamento</span>
              </div>
            </div>

            <div className="mt-10 space-x-4">
              <a 
                href="https://topsalao.com?id=130610" 
                className="inline-flex items-center px-8 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition transform hover:scale-105"
              >
                Agende Agora
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Phone mockups */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Main Phone */}
              <div className="relative z-20 transform rotate-6">
                <div className="relative rounded-[2.5rem] shadow-xl overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
                  <img 
                    src="public/images/logo/phone.png"
                    alt="App Background"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-start p-8 z-20">
                    <img 
                      src="public/images/logo/logoblack.jpg"
                      alt="Studio MN Logo"
                      className="w-32 mb-4"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gold">Studio MN</h3>
                      <p className="text-white/80 text-sm">Beleza & Estilo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary Phone */}
              <div className="absolute top-0 -right-20 z-10 transform -rotate-6">
                <div className="relative rounded-[2.5rem] shadow-xl overflow-hidden bg-black w-full max-w-[250px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
                  <img 
                    src="public/images/logo/logostudiomn.ico"
                    alt="App Background 2"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20">
                    <div className="text-center">
                      <p className="text-gold font-semibold mb-2">Agende Agora</p>
                      <p className="text-white/80 text-sm">Seus horários na palma da mão</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
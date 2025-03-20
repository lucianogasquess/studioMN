
import { MapPin, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  const instagramProfiles = [
    {
      name: 'Studio MN',
      url: 'https://www.instagram.com/nm.studioofc/?igsh=ODRpM2wyZ2lldGQ0#',
      username: '@nm.studioofc'
    },
    {
      name: 'Ché Hair/Barbeiro',
      url: 'https://www.instagram.com/che.hair/',
      username: '@che.hair'
    },
    {
      name: 'Nayara De Souza Araujo',
      url: 'https://www.instagram.com/nayaraaraujo._/',
      username: '@nayaraaraujo._'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Entre em <span className="text-gold">Contato</span>
        </h2>

      

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-gold mr-4" size={24} />
                  <p>Avenida presidente tancredo neves número 73 Parque das colinas Valinhos</p>
                </div>
                <div className="flex items-center">
                  <Phone className="text-gold mr-4" size={24} />
                  <p>+55 19 99421-3478</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Redes Sociais</h3>
              <div className="space-y-6">
                {instagramProfiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gold hover:text-white transition-colors duration-300 group"
                  >
                    <div className="relative">
                      <Instagram size={32} className="group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-lg">{profile.username}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type MediaItem = {
  url: string;
  caption: string;
  type: 'image' | 'video';
};

type MediaCollection = {
  all: MediaItem[];
  corte: MediaItem[];
  infantil: MediaItem[];
  sobrancelhas: MediaItem[];
  maquiagem: MediaItem[];
  micropigmentacao: MediaItem[];
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<keyof MediaCollection>('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'corte', name: 'Corte Masculino' },
    { id: 'sobrancelhas', name: 'Sobrancelhas' },
    { id: 'maquiagem', name: 'Maquiagem' },
    { id: 'micropigmentacao', name: 'Micropigmentação' },
    { id: 'infantil', name: 'Corte Infantil' },
  ];

  const media: MediaCollection = {
    all: [
      { url: '/images/cortemasculino/corteafro.jpg', caption: 'Corte Afro', type: 'image' },
      { url: '/videos/cortes/masculino2.mp4', caption: 'Degradê na navalha', type: 'video' },
      { url: '/images/cortemasculino/masculino1.jpg', caption: 'Corte Casual', type: 'image' },
      { url: '/videos/barba/b1.mp4', caption: 'Barba no vapor de ozônio', type: 'video' },
      { url: '/videos/cortes/cortecasual.mp4', caption: 'Corte Casual', type: 'video' },
      { url: '/videos/cortes/cortetaperfade.mp4', caption: 'Taper Fade', type: 'video' },
      { url: '/videos/cortes/masculino3.mp4', caption: 'Corte na régua ', type: 'video' },
      { url: '/videos/cortes/masculino4.mp4', caption: 'Corte low fade ', type: 'video' },
      { url: '/images/infantil/i1.jpg', caption: 'Corte Infantil', type: 'image' },
      { url: '/videos/cortes/corteinfantil2.mp4', caption: 'Freestyle Infantil ', type: 'video' },
      { url: '/videos/cortes/corteinfantil3.mp4', caption: 'Taperfade ', type: 'video' },
      { url: '/videos/cortes/corteinfantil4.mp4', caption: 'Corte Infantil', type: 'video' },
      { url: '/images/sobrancelhas/sobrancelha.jpg', caption: 'Design Personalizado', type: 'image' },
      { url: '/images/sobrancelhas/s3.jpg', caption: 'Design Personalizado', type: 'image' },
      { url: '/videos/brow/s2.mp4', caption: 'Design Personalizado', type: 'video' },
      { url: '/videos/brow/s3.mp4', caption: 'Henna com efeito ombre ', type: 'video' },
      { url: '/videos/brow/s4.mp4', caption: 'Desing sem Henna ', type: 'video' },
      { url: '/images/maquiagem/make.jpg', caption: 'Maquiagem Profissional', type: 'image' },
      { url: '/videos/makes/m1.mp4', caption: 'Maquiagem Profissional', type: 'video' },
      { url: '/images/maquiagem/m3.jpg', caption: 'Maquiagem Profissional', type: 'image' },
      { url: '/videos/makes/m2.mp4', caption: 'Maquiagem Profissional', type: 'video' },
      { url: '/videos/makes/m4.mp4', caption: 'Maquiagem Profissional', type: 'video' },
      { url: '/images/micropigmentacao/micro1.jpg', caption: 'Micropigmentação', type: 'image' },
      { url: '/videos/micro/micro2.mp4', caption: 'Micropigmentação', type: 'video' },
      { url: '/videos/micro/micro3.mp4', caption: 'Micropigmentação', type: 'video' }
    ],
    corte: [
      { url: '/images/cortemasculino/corteafro.jpg', caption: 'Corte Afro', type: 'image' },
      { url: '/videos/cortes/masculino2.mp4', caption: 'Degradê na navalha', type: 'video' },
      { url: '/images/cortemasculino/masculino1.jpg', caption: 'Corte Casual', type: 'image' },
      { url: '/videos/cortes/cortecasual.mp4', caption: 'Corte Casual', type: 'video' },
      { url: '/videos/cortes/cortetaperfade.mp4', caption: 'Taper Fade', type: 'video' },
      { url: '/videos/cortes/masculino3.mp4', caption: 'Corte na régua ', type: 'video' },
      { url: '/videos/cortes/masculino4.mp4', caption: 'Corte low fade ', type: 'video' },
    ],
    infantil: [
      { url: '/images/infantil/i1.jpg', caption: 'Corte Infantil', type: 'image' },
      { url: '/videos/cortes/corteinfantil2.mp4', caption: 'Freestyle Infantil ', type: 'video' },
      { url: '/videos/cortes/corteinfantil3.mp4', caption: 'Taperfade ', type: 'video' },
      { url: '/videos/cortes/corteinfantil4.mp4', caption: 'Corte Infantil', type: 'video' },
    ],
    sobrancelhas: [
      { url: '/images/sobrancelhas/sobrancelha.jpg', caption: 'Design Personalizado', type: 'image' },
      { url: '/images/sobrancelhas/s3.jpg', caption: 'Design Personalizado', type: 'image' },
      { url: '/videos/brow/s2.mp4', caption: 'Design Personalizado', type: 'video' },
      { url: '/videos/brow/s3.mp4', caption: 'Henna com efeito ombre ', type: 'video' },
      { url: '/videos/brow/s4.mp4', caption: 'Desing sem Henna ', type: 'video' },
    ],
    maquiagem: [
      { url: '/images/maquiagem/make.jpg', caption: 'Maquiagem Profissional', type: 'image' },
      { url: '/videos/makes/m1.mp4', caption: 'Maquiagem Profissional', type: 'video' },
      { url: '/images/maquiagem/m3.jpg', caption: 'Maquiagem Profissional', type: 'image' },
      { url: '/videos/makes/m2.mp4', caption: 'Maquiagem Profissional', type: 'video' },
      { url: '/videos/makes/m4.mp4', caption: 'Maquiagem Profissional', type: 'video' },
    ],
    micropigmentacao: [
      { url: '/images/micropigmentacao/micro1.jpg', caption: 'Micropigmentação', type: 'image' },
      { url: '/videos/micro/micro2.mp4', caption: 'Micropigmentação', type: 'video' },
      { url: '/videos/micro/micro3.mp4', caption: 'Micropigmentação', type: 'video' }
    ]
  };

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nosso <span className="text-gold">Trabalho</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as keyof MediaCollection)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold text-black'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {media[activeCategory].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                {item.type === 'image' ? (
                  <img src={item.url} alt={item.caption} className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <video src={item.url} autoPlay muted loop className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center font-semibold px-4">{item.caption}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;


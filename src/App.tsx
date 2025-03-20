import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Location from './components/Location';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Gallery />
        <Booking />
        <Location />
        <Contact />
      </main>
      <WhatsAppButton />
      <footer className="bg-zinc-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold">© 2025 Studio MN. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
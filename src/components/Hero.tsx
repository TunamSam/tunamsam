import heroDesktop from '../assets/hero.png';
import heroMobile from '../assets/hero-mobile.png';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroDesktop}
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src={heroMobile}
          className="block md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        {/* isi hero */}
      </div>

      {/* ✅ Scroll Indicator — FIX DI BAWAH */}
      <div className={`absolute bottom-6 inset-x-0 flex justify-center z-20 ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
        <div className="w-6 h-10 rounded-full border-2 border-black/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-black/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}


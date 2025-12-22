import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoBlack from '../assets/logo-black-mode.png';
import { FaWhatsapp } from "react-icons/fa";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
                }`}
            >
              <span className="text-2xl font-bold tracking-tight">
                <img
                  src={logoBlack}
                  alt="Logo Tunamsam"
                  className={`h-[100px] w-auto transition-all duration-300 ${isScrolled ? 'flex' : 'hidden'}`}
                />
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className={`items-center gap-8 ${isScrolled ? 'hidden md:flex' : 'hidden'}`}>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors hover:text-green-600 ${isScrolled ? 'text-gray-700' : 'text-black'
                }`}
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`transition-colors hover:text-green-600 ${isScrolled ? 'text-gray-700' : 'text-black'
                }`}
            >
              Produk
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className={`transition-colors hover:text-green-600 ${isScrolled ? 'text-gray-700' : 'text-black'
                }`}
            >
              Alur Kerja
            </button>
            {/* <button
              onClick={() => scrollToSection('pricing')}
              className={`transition-colors hover:text-green-600 ${isScrolled ? 'text-gray-700' : 'text-black'
                }`}
            >
              Harga
            </button> */}
          </div>

          {/* CTA Button */}
          <div className={`${isScrolled ? 'hidden flex md:block' : 'hidden'}`}>
            <button
              onClick={() => scrollToSection('cta')}
              className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <FaWhatsapp size={18} />
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${isScrolled ? 'text-gray-900 flex' : 'text-white hidden'
              }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 font-medium"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 font-medium"
            >
              Portofolio
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 font-medium"
            >
              Alur Kerja
            </button>
            {/* <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600 font-medium"
            >
              Harga
            </button> */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => scrollToSection('cta')}
                className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <FaWhatsapp size={18} />
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
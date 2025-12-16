import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoBlack from '../assets/logo-black-mode.png';
import logoBright from '../assets/logo-bright-mode.png';

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
                  src={isScrolled ? logoBlack : logoBright}
                  alt="Logo"
                  className="h-[100px] w-auto transition-all duration-300"
                />
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors hover:text-green-600 ${isScrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`transition-colors hover:text-green-600 ${isScrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className={`transition-colors hover:text-green-600 ${isScrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`transition-colors hover:text-green-600 ${isScrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              Pricing
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('cta')}
              className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
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
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="w-full mt-2 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

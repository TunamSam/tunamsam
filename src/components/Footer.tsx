import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import logoBright from '../assets/logo-bright-mode.png';

const navigation = {
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Web Applications', href: '#services' },
    { name: 'E-Commerce', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Contact', href: '#cta' },
  ],
  social: [
    { name: 'GitHub', icon: Github, href: 'https://github.com/TunamSam'},
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/tunamsam' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/tunamsam/' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src={logoBright} className="h-[200px] mb-6" alt="" />
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Creating exceptional digital experiences through affordable, custom web
              development solutions. Not just follow, we create.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-sm">tunamsam@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-sm">+62 851-9590-1406</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-sm">Kediri City, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tunamsam. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors group"
                  aria-label={item.name}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

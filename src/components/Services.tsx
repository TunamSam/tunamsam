import { Code2, Smartphone, ShoppingCart, Palette, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Website Sesuai Kebutuhan',
    description: 'Website yang dibuat khusus dengan teknologi modern, disesuaikan dengan kebutuhan bisnis kamu.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Aplikasi Web',
    description: 'Aplikasi web yang cepat, stabil, dan nyaman digunakan di berbagai perangkat.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ShoppingCart,
    title: 'Website Toko Online',
    description: 'Toko online lengkap dengan sistem pembayaran dan pengelolaan produk.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Palette,
    title: 'Desain UI/UX',
    description: 'Desain tampilan yang menarik, mudah digunakan, dan bikin pengunjung betah.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Database,
    title: 'Backend & Database',
    description: 'Sistem backend yang aman, rapi, dan siap menangani data dengan baik.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Optimasi Performa',
    description: 'Website lebih cepat, ringan, dan tetap lancar di semua ukuran layar.',
    color: 'from-yellow-500 to-orange-500',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Layanan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solusi Digital untuk Bisnis Anda
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dari ide sampai website siap online, kami membantu anda membangun produk digital
            yang profesional dan siap berkembang.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

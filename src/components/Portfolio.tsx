import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Platform E-Commerce',
    category: 'Aplikasi Web',
    description: 'Toko online modern dengan fitur filter lengkap dan sistem pembayaran yang aman.',
    image: 'https://images.unsplash.com/photo-1763872011479-aa293bf083a8?auto=format&fit=crop&w=1080&q=80',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Dashboard Analitik',
    category: 'Dashboard Web',
    description: 'Visualisasi data real-time dengan grafik dan laporan interaktif.',
    image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?auto=format&fit=crop&w=1080&q=80',
    tags: ['Vue.js', 'Charts', 'API'],
  },
  {
    title: 'Aplikasi Mobile Banking',
    category: 'Aplikasi Web Mobile',
    description: 'Pengalaman mobile banking yang aman, simpel, dan mudah digunakan.',
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?auto=format&fit=crop&w=1080&q=80',
    tags: ['React Native', 'Security', 'UX'],
  },
  {
    title: 'Company Profile Website',
    category: 'Website',
    description: 'Website company profile profesional untuk meningkatkan kredibilitas bisnis.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1080&q=80',
    tags: ['Next.js', 'SEO', 'Tailwind'],
  },
  {
    title: 'Sistem Manajemen Sekolah',
    category: 'Web App',
    description: 'Aplikasi untuk mengelola data siswa, guru, dan administrasi sekolah.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1080&q=80',
    tags: ['Laravel', 'MySQL', 'RBAC'],
  },
  {
    title: 'Landing Page Produk Digital',
    category: 'Landing Page',
    description: 'Landing page conversion-focused untuk meningkatkan penjualan produk digital.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1080&q=80',
    tags: ['HTML', 'Tailwind', 'Marketing'],
  },
];

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Produk Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Proyek Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beberapa proyek terbaik yang pernah kami kerjakan untuk klien dari berbagai bidang.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {/* Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
          >
            <span>
              {showAll ? 'Tampilkan Sedikit' : 'Lihat Semua Proyek'}
            </span>
            <ArrowRight
              className={`w-5 h-5 transition-transform ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'
                }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

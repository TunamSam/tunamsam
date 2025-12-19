import { CheckCircle2, Sparkles, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: 'Kualitas Nomor Satu',
    description: 'Setiap baris kode dibuat dengan rapi, teliti, dan diuji dengan baik agar hasilnya maksimal.',
  },
  {
    icon: Sparkles,
    title: 'Solusi Kreatif',
    description: 'Kami tidak cuma mengikuti tren, tapi menciptakan pengalaman unik agar brand kamu lebih menonjol.',
  },
  {
    icon: Users,
    title: 'Fokus ke Klien',
    description: 'Ide dan kebutuhan kamu jadi prioritas. Kami bekerja bareng untuk mewujudkannya.',
  },
  {
    icon: TrendingUp,
    title: 'Berorientasi Hasil',
    description: 'Bukan cuma tampilan bagus, tapi juga berdampak nyata untuk pertumbuhan bisnis kamu.',
  },
];

export function WhyTunamsam() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-green-600/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6">
              Kenapa Pilih Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kami Membangun Pengalaman Digital yang Bermakna
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Di Tunamsam, kami percaya untuk menciptakan, bukan sekadar mengikuti.
              Perpaduan antara keahlian teknis dan kreativitas kami menghasilkan
              solusi web yang melampaui ekspektasi.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-green-600/20 border border-green-400/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="relative">
            {/* Large Stat Card */}
            <div className="bg-gradient-to-br from-green-600 to-cyan-600 rounded-3xl p-12 shadow-2xl">
              <div className="space-y-8">
                <div>
                  <div className="text-6xl font-bold mb-2">3+</div>
                  <div className="text-green-100">Tahun Pengalaman</div>
                </div>

                <div className="h-px bg-white/20" />

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-1">Cepat</div>
                    <div className="text-green-100 text-sm">Waktu Pengerjaan</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <div className="text-green-100 text-sm">Dukungan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-gray-600">Kepuasan Klien</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-600 rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-4 right-1/3 w-32 h-32 bg-cyan-600 rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}

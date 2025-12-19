import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Diskusi & Perencanaan',
    description: 'Kami mulai dengan memahami tujuan, target pengguna, dan kebutuhan proyek kamu melalui diskusi mendalam.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Desain & Prototipe',
    description: 'Tim desain kami membuat tampilan dan prototipe interaktif agar kamu bisa melihat gambaran proyek sebelum dikembangkan.',
    color: 'from-purple-600 to-pink-600',
  },
  {
    number: '03',
    icon: Code,
    title: 'Pengembangan & Pengujian',
    description: 'Developer kami mengubah desain menjadi website nyata dengan kode yang rapi, lalu diuji untuk memastikan kualitas.',
    color: 'from-orange-600 to-red-600',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Peluncuran & Dukungan',
    description: 'Proyek diluncurkan dan kami siap memberikan dukungan berkelanjutan agar tetap berjalan dengan optimal.',
    color: 'from-green-600 to-emerald-600',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Alur Kerja Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cara Kami Bekerja
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proses kerja yang jelas dan terstruktur untuk memastikan proyek kamu
            selesai tepat waktu, sesuai anggaran, dan hasilnya maksimal.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-x-1/2 z-0" />
                )}

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg group">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6 shadow-md`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Visualization (mobile) */}
        <div className="lg:hidden mt-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            {/* This creates a vertical timeline on mobile */}
          </div>
        </div>
      </div>
    </section>
  );
}

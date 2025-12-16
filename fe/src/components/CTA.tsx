import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

export function CTA() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-cyan-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 leading-relaxed">
            Let's turn your vision into reality. Get in touch today for a free 
            consultation and discover how we can help your business grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl">
              <MessageSquare className="w-5 h-5" />
              <span>Schedule a Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
              <Mail className="w-5 h-5" />
              <span>Send Us an Email</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-green-200 text-sm mb-2">Email Us</div>
              <div className="text-white font-medium">hello@tunamsam.com</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-green-200 text-sm mb-2">Call Us</div>
              <div className="text-white font-medium">+1 (555) 123-4567</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-green-200 text-sm mb-2">Response Time</div>
              <div className="text-white font-medium">Within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$999',
    description: 'Perfect for small businesses and personal projects',
    features: [
      'Responsive Website Design',
      'Up to 5 Pages',
      'Basic SEO Optimization',
      'Contact Form Integration',
      'Mobile Responsive',
      '1 Month Support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$2,499',
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      'Everything in Starter',
      'Up to 15 Pages',
      'Custom Web Application',
      'Database Integration',
      'Advanced SEO & Analytics',
      'Content Management System',
      '3 Months Support',
      'Priority Support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale projects',
    features: [
      'Everything in Professional',
      'Unlimited Pages',
      'E-Commerce Integration',
      'Custom API Development',
      'Advanced Security Features',
      'Performance Optimization',
      '6 Months Support',
      'Dedicated Account Manager',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-green-600/20 border border-green-400/30 text-green-300 text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent, Affordable Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our commitment 
            to quality and customer satisfaction.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-green-600 to-cyan-600 shadow-2xl scale-105 border-2 border-green-400'
                  : 'bg-gray-800 border-2 border-gray-700'
              } transition-transform hover:scale-105`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? 'text-green-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400">/ project</span>}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-green-200' : 'text-green-400'
                    }`} />
                    <span className={plan.highlighted ? 'text-green-50' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-green-600 hover:bg-gray-100 shadow-lg'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 mt-12">
          All plans are customizable. Contact us for a personalized quote tailored to your specific needs.
        </p>
      </div>
    </section>
  );
}

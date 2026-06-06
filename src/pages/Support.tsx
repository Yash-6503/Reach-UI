import React from 'react';
import { CheckCircle, Users, BookOpen, Headphones } from 'lucide-react';

export default function Support() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Support & Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Beyond hardware. Complete deployment support and training for successful implementation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <CheckCircle size={32} />,
                title: 'Installation Support',
                desc: 'On-site installation, configuration, and system setup by certified technicians',
              },
              {
                icon: <Users size={32} />,
                title: 'Staff Training',
                desc: 'Comprehensive training for operators, coordinators, and medical staff',
              },
              {
                icon: <BookOpen size={32} />,
                title: 'Knowledge Resources',
                desc: 'User manuals, video tutorials, FAQs, and best practice guides',
              },
              {
                icon: <Headphones size={32} />,
                title: 'Technical Support',
                desc: '24/7 helpdesk with phone, email, and remote troubleshooting',
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Deployment Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { week: 'Week 1-2', title: 'Planning & Preparation', items: ['Requirements analysis', 'Infrastructure assessment', 'Team alignment'] },
                { week: 'Week 3-4', title: 'Installation & Setup', items: ['Hardware deployment', 'System configuration', 'Network integration'] },
                { week: 'Week 5-6', title: 'Training & Testing', items: ['Staff onboarding', 'Functional testing', 'Go-live readiness'] },
                { week: 'Week 7+', title: 'Go-Live & Support', items: ['System launch', 'Monitoring & optimization', 'Continuous support'] },
              ].map((phase, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-1 h-20 bg-blue-200 mt-2"></div>}
                  </div>
                  <div className="pb-8 flex-1">
                    <p className="text-blue-600 font-semibold text-sm">{phase.week}</p>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h4>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Support Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Lite Support',
                price: 'Included',
                features: ['Email support', 'Business hours', 'Knowledge base', 'Monthly updates'],
              },
              {
                name: 'Professional',
                price: 'Premium',
                features: ['Phone & email', '12/7 support', 'Dedicated contact', 'Quarterly training'],
                highlight: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: ['24/7 support', 'SLA guarantee', 'Account manager', 'On-site support'],
              },
            ].map((tier, i) => (
              <div key={i} className={`p-8 rounded-lg border-2 ${tier.highlight ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-gray-700">
                      <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help? Get Started Today</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is ready to help you deploy and optimize your Reach AI solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

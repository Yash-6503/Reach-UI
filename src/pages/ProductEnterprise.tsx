import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function ProductEnterprise() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Reach AI Enterprise</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Full-featured healthcare technology platform for government and large-scale healthcare networks
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise-Scale Deployment</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach AI Enterprise is the ultimate platform for government health programs, large NGO networks, and multi-hospital healthcare systems. Deploy across thousands of locations with centralized management and advanced governance.
            </p>
            <ul className="space-y-4">
              {[
                'Enterprise integrations & custom APIs',
                'Government compliance & audit trails',
                'Role-based access control (RBAC)',
                'Advanced business intelligence & reporting',
                'Multi-region deployment capability',
                'Custom module development',
                'Dedicated infrastructure options',
                'Priority SLA & 24/7 support',
                'Training academy & certification',
                'Custom integrations with legacy systems',
              ].map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className=" h-96 rounded-lg flex items-center justify-center">
            <img src="/reachimg2.webp" alt="Reach AI MedTech" className="" />
            {/* <span className="text-gray-500">Product Image</span> */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Locations', value: 'Unlimited' },
              { label: 'Users', value: 'Unlimited' },
              { label: 'Diagnostics', value: '20+ devices' },
              { label: 'Uptime SLA', value: '99.99%' },
              { label: 'Deployment', value: 'Custom timeline' },
              { label: 'Support', value: 'Enterprise SLA' },
            ].map((spec, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">{spec.label}</p>
                <p className="text-2xl font-bold text-blue-600">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Government Compliance',
                desc: 'Full compliance with ABDM, NHA, and healthcare data regulations',
              },
              {
                title: 'Unlimited Scale',
                desc: 'Deploy across entire healthcare networks with ease',
              },
              {
                title: 'Custom Development',
                desc: 'Custom modules and integrations built to your specifications',
              },
              {
                title: 'Advanced Analytics',
                desc: 'Population health analytics and predictive insights',
              },
              {
                title: 'Enterprise Support',
                desc: 'Dedicated account management and 24/7 support',
              },
              {
                title: 'Training Academy',
                desc: 'Comprehensive training programs and certification',
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Transform Your Healthcare Ecosystem</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center space-x-2 group">
              <span>Contact Sales</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Schedule Executive Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

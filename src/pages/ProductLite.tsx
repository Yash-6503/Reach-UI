import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function ProductLite() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Reach AI Lite</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Entry-level telemedicine and diagnostics kiosk for small clinics and rural healthcare centers
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect for Small Deployments</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach AI Lite provides essential telemedicine and health screening capabilities for small clinics, rural health centers, and NGO programs. Get started quickly with minimal infrastructure requirements.
            </p>
            <ul className="space-y-4">
              {[
                'Telemedicine video consultation',
                'Basic vital signs capture (BP, Temp, SpO2)',
                'Patient registration & EMR',
                'Cloud-based data storage',
                'Multi-language support',
                'Offline mode capability',
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

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Display', value: '24" Touchscreen' },
              { label: 'Diagnostics', value: '5+ vital devices' },
              { label: 'Connectivity', value: 'WiFi/4G' },
              { label: 'Storage', value: 'Cloud-based' },
              { label: 'Deployment Time', value: '1-2 weeks' },
              { label: 'Training', value: 'Online & on-site' },
            ].map((spec, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">{spec.label}</p>
                <p className="text-2xl font-bold text-blue-600">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Affordable Entry Point',
                desc: 'Lower upfront investment with flexible payment options',
              },
              {
                title: 'Quick Deployment',
                desc: 'Ready to operate in 1-2 weeks with minimal setup',
              },
              {
                title: 'Essential Features',
                desc: 'Core telemedicine and health screening capabilities',
              },
              {
                title: 'Scalable Growth',
                desc: 'Upgrade to Pro or Enterprise as your needs grow',
              },
              {
                title: 'Complete Support',
                desc: 'Training, maintenance, and technical support included',
              },
              {
                title: 'Proven Results',
                desc: 'Trusted by 50+ small clinics and health centers',
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

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center space-x-2 group">
              <span>Request Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

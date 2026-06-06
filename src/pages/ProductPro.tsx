import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function ProductPro() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Reach AI Pro</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive telemedicine and diagnostics platform for hospitals and multi-specialty clinics
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise-Grade Features</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach AI Pro combines advanced diagnostics, comprehensive EMR integration, multi-location management, and powerful analytics to serve hospitals, multi-specialty clinics, and large CSR programs.
            </p>
            <ul className="space-y-4">
              {[
                'Advanced vital signs & diagnostics (ECG, X-Ray, etc)',
                'Full EMR integration & medical records',
                'Multi-location management dashboard',
                'Advanced analytics & reporting',
                'Specialist consultation routing',
                'Integration with lab & pharmacy systems',
                'Custom workflow configuration',
                'Dedicated account manager',
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
              { label: 'Display', value: '32" UHD Touch' },
              { label: 'Diagnostics', value: '15+ devices' },
              { label: 'Locations', value: 'Unlimited' },
              { label: 'Analytics', value: 'Advanced BI' },
              { label: 'Deployment', value: '2-4 weeks' },
              { label: 'Support', value: '24/7 Priority' },
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
                title: 'Hospital Integration',
                desc: 'Seamless integration with existing hospital systems and workflows',
              },
              {
                title: 'Multi-Specialty Support',
                desc: 'Specialized workflows for different medical departments',
              },
              {
                title: 'Advanced Diagnostics',
                desc: 'Support for 15+ diagnostic devices and modalities',
              },
              {
                title: 'Network Management',
                desc: 'Manage unlimited locations from central dashboard',
              },
              {
                title: 'Business Intelligence',
                desc: 'Detailed analytics for clinical and operational insights',
              },
              {
                title: 'Scalable Growth',
                desc: 'Grow from single location to entire healthcare network',
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Healthcare Delivery?</h2>
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

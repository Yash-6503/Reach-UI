import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function CSR() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">For CSR Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Build sustainable healthcare access programs with lasting social impact
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainable Healthcare Infrastructure</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach AI enables corporations to fulfill their CSR mandate by deploying sustainable healthcare infrastructure. Create lasting community healthcare centers that serve thousands over years.
            </p>
            <ul className="space-y-4">
              {[
                'Build sustainable healthcare centers',
                'Rural health access programs',
                'Community healthcare centers',
                'Social impact measurement',
                'Scalable across multiple villages',
                'Long-term community partnership',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-teal-100 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">CSR Healthcare Initiative Image</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">CSR Impact Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Primary Health Center',
                desc: 'Deploy kiosks in rural PHCs for basic screening',
              },
              {
                title: 'Community Outreach',
                desc: 'Mobile kiosks for health camps and awareness',
              },
              {
                title: 'Wellness Hub Network',
                desc: 'Multiple centers across villages and districts',
              },
            ].map((model, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Measuring Social Impact</h2>
          <div className="space-y-6">
            {[
              {
                metric: 'Lives Impacted',
                details: ['Patients screened', 'Health conditions detected', 'Communities served'],
              },
              {
                metric: 'Health Equity',
                details: ['Rural healthcare access', 'Gender-based screening', 'Underserved population reach'],
              },
              {
                metric: 'Sustainable Value',
                details: ['Long-term community benefit', 'Local employment', 'Healthcare awareness'],
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-4">{item.metric}</h3>
                <ul className="space-y-2">
                  {item.details.map((detail, j) => (
                    <li key={j} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Tech Company CSR Initiative',
                desc: 'Deployed 10 kiosks across 5 villages, served 50,000+ patients, created 25 local jobs',
              },
              {
                title: 'Healthcare Company Foundation',
                desc: 'Established wellness centers in 20 locations, trained 100+ community health workers',
              },
            ].map((story, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Create Lasting Healthcare Impact</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact our CSR specialists to design a sustainable healthcare program for your organization.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Discuss Your CSR Vision
          </button>
        </div>
      </section>
    </div>
  );
}

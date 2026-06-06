import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function NGO() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">For NGOs & Foundations</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Deploy affordable healthcare infrastructure in underserved communities
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable Healthcare Access</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach AI Lite is designed for NGOs and health foundations. Deploy healthcare kiosks in rural areas, community centers, and underserved regions to provide dignified access to quality healthcare.
            </p>
            <ul className="space-y-4">
              {[
                'Affordable healthcare deployment cost',
                'Community health center setup',
                'Scalable programs across locations',
                'Remote monitoring & reporting',
                'Impact tracking & analytics',
                'Flexible payment & grant options',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-teal-100 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Community Healthcare Image</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Deployment Models for NGOs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Standalone Community Center',
                desc: 'Single or multiple kiosks serving rural communities',
              },
              {
                title: 'Mobile Health Camps',
                desc: 'Portable kiosks for health outreach programs',
              },
              {
                title: 'Clinic Network',
                desc: 'Multiple locations with centralized management',
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact Tracking</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { metric: 'Patients Served', example: 'Track cumulative patient count' },
              { metric: 'Communities Reached', example: 'Monitor geographic coverage' },
              { metric: 'Health Outcomes', example: 'Track disease detection rates' },
              { metric: 'Program ROI', example: 'Measure cost-effectiveness' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.metric}</h3>
                <p className="text-gray-700 text-sm">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Expand Healthcare Access?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us to discuss grant funding, partnerships, and deployment options for your NGO.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}

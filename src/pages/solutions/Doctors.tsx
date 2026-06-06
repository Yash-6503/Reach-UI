import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Doctors() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">For Doctors & Clinics</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Expand your practice beyond physical clinic boundaries with telemedicine and AI-powered diagnostics
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expand Your Practice</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach AI Lite and Pro help doctors expand their practice beyond the walls of their clinic. Serve more patients, increase revenue, and provide better care with telemedicine and remote diagnostics.
            </p>
            <ul className="space-y-4">
              {[
                'Remote consultation capability',
                'New revenue opportunities from teleconsultations',
                'Expanded patient reach without new clinic location',
                'Faster return on investment',
                'Multi-location growth potential',
                'Complete patient health records',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-teal-100 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Doctor Consultation Image</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works for Your Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Patient Registration', desc: 'Digital patient intake and health history' },
              { step: '2', title: 'Diagnostics', desc: 'Auto vital capture and health screening' },
              { step: '3', title: 'Consultation', desc: 'Secure telemedicine with remote doctors' },
              { step: '4', title: 'Follow-up', desc: 'Prescriptions, reports, and tracking' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">ROI for Your Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'New Revenue Streams', desc: 'Generate revenue from remote consultations and health screening' },
              { title: 'Efficiency Gains', desc: 'Reduce patient wait time and increase throughput' },
              { title: 'Patient Retention', desc: 'Better patient experience and higher retention rates' },
            ].map((roi, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-3">{roi.title}</h3>
                <p className="text-gray-700">{roi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Expand Your Practice?</h2>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Schedule Your Demo
          </button>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Award, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Reach AI MedTech</h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            We're reimagining healthcare delivery in India through AI-powered kiosk technology and telemedicine infrastructure. Our mission is to make quality healthcare accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/Digital-Innovation_Clean_pages-to-jpg-0006.jpg"
              alt="Our Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To expand access to quality healthcare by enabling intelligent, technology-driven health services that connect people, diagnostics, and doctors anywhere.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that geography, language, or economic status shouldn't determine access to healthcare. Through Reach AI, we're creating a connected digital healthcare ecosystem that brings medical expertise directly to communities.
            </p>
            <div className="space-y-4">
              {[
                'Deployed in 50+ locations across India',
                'Serving 2.5M+ patients and counting',
                'Trusted by doctors, hospitals, NGOs, and CSR programs',
                'CE certified and ABDM compatible',
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={40} />,
                title: 'Technology-Driven',
                desc: 'AI and automation powering intelligent health assessment, diagnostics, and telemedicine',
              },
              {
                icon: <Award size={40} />,
                title: 'Quality Healthcare',
                desc: 'Enterprise-grade systems delivering reliable, secure, and compliant healthcare solutions',
              },
              {
                icon: <Users size={40} />,
                title: 'Healthcare for All',
                desc: 'Scalable platforms making quality medical services accessible in rural and urban areas',
              },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Reach AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'End-to-End Healthcare Platform', desc: 'From patient registration to consultation to diagnosis' },
              { title: 'AI-Powered Intelligence', desc: 'Machine learning for smart health assessment and risk detection' },
              { title: 'Telemedicine Ready', desc: 'Secure video consultations with real-time vital data' },
              { title: 'Scalable Architecture', desc: 'Deploy anywhere, from single clinic to national networks' },
              { title: 'Secure Cloud Platform', desc: 'Enterprise-grade security with HIPAA and GDPR compliance' },
              { title: 'Complete Support', desc: 'Training, installation, maintenance, and 24/7 technical support' },
            ].map((reason, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600 mt-1">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Transform Healthcare Together</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join healthcare providers and organizations using Reach AI to improve patient outcomes and scale healthcare access.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Deploy Your Own AI-Powered Healthcare Kiosk Network
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Launch telemedicine-enabled healthcare services using Reach AI Kiosks. Designed for clinics, hospitals, NGOs, CSR initiatives, and corporate wellness programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Request Demo</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Get Pricing
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative z-10">
            <img
              src="/reach_ai_kiosk.jpg"
              alt="Reach AI Healthcare Kiosk with telemedicine interface"
              className="rounded-2xl shadow-2xl object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

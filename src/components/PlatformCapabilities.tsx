import React from 'react';
import { Activity, Video, Database, Gauge } from 'lucide-react';

interface CapabilityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function CapabilityCard({ icon, title, description, features }: CapabilityProps) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-teal-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-gray-700 flex items-center">
            <span className="w-1 h-1 bg-teal-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PlatformCapabilities() {
  const capabilities = [
    {
      icon: <Database size={24} />,
      title: 'Patient Management',
      description: 'Complete digital health records management',
      features: ['Digital registration', 'EMR system', 'Health records', 'Cloud storage'],
    },
    {
      icon: <Activity size={24} />,
      title: 'Diagnostics Ecosystem',
      description: 'Integrated diagnostic devices and AI analysis',
      features: ['BP, Temperature, SpO2', 'ECG, Blood Glucose', 'AI Stethoscope', 'Vision testing'],
    },
    {
      icon: <Video size={24} />,
      title: 'Telemedicine Platform',
      description: 'Secure doctor-patient consultations',
      features: ['Video consultation', 'E-prescription', 'Specialist referral', 'Audio consultation'],
    },
    {
      icon: <Gauge size={24} />,
      title: 'Analytics & Reporting',
      description: 'Advanced insights and performance tracking',
      features: ['Usage analytics', 'Health trends', 'Device monitoring', 'Outcome tracking'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Platform Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare technology platform with AI-powered diagnostics and telemedicine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} {...capability} />
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">AI & Advanced Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'AI Health Assessment', desc: 'Intelligent symptom analysis and risk detection' },
              { title: 'Clinical Summary Generation', desc: 'Automated medical report creation' },
              { title: 'Smart Reporting', desc: 'Real-time analytics and insights' },
              { title: 'Multi-Language Support', desc: 'Accessible to regional users' },
              { title: 'Risk Flagging', desc: 'Automatic alert for abnormal conditions' },
              { title: 'Voice to Text', desc: 'Hands-free medical documentation' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

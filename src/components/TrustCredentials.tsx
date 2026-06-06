import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function TrustCredentials() {
  const certifications = [
    { name: 'CE Certified', icon: '🏅' },
    { name: 'CDSCO Compliant', icon: '✓' },
    { name: 'FDA Components', icon: '🔬' },
    { name: 'ABDM Compatible', icon: '🔗' },
    { name: 'Secure Cloud Infrastructure', icon: '🔒' },
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Trusted Healthcare Technology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-center text-white hover:bg-opacity-20 transition-all"
            >
              <div className="text-4xl mb-3 flex justify-center">{cert.icon}</div>
              <p className="font-semibold">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

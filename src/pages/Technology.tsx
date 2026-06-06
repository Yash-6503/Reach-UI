import React from 'react';

export default function Technology() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Reach AI Technology</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Advanced healthcare technology platform powering AI diagnostics and telemedicine at scale
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Platform Architecture</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200 overflow-auto">
            <div className="min-w-fit">
              <pre className="text-sm text-gray-700">{`
┌─────────────────────────────────────────────────────────────┐
│                    Reach AI Kiosk Layer                     │
│   (Hardware: Display, Diagnostics, Biometric Sensors)       │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│              Edge & Local Processing Layer                  │
│   (Patient Registration, Vital Capture, Local Analysis)     │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│          Cloud API & Integration Layer (REST/GraphQL)       │
│   (Data Synchronization, Security, Routing)                 │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    ┌───▼────┐  ┌──────▼────┐  ┌────▼─────┐
    │   AI   │  │ Telemedicine│ │ Analytics │
    │ Engine │  │  Platform  │  │ Dashboard │
    └────────┘  └────────────┘  └───────────┘
              `}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'AI & ML', items: ['PyTorch', 'TensorFlow', 'Computer Vision', 'NLP'] },
              { title: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
              { title: 'Cloud', items: ['AWS', 'Kubernetes', 'Docker', 'RDS'] },
              { title: 'Frontend', items: ['React', 'TypeScript', 'Real-time APIs', 'PWA'] },
            ].map((tech, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, j) => (
                    <li key={j} className="text-gray-700 text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Health Assessment',
                desc: 'Machine learning algorithms analyze patient symptoms and vital signs to suggest likely conditions and risks',
              },
              {
                title: 'Diagnostic Device Integration',
                desc: 'Seamless integration with 20+ medical devices including ECG, X-Ray systems, lab analyzers',
              },
              {
                title: 'Secure Telemedicine',
                desc: 'End-to-end encrypted video consultation with real-time vital data sharing',
              },
              {
                title: 'EMR & Health Records',
                desc: 'Comprehensive electronic medical records with full audit trails and compliance',
              },
              {
                title: 'Analytics & Insights',
                desc: 'Population health analytics, disease trends, and actionable insights',
              },
              {
                title: 'Cloud Infrastructure',
                desc: 'Enterprise-grade cloud with 99.99% uptime, multi-region deployment',
              },
            ].map((capability, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-700 text-sm">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Security & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Data Protection',
                items: ['AES-256 encryption', 'HTTPS/TLS', 'Data at rest & in transit', 'Regular security audits'],
              },
              {
                title: 'Healthcare Compliance',
                items: ['HIPAA guidelines', 'GDPR compliant', 'ABDM compatible', 'FDA guidance'],
              },
              {
                title: 'Access Control',
                items: ['Role-based access', 'Multi-factor auth', 'Audit logs', 'IP whitelisting'],
              },
              {
                title: 'Infrastructure',
                items: ['Redundant servers', 'Auto backups', 'DDoS protection', 'ISO certifications'],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.items.map((feature, j) => (
                    <li key={j} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Scalability & Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.99%</div>
              <p className="text-gray-700">Uptime SLA with automatic failover</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">&lt;200ms</div>
              <p className="text-gray-700">Average API response time</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">Unlimited</div>
              <p className="text-gray-700">Concurrent kiosks & users</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

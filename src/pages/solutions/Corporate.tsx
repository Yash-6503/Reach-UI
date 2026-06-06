import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Corporate() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">For Corporate Wellness</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Enable preventive healthcare and employee wellness initiatives
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Employee Wellness Centers</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach AI enables companies to establish comprehensive employee wellness programs. Deploy AI-powered health screening kiosks to support preventive healthcare and track workforce health trends.
            </p>
            <ul className="space-y-4">
              {[
                'Employee wellness center setup',
                'Preventive health screening',
                'Workforce health tracking',
                'Remote consultation with doctors',
                'Personalized wellness insights',
                'Analytics for HR & wellness teams',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-teal-100 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Corporate Wellness Image</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Wellness Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Employee Health Scores',
                desc: 'Personalized health assessments and recommendations',
              },
              {
                title: 'Disease Prevention',
                desc: 'Early detection of health risks and preventive interventions',
              },
              {
                title: 'Productivity Gains',
                desc: 'Healthier workforce means better attendance and performance',
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Wellness Analytics Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Employee Health Insights',
                metrics: ['Average health score', 'Risk population identification', 'Fitness levels', 'Wellness trends'],
              },
              {
                title: 'Program Performance',
                metrics: ['Participation rates', 'Health risk reduction', 'Cost savings', 'ROI metrics'],
              },
            ].map((category, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.metrics.map((metric, j) => (
                    <li key={j} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {metric}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Deployment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'On-Site Wellness Center',
                desc: 'Dedicated room in corporate office with professional staff',
              },
              {
                title: 'Multi-Location Network',
                desc: 'Wellness centers across multiple office locations',
              },
              {
                title: 'Mobile Health Camps',
                desc: 'Portable kiosks for periodic health screening drives',
              },
            ].map((option, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Employees Screened', value: '80%+', desc: 'Annual participation' },
              { label: 'Health Risks Detected', value: '30%+', desc: 'Early identification' },
              { label: 'Healthcare Cost Reduction', value: '15-20%', desc: 'Year-over-year' },
              { label: 'Employee Satisfaction', value: '4.5/5', desc: 'Program rating' },
            ].map((roi, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{roi.value}</div>
                <p className="font-semibold text-gray-900 text-sm">{roi.label}</p>
                <p className="text-gray-600 text-sm">{roi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Build a Healthier Workforce</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's create a comprehensive wellness program tailored to your organization's health goals.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Schedule a Wellness Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Download } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  type: string;
  icon: string;
}

export default function Resources() {
  const resources: Resource[] = [
    {
      title: 'Product Brochure',
      description: 'Complete overview of Reach AI products, features, and capabilities',
      type: 'PDF',
      icon: '📄',
    },
    {
      title: 'Technical Specifications',
      description: 'Hardware, software, and system requirements for all Reach AI models',
      type: 'PDF',
      icon: '⚙️',
    },
    {
      title: 'Deployment Guide',
      description: 'Step-by-step guide for successful Reach AI implementation',
      type: 'PDF',
      icon: '📋',
    },
    {
      title: 'Solution Overview',
      description: 'Solutions tailored for different customer segments and use cases',
      type: 'PDF',
      icon: '🎯',
    },
    {
      title: 'Partnership Guide',
      description: 'Become a Reach AI partner and expand your healthcare offerings',
      type: 'PDF',
      icon: '🤝',
    },
    {
      title: 'Training Materials',
      description: 'Comprehensive training resources for operators and staff',
      type: 'Video',
      icon: '🎓',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Download comprehensive guides, documentation, and materials to help you succeed with Reach AI.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Download Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">{resource.type}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Resource Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Product Guides',
                items: ['Product brochure', 'Technical specs', 'Feature overview', 'Comparison guide'],
              },
              {
                title: 'Deployment',
                items: ['Deployment guide', 'Installation checklist', 'Configuration guide', 'Go-live plan'],
              },
              {
                title: 'Training',
                items: ['User manual', 'Video tutorials', 'Training modules', 'Best practices'],
              },
              {
                title: 'Business',
                items: ['ROI calculator', 'Pricing guide', 'Partnership info', 'Case studies'],
              },
            ].map((category, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="text-gray-700 text-sm hover:text-blue-600 cursor-pointer">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Knowledge Base</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Getting Started',
                desc: 'Learn the basics and get up and running with Reach AI',
                link: '/faq',
              },
              {
                title: 'Troubleshooting',
                desc: 'Common issues and solutions for smooth operation',
                link: '/support',
              },
              {
                title: 'Best Practices',
                desc: 'Tips and strategies for maximizing your Reach AI deployment',
                link: '#',
              },
              {
                title: 'Integration Help',
                desc: 'Connect Reach AI with your existing systems',
                link: '/technology',
              },
            ].map((kb, i) => (
              <a
                key={i}
                href={kb.link}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{kb.title}</h3>
                <p className="text-gray-600 text-sm">{kb.desc}</p>
                <span className="text-blue-600 font-semibold text-sm mt-4 inline-block">Explore →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Custom Resources?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We can create custom documentation, training materials, or deployment guides for your organization.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Request Custom Materials
          </button>
        </div>
      </section>
    </div>
  );
}

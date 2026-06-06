import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  idealFor: string[];
  features: string[];
  image: string;
  link: string;
}

function ProductCard({ name, description, idealFor, features, image, link }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-600 overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Ideal For:</h4>
          <div className="flex flex-wrap gap-2">
            {idealFor.map((item, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {features.slice(0, 4).map((feature, i) => (
              <li key={i} className="flex items-center text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={link}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
        >
          View Details
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const products = [
    {
      name: 'Reach AI Lite',
      description: 'Entry-level solution for small clinics and rural healthcare centers',
      idealFor: ['Small Clinics', 'Rural Healthcare', 'NGOs'],
      features: [
        'Telemedicine support',
        'Basic vital signs capture',
        'Patient registration',
        'Cloud storage',
      ],
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      link: '/products/lite',
    },
    {
      name: 'Reach AI Pro',
      description: 'Comprehensive solution for hospitals and multi-specialty clinics',
      idealFor: ['Hospitals', 'Multi-Specialty Clinics', 'CSR Programs'],
      features: [
        'Advanced diagnostics',
        'EMR integration',
        'Analytics dashboard',
        'Multi-location management',
      ],
      image: 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/products/pro',
    },
    {
      name: 'Reach AI Enterprise',
      description: 'Full-featured solution for government and large-scale deployments',
      idealFor: ['Government Projects', 'Large NGOs', 'Corporate Networks'],
      features: [
        'Enterprise integrations',
        'Advanced analytics',
        'Custom workflows',
        'Dedicated support',
      ],
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/products/enterprise',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose the Right Reach AI Kiosk for Your Deployment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scalable solutions designed for clinics, hospitals, NGOs, and corporate wellness programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

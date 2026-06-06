import React from 'react';
import { Users, Heart, Building2, Briefcase } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  link: string;
}

function SolutionCard({ icon, title, description, benefits, link }: SolutionCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center text-gray-700 text-sm">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <a href={link} className="text-blue-600 font-semibold hover:text-blue-700">
        Learn More →
      </a>
    </div>
  );
}

export default function WhoWeServe() {
  const solutions = [
    {
      icon: <Users size={32} />,
      title: 'Doctors & Clinics',
      description: 'Expand your patient reach beyond physical clinic boundaries',
      benefits: [
        'Remote consultation capability',
        'Expanded patient reach',
        'New revenue opportunities',
        'Faster return on investment',
      ],
      link: '/solutions/doctors',
    },
    {
      icon: <Heart size={32} />,
      title: 'NGOs & Foundations',
      description: 'Deploy affordable healthcare infrastructure in underserved communities',
      benefits: [
        'Affordable healthcare access',
        'Community health centers',
        'Scalable programs',
        'Impact tracking & reporting',
      ],
      link: '/solutions/ngo',
    },
    {
      icon: <Building2 size={32} />,
      title: 'CSR Projects',
      description: 'Build sustainable healthcare access programs',
      benefits: [
        'Sustainable infrastructure',
        'Rural health access',
        'Community healthcare centers',
        'Social impact measurement',
      ],
      link: '/solutions/csr',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Corporate Wellness',
      description: 'Enable preventive healthcare and employee wellness initiatives',
      benefits: [
        'Employee wellness centers',
        'Preventive healthcare',
        'Workforce health programs',
        'Wellness analytics',
      ],
      link: '/solutions/corporate',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach AI solutions are designed for organizations that want to expand healthcare access and improve patient outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}

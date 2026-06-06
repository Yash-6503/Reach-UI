import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  organization: string;
  message: string;
  avatar: string;
}

function TestimonialCard({ name, role, organization, message, avatar }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-start mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{message}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-white font-bold text-lg mr-4">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-gray-500">{organization}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const testimonials: TestimonialProps[] = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Clinic Director',
      organization: 'Kumar Medical Center',
      message: 'Reach AI has transformed our clinic. We can now serve 3x more patients with telemedicine while maintaining the highest quality of care.',
      avatar: 'RK',
    },
    {
      name: 'Priya Sharma',
      role: 'NGO Director',
      organization: 'Health for All Foundation',
      message: 'Deploying Reach AI kiosks in rural areas was seamless. The support team was exceptional, and our impact has multiplied significantly.',
      avatar: 'PS',
    },
    {
      name: 'Anil Patel',
      role: 'CSR Manager',
      organization: 'Tech Industries Ltd',
      message: 'Our employee wellness program took off with Reach AI. The analytics dashboard helps us track health outcomes and ROI perfectly.',
      avatar: 'AP',
    },
    {
      name: 'Dr. Meera Desai',
      role: 'Hospital Administrator',
      organization: 'Desai Multi-Specialty Hospital',
      message: 'The Enterprise solution scaled beautifully across all our branches. Integration with existing systems was smooth and professional.',
      avatar: 'MD',
    },
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from doctors, NGOs, and organizations transforming healthcare with Reach AI
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-2xl mx-auto">
                    <TestimonialCard {...testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? 'bg-blue-600 w-8' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

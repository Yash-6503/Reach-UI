import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition text-left"
      >
        <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
        {isOpen ? <ChevronUp size={20} className="text-blue-600 flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Getting Started',
      question: 'How can I get started with Reach AI?',
      answer: 'Contact our team for a demo, partnership discussion, or deployment consultation. We\'ll assess your requirements and recommend the right solution for your organization.',
    },
    {
      category: 'Getting Started',
      question: 'Who can use Reach AI?',
      answer: 'Reach AI can be used by clinics, hospitals, CSR programs, NGOs, government health initiatives, corporate wellness programs, and healthcare entrepreneurs.',
    },
    {
      category: 'Getting Started',
      question: 'What is the minimum deployment size?',
      answer: 'You can start with a single kiosk at Reach AI Lite and scale up as needed. We support everything from single-clinic deployments to multi-thousand location networks.',
    },
    {
      category: 'Technical',
      question: 'Can Reach AI operate in rural or low-connectivity environments?',
      answer: 'Yes. The system is designed to work in community clinics, remote locations, and areas with intermittent connectivity. Features are available in offline mode with automatic data synchronization.',
    },
    {
      category: 'Technical',
      question: 'What internet speed is required?',
      answer: 'Minimum 2 Mbps for stable operation. For high-quality telemedicine consultations, we recommend 5+ Mbps. The system works in offline mode if connectivity is interrupted.',
    },
    {
      category: 'Technical',
      question: 'How secure is patient data?',
      answer: 'Patient data is encrypted with AES-256 both in transit and at rest. We comply with healthcare data privacy regulations including HIPAA guidelines and GDPR. Regular security audits are conducted.',
    },
    {
      category: 'Deployment',
      question: 'How long does deployment take?',
      answer: 'Standard deployment takes 6-8 weeks from order to go-live, including installation, configuration, training, and testing. Enterprise deployments may take longer depending on customization requirements.',
    },
    {
      category: 'Deployment',
      question: 'What support is included with purchase?',
      answer: 'All plans include installation, staff training, technical support, software updates, and maintenance. Support tier depends on your package (Lite, Pro, or Enterprise).',
    },
    {
      category: 'Telemedicine',
      question: 'Can organizations use their own doctors on the platform?',
      answer: 'Yes. Organizations can onboard their own doctors to provide telemedicine consultations through the Reach AI platform. Role-based access controls ensure proper authorization.',
    },
    {
      category: 'Telemedicine',
      question: 'Is video consultation encrypted?',
      answer: 'Yes. All telemedicine consultations are end-to-end encrypted with real-time vital data monitoring and secure data transmission.',
    },
    {
      category: 'Pricing',
      question: 'What is the pricing model?',
      answer: 'Reach AI offers flexible pricing based on model (Lite/Pro/Enterprise), deployment size, and support tier. Contact our sales team for a customized quote.',
    },
    {
      category: 'Pricing',
      question: 'Are there flexible payment options?',
      answer: 'Yes. We offer various payment models including upfront purchase, monthly subscriptions, lease options, and custom arrangements for government and NGO projects.',
    },
    {
      category: 'Integrations',
      question: 'Can Reach AI integrate with existing hospital systems?',
      answer: 'Yes. Reach AI integrates with EMRs, lab systems, pharmacy systems, and insurance platforms through secure APIs and HL7 standards.',
    },
    {
      category: 'Analytics',
      question: 'What kind of analytics and reporting is available?',
      answer: 'Advanced dashboards show usage metrics, health trends, clinical outcomes, device performance, staff productivity, and financial ROI. Custom reports can be generated.',
    },
    {
      category: 'Compliance',
      question: 'Is Reach AI compliant with government regulations?',
      answer: 'Yes. Reach AI is ABDM compatible, NHA aligned, and follows FDA guidance. It\'s CE certified and CDSCO compliant for operation in India.',
    },
    {
      category: 'Maintenance',
      question: 'What are the maintenance requirements?',
      answer: 'Annual Maintenance Contract (AMC) from year 2 includes software updates, bug fixes, device calibration, and preventive maintenance. Remote support is available 24/7.',
    },
    {
      category: 'Training',
      question: 'How much training is required for staff?',
      answer: 'We provide structured training for operators, doctors, coordinators, and administrators. Training includes theory, hands-on practice, and competency assessment. Typical duration is 1-2 weeks.',
    },
    {
      category: 'Expansion',
      question: 'Can I expand to multiple locations?',
      answer: 'Yes. Reach AI Pro and Enterprise support unlimited locations with centralized management dashboards. You can add new kiosks incrementally.',
    },
    {
      category: 'Support',
      question: 'What if I have issues during deployment?',
      answer: 'Our dedicated support team provides 24/7 assistance. We offer phone support, remote troubleshooting, and on-site support if needed. SLA guarantees ensure quick resolution.',
    },
    {
      category: 'General',
      question: 'How do I contact Reach AI for more information?',
      answer: 'Call +91 9676413408, email info@reachaimedtech.com, or visit our contact page. We\'re available for demos, consultations, and partnership discussions.',
    },
  ];

  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Find answers to common questions about Reach AI, deployment, and support.
          </p>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category} className="py-16 border-b border-gray-200 last:border-b-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{category}</h2>
            <div className="space-y-4">
              {faqs
                .filter((f) => f.category === category)
                .map((faq, index) => {
                  const globalIndex = faqs.indexOf(faq);
                  return (
                    <FAQAccordion
                      key={globalIndex}
                      item={faq}
                      isOpen={openIndex === globalIndex}
                      onToggle={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                    />
                  );
                })}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Didn't find what you're looking for?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact our team for personalized assistance and answers to specific questions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

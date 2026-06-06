import React from 'react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    organization: '',
    role: '',
    phone: '',
    email: '',
    city: '',
    requirement: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. Our team will contact you soon!');
    setFormData({ name: '', organization: '', role: '', phone: '', email: '', city: '', requirement: '', message: '' });
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Contact Reach AI to discuss your healthcare technology needs, schedule a demo, or explore partnership opportunities.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization Name"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Your Role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Your Requirement</option>
                  <option value="demo">Product Demo</option>
                  <option value="pricing">Get Pricing</option>
                  <option value="partnership">Partnership Discussion</option>
                  <option value="consultation">Deployment Consultation</option>
                  <option value="support">Technical Support</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your healthcare technology needs..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a href="tel:+919676413408" className="text-blue-600 font-semibold hover:text-blue-700">
                    +91 9676413408
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a href="mailto:info@reachaimedtech.com" className="text-blue-600 font-semibold hover:text-blue-700">
                    info@reachaimedtech.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Website</p>
                  <a href="https://www.reachaimedtech.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-700">
                    www.reachaimedtech.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-4">Response Time</h3>
              <p className="text-gray-700 text-sm mb-2">
                We aim to respond to all inquiries within <span className="font-semibold">24 business hours</span>.
              </p>
              <p className="text-gray-600 text-sm">
                For urgent matters, please call us directly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/products/lite" className="text-blue-600 hover:text-blue-700">View Products</a></li>
                <li><a href="/support" className="text-blue-600 hover:text-blue-700">Support & Services</a></li>
                <li><a href="/faq" className="text-blue-600 hover:text-blue-700">FAQ</a></li>
                <li><a href="/resources" className="text-blue-600 hover:text-blue-700">Resources</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919676413408"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </a>
      </section>
    </div>
  );
}

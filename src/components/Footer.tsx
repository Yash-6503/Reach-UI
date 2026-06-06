import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company */}
          <div>
            <img src="/Logo_-_reachai.png" alt="Reach AI MedTech" className="h-10" />
            <p className="text-sm text-gray-400">Scaling healthcare access with AI-powered kiosk technology and telemedicine infrastructure.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products-lite" className="hover:text-blue-400 transition">Reach AI Lite</a></li>
              <li><a href="#products-pro" className="hover:text-blue-400 transition">Reach AI Pro</a></li>
              <li><a href="#products-enterprise" className="hover:text-blue-400 transition">Reach AI Enterprise</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#solutions-doctors" className="hover:text-blue-400 transition">Doctors & Clinics</a></li>
              <li><a href="#solutions-ngo" className="hover:text-blue-400 transition">NGOs & Foundations</a></li>
              <li><a href="#solutions-csr" className="hover:text-blue-400 transition">CSR Projects</a></li>
              <li><a href="#solutions-corporate" className="hover:text-blue-400 transition">Corporate Wellness</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#technology" className="hover:text-blue-400 transition">Technology</a></li>
              <li><a href="#support" className="hover:text-blue-400 transition">Support & Services</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="#resources" className="hover:text-blue-400 transition">Downloads</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 9676413408</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@reachaimedtech.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Reach AI MedTech. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

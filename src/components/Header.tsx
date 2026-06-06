import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLink = (label: string, page: string) => {
    const isActive = currentPage === page;
    return (
      <button
        onClick={() => {
          onNavigate(page);
          setIsOpen(false);
        }}
        className={`${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'} transition`}
      >
        {label}
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="flex items-center space-x-2">
            <img src="/Logo_-_reachai.png" alt="Reach AI MedTech" className="h-10" />
            <span className="text-sm font-semibold text-gray-900 hidden sm:inline"></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLink('Home', 'home')}
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition">
                Products
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button onClick={() => onNavigate('product-lite')} className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 first:rounded-t-lg">Reach AI Lite</button>
                <button onClick={() => onNavigate('product-pro')} className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700">Reach AI Pro</button>
                <button onClick={() => onNavigate('product-enterprise')} className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 last:rounded-b-lg">Reach AI Enterprise</button>
              </div>
            </div>
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition">
                Solutions
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button onClick={() => onNavigate('solutions-doctors')} className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 first:rounded-t-lg">Doctors & Clinics</button>
                <button onClick={() => onNavigate('solutions-ngo')} className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700">NGOs & Foundations</button>
                <button onClick={() => onNavigate('solutions-csr')} className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700">CSR Projects</button>
                <button onClick={() => onNavigate('solutions-corporate')} className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 last:rounded-b-lg">Corporate Wellness</button>
              </div>
            </div>
            {navLink('Technology', 'technology')}
            {navLink('Support', 'support')}
            {navLink('Resources', 'resources')}
            {navLink('About', 'about')}
            <button onClick={() => onNavigate('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            {navLink('Home', 'home')}
            {navLink('Reach AI Lite', 'product-lite')}
            {navLink('Reach AI Pro', 'product-pro')}
            {navLink('Reach AI Enterprise', 'product-enterprise')}
            {navLink('Doctors & Clinics', 'solutions-doctors')}
            {navLink('NGOs & Foundations', 'solutions-ngo')}
            {navLink('CSR Projects', 'solutions-csr')}
            {navLink('Corporate Wellness', 'solutions-corporate')}
            {navLink('Technology', 'technology')}
            {navLink('Support', 'support')}
            {navLink('Resources', 'resources')}
            {navLink('About', 'about')}
            <button onClick={() => { onNavigate('contact'); setIsOpen(false); }} className="block m-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}

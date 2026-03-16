import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Capraise Advisors</h4>
            <p className="text-blue-100">Your trusted partner in investment banking and strategic advisory.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link to="/services" className="hover:text-white transition">Fundraising</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Restructuring</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Advisory</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/approach" className="hover:text-white transition">Our Approach</Link></li>
              <li><Link to="/team" className="hover:text-white transition">Team</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><a href="https://www.instagram.com/capraiseadvisors/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-500 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Capraise Advisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


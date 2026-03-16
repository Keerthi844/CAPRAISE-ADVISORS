import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/capraiseadvisors',
      icon: FaFacebook,
      color: 'hover:bg-blue-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/capraiseadvisors/',
      icon: FaInstagram,
      color: 'hover:bg-pink-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/capraiseadvisors',
      icon: FaLinkedin,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com/capraiseadvisors',
      icon: FaTwitter,
      color: 'hover:bg-sky-400'
    },
    {
      name: 'Phone',
      url: 'tel:+919876543210',
      icon: FaPhone,
      color: 'hover:bg-green-500'
    },
    {
      name: 'Email',
      url: 'mailto:info@capraiseadvisors.com',
      icon: FaEnvelope,
      color: 'hover:bg-red-500'
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Capraise Advisors</h4>
            <p className="text-blue-100">Your trusted partner in investment banking and strategic advisory.</p>
          </div>
         
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
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

          {/* Social Icons */}
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-row gap-3">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className={`w-10 h-10 rounded-full bg-white bg-opacity-20 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${link.color}`}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
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


import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
      url: 'https://www.instagram.com/capraiseadvisors3107/',
      icon: FaInstagram,
      color: 'hover:bg-pink-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/113021111/admin/dashboard/',
      icon: FaLinkedin,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/capraise48004',
      icon: FaTwitter,
      color: 'hover:bg-sky-400'
    },
    {
      name: 'Phone',
      url: 'tel:+919640331188',
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

          {/* Contact Us Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4 text-blue-100 mb-6">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-white" size={16} />
                <p className="text-sm">Flat 201, 2nd Floor, Saptagiri Residency, Old Patigadda, Chikoti Gardens, Begumpet, Hyderabad, Telangana 500016</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0 text-white" size={16} />
                <a href="mailto:support@capraiseadvisors.com" className="text-sm hover:text-white transition">info@capraiseadvisors.com</a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="flex-shrink-0 text-white" size={16} />
                <a href="tel:+919876543210" className="text-sm hover:text-white transition">+91 9640331188</a>
              </div>
            </div>

            {/* Social Icons Below Contact */}
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
          <p>Designed by <a href="https://designcareermetrics.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-semibold">Design Career Metrics</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


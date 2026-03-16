import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

function SocialIcons() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/capraiseadvisors',
      icon: FaFacebook,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/capraiseadvisors/',
      icon: FaInstagram,
      color: 'hover:bg-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/capraiseadvisors',
      icon: FaLinkedin,
      color: 'hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com/capraiseadvisors',
      icon: FaTwitter,
      color: 'hover:bg-sky-500'
    },
    {
      name: 'Phone',
      url: 'tel:+919876543210', // Replace with actual phone number
      icon: FaPhone,
      color: 'hover:bg-green-600'
    },
    {
      name: 'Email',
      url: 'mailto:info@capraiseadvisors.com', // Replace with actual email
      icon: FaEnvelope,
      color: 'hover:bg-red-600'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 flex flex-row gap-3 z-40">
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className={`w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg ${link.color}`}
          >
            <IconComponent size={20} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;

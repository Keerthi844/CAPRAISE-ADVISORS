import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-[9999] w-full">
      <div className="w-full px-2">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-left gap-0 m-0 p-0">
            <img
              src="/images/logo-cap.png"
              alt="Capraise Logo"
              className="h-14 w-auto object-contain block m-0 p-0 "
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition">Why Capraise Advisors</Link>
            <Link to="/careers" className="text-gray-700 hover:text-blue-600 transition">Careers</Link>

            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 p-2 rounded hover:bg-gray-100 transition"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

    {/* Mobile Only */}
<div className="md:hidden">

  {/* Overlay */}
  {menuOpen && (
    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 bg-black/40 z-[9998]"
    />
  )}

  {/* Side Drawer */}
  <div
    className={`
      fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-white shadow-lg z-[9999]
      transform transition-transform duration-300
      ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
    `}
  >

    {/* Close Button */}
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-4 right-4 text-gray-600 text-2xl"
    >
      ✕
    </button>

    {/* Menu Items */}
    <div className="flex flex-col mt-16">
      <Link to="/" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-lg hover:bg-gray-50">Home</Link>
      <Link to="/about" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-lg hover:bg-gray-50">About</Link>
      <Link to="/services" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-lg hover:bg-gray-50">Services</Link>
      <Link to="/team" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-lg hover:bg-gray-50">Why Capraise Advisors</Link>
      <Link to="/careers" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-lg hover:bg-gray-50">Careers</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-lg hover:bg-gray-50">Contact</Link>
    </div>

  </div>
</div>
    </nav>
  );
}

export default Navbar;


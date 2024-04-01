import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#200e3a] p-4">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <div className="flex justify-start">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../assets/Horizontal Logo.svg" className="h-8" alt="logo" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Links container */}
        <div className={`flex-grow ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="md:flex justify-center items-center">
            <ul className="md:flex justify-center items-center space-x-8">
              <li><a href="#home" onClick={handleNavLinkClick} className="py-2 px-1 md:ml-0 ml-8 text-white hover:text-[#3887BE]">Home</a></li>
              <li><a href="#about" onClick={handleNavLinkClick} className="py-2 px-1 text-white hover:text-[#3887BE]">About Us</a></li>
              <li><a href="#benefits" onClick={handleNavLinkClick} className="py-2 px-1 text-white hover:text-[#3887BE]">Benefits</a></li>
              <li><a href="#features" onClick={handleNavLinkClick} className="py-2 px-1 text-white hover:text-[#3887BE]">Features</a></li>
              <li><a href="#FAQ" onClick={handleNavLinkClick} className="py-2 px-1 text-white hover:text-[#3887BE]">FAQ</a></li>
            </ul>
          </div>
        </div>

        <a href="/dashboard" className="hidden md:block bg-[#3887BE] text-white px-6 py-1 rounded-full">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;

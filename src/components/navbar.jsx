import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    // { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar at top */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          {/* Glassmorphism Navbar */}
          <div className="relative">
            {/* Glassmorphism Background */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-4xl shadow-lg shadow-black/10">
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link 
                  to="/" 
                  className="flex items-center space-x-2"
                  onClick={closeMobileMenu}
                >
                  {/* Logo Icon */}
                  {/* <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div> */}
                  {/* Logo Text */}
                  <span className="text-white font-bold text-xl">Gaur Desert Safari</span>
                </Link>

                {/* Navigation Links - Centered */}
                <div className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-shadow-xs relative group"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ))}
                </div>

                {/* Empty div for balance (since we removed Book Now button) */}
                <div className="w-20"></div>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link 
                  to="/" 
                  className="flex items-center space-x-2"
                  onClick={closeMobileMenu}
                >
                  {/* Logo Icon */}
                  {/* <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div> */}
                  {/* Logo Text */}
                  <span className="text-white font-bold text-lg">Gaur Desert Safari</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <span
                      className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                        isOpen ? 'rotate-45 translate-y-1.5' : ''
                      }`}
                    ></span>
                    <span
                      className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                    ></span>
                    <span
                      className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                        isOpen ? '-rotate-45 -translate-y-1.5' : ''
                      }`}
                    ></span>
                  </div>
                </button>
              </div>

              {/* Mobile Menu Dropdown */}
              {isOpen && (
                <div className="md:hidden px-4 pb-4 border-t border-white/20 pt-4">
                  <div className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-center"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
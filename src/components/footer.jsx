import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, '_self');
  };

  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in Gaur Desert Safari packages.";
    window.open(`https://wa.me/919772800077?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/developer.b4', '_blank');
  };

  return (
          <div className="border-t border-gray-700">

    <footer className="bg-black text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-black font-bold text-lg">🏜️</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">Gaur Desert Safari</h3>
            </div>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Experience the magic of Jaisalmer with 10+ years of expertise. We offer unforgettable 
              desert adventures, cultural experiences, and lifetime memories in the heart of Thar Desert.
            </p>
            <div className="flex space-x-4">
              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Contact on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </button>
              
              {/* Instagram */}
              <button
                onClick={handleInstagramClick}
                className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Follow on Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Quick Contact</h4>
            <div className="space-y-3">
              {/* Phone Numbers */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <FaPhone className="w-4 h-4 text-yellow-400" />
                <button
                  onClick={() => handlePhoneClick('+919772800077')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg"
                >
                  +91 97728 00077
                </button>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <FaPhone className="w-4 h-4 text-yellow-400" />
                <button
                  onClick={() => handlePhoneClick('+916367438637')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg"
                >
                  +91 63674 38637
                </button>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <FaPhone className="w-4 h-4 text-yellow-400" />
                <button
                  onClick={() => handlePhoneClick('+918302283626')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg"
                >
                  +91 83022 83626
                </button>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-3 group cursor-pointer mt-4">
                <FaEnvelope className="w-4 h-4 text-yellow-400" />
                <button
                  onClick={() => handleEmailClick('atulkaushik2311@gmail.com')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg break-all"
                >
                  atulkaushik2311@gmail.com
                </button>
              </div>
            </div>
          </div>

          {/* Working Hours & Links */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Business Hours</h4>
            <div className="flex items-start space-x-3 mb-4">
              <FaClock className="w-5 h-5 text-yellow-400 mt-1 shrink-0" />
              <div>
                <p className="text-gray-300 text-lg font-semibold">Monday - Sunday</p>
                <p className="text-gray-300 text-lg">10:00 AM - 8:00 PM</p>
                <p className="text-yellow-400 text-sm mt-1">24/7 Available for Bookings</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-yellow-400 mb-3 mt-6">Quick Links</h4>
            <div className="space-y-2">
              <a href="https://gaurdesertsafari.in/about" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg">
                About Us
              </a>
              <a href="https://gaurdesertsafari.in/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-lg">
            © {currentYear} Gaur Desert Safari. All rights reserved.
          </div>

          {/* Developer Credit */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-lg">Designed and developed by</span>
            <button
              onClick={handleInstagramClick}
              className=" cursor-pointer text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <FaInstagram className="w-4 h-4" />
              <span>Developer.b4</span>
            </button>
          </div>
        </div>

        {/* Mobile Quick Actions */}
        <div className="fixed bottom-4 right-4 md:hidden z-50">
          <div className="flex flex-col space-y-3">
            {/* WhatsApp Floating Button */}
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Contact on WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </button>
            
            {/* Call Floating Button */}
            <button
              onClick={() => handlePhoneClick('+919772800077')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Call Now"
            >
              <FaPhone className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
import { useRef, useState } from "react";
import ScrollVelocity from "../components/ScrollVelocity";
import Masonry from "../components/masonryImages";
import Testimonials from "../components/testimonial";
import PackageFeatures from "../components/packageFeatures";
import FAQSection from "../components/faq";
import { FaTimes, FaWhatsapp, FaUser, FaPhone, FaUsers, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [showPackagesMenu, setShowPackagesMenu] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    people: '2',
    date: '',
    message: ''
  });

  const items = [
    {
      id: "1",
      img: "/images/Jaisalmer-War-Museum.jpg",
      height: 800,
    },
    {
      id: "2",
      img: "/images/GadisarLake.jpeg",
      height: 600,
    },
    {
      id: "3",
      img: "/images/Golder-Fort.jpg",
      height: 800,
    },
    {
      id: "4",
      img: "/images/Salim-Singh-Ki-Haveli.jfif",
      height: 600,
    },
    {
      id: "5",
      img: "/images/Patwon-Ki-Haveli.jpg",
      height: 800,
    },
    {
      id: "6",
      img: "/images/Bada-Bagh.jpg",
      height: 700,
    },
    {
      id: "7",
      img: "/images/Kuldhara.jpg",
      height: 600,
    },
    {
      id: "8",
      img: "/images/Sam-Sand-Dunes.jpg",
      height: 600,
    },
    {
      id: "9",
      img: "/images/Khuri-Desert.jpg",
      height: 700,
    },
    {
      id: "10",
      img: "/images/Tanot-Mata-Temple.jpg",
      height: 800,
    },
    {
      id: "11",
      img: "/images/Longewala.jfif",
      height: 500,
    },
    {
      id: "12",
      img: "/images/Jaisalmer-Border.jpg",
      height: 400,
    },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Book Safari button click
  const handleBookSafari = () => {
    setShowBookingPopup(true);
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData(prev => ({
      ...prev,
      date: tomorrow.toISOString().split('T')[0]
    }));
  };

  // Handle Explore Packages button click
  const handleExplorePackages = () => {
    setShowPackagesMenu(true);
  };

  // Generate WhatsApp message for general booking
  const generateWhatsAppMessage = () => {
    const bookingDetails = `
🏜️ *GAUR DESERT SAFARI - GENERAL BOOKING* 🏜️

*Customer Details:*
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
👥 People: ${formData.people}
📅 Preferred Date: ${formData.date}

*Additional Requirements:*
${formData.message || 'Interested in desert safari experience'}

---
🌵 Booked via Gaur Desert Safari Website
⏰ Submitted at: ${new Date().toLocaleString('en-IN')}
    `;

    return encodeURIComponent(bookingDetails);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = '919772800077'; // Your WhatsApp number
    const message = generateWhatsAppMessage();
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    setShowBookingPopup(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      people: '2',
      date: '',
      message: ''
    });
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src="../videos/travel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content - Ultra Mobile Friendly */}
        <div className="relative z-10 text-center text-white w-full px-3 sm:px-6 lg:px-8 mx-auto mt-6 md:mt-0 max-w-[95vw]">
          {/* Main Heading */}
          <h1 className="text-[.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Experience The
            <span className="block text-yellow-400 mt-2 sm:mt-2">
              Desert Safari
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[0.9rem] leading-snug sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-[90vw] sm:max-w-2xl md:max-w-3xl mx-auto">
            Embark on an unforgettable journey through golden sands,
            breathtaking sunsets, and authentic cultural experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <button 
              onClick={handleBookSafari}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full max-w-[280px] sm:w-auto"
            >
              Book Your Safari
            </button>
            <button 
              onClick={handleExplorePackages}
              className="border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 w-full max-w-[280px] sm:w-auto"
            >
              Explore Packages
            </button>
          </div>

          {/* Features - Single column on very small screens */}
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-16 max-w-[90vw] sm:max-w-4xl mx-auto">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Full Day Experience",
                desc: "Sunrise to sunset desert adventure",
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Best Locations",
                desc: "Premium desert camps & routes",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Safety First",
                desc: "Professional guides & equipment",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
          <div className="animate-bounce">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Booking Popup Modal */}
      {showBookingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="glassmorphism-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Popup Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <div>
                <h3 className="text-xl font-bold text-yellow-400">Book Your Desert Safari</h3>
                <p className="text-gray-300 text-sm">Customized Experience • Best Price Guarantee</p>
              </div>
              <button
                onClick={() => setShowBookingPopup(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Package Highlights */}
            <div className="p-6 border-b border-gray-700">
              <h4 className="text-yellow-400 font-semibold mb-3">What We Offer:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-3 h-3 text-yellow-400 mr-2" />
                  Camel Safari
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-3 h-3 text-yellow-400 mr-2" />
                  Cultural Shows
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-3 h-3 text-yellow-400 mr-2" />
                  Desert Camp
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-3 h-3 text-yellow-400 mr-2" />
                  Sunset Views
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name Field */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <FaUser className="w-4 h-4 text-yellow-400 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <FaPhone className="w-4 h-4 text-yellow-400 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your WhatsApp number"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <FaUser className="w-4 h-4 text-yellow-400 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your email (optional)"
                />
              </div>

              {/* People & Date Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Number of People */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                    <FaUsers className="w-4 h-4 text-yellow-400 mr-2" />
                    People *
                  </label>
                  <select
                    name="people"
                    value={formData.people}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                    <FaCalendar className="w-4 h-4 text-yellow-400 mr-2" />
                    Tour Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <FaUser className="w-4 h-4 text-yellow-400 mr-2" />
                  Additional Requirements
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Any special requirements or preferred package..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Send via WhatsApp</span>
              </button>

              {/* Note */}
              <p className="text-gray-400 text-xs text-center">
                You'll be redirected to WhatsApp to confirm your booking
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Packages Menu Popup */}
      {showPackagesMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="glassmorphism-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-yellow-400">Our Safari Packages</h3>
              <button
                onClick={() => setShowPackagesMenu(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Package 1 */}
                <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Heritage Explorer</h4>
                  <p className="text-gray-300 mb-4">Historical places & cultural experience</p>
                  <div className="text-2xl font-bold text-white mb-4">₹2,499</div>
                  <button 
                    onClick={() => {
                      setShowPackagesMenu(false);
                      window.location.href = '/packages';
                    }}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>

                {/* Package 2 */}
                <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Desert Adventure</h4>
                  <p className="text-gray-300 mb-4">Camel safari & cultural shows</p>
                  <div className="text-2xl font-bold text-white mb-4">₹3,999</div>
                  <button 
                    onClick={() => {
                      setShowPackagesMenu(false);
                      window.location.href = '/packages';
                    }}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>

                {/* Package 3 */}
                <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Complete Experience</h4>
                  <p className="text-gray-300 mb-4">2 days with all attractions</p>
                  <div className="text-2xl font-bold text-white mb-4">₹7,999</div>
                  <button 
                    onClick={() => {
                      setShowPackagesMenu(false);
                      window.location.href = '/packages';
                    }}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>

                {/* Package 4 */}
                <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Custom Package</h4>
                  <p className="text-gray-300 mb-4">Tailored to your preferences</p>
                  <div className="text-2xl font-bold text-white mb-4">Custom Price</div>
                  <button 
                    onClick={() => {
                      setShowPackagesMenu(false);
                      handleBookSafari();
                    }}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-all duration-300"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Running Text */}
      <div>
        <ScrollVelocity
          texts={[
            "Jaisalmer War Museum • Gadisar Lake • Golden Fort • Salem Singh Haveli • Patwo Ki Haveli • Badabagh",
            "Kuldhara • Sam Sand Dunes • Khuri Desert • Tanot Mata • Longewala • Jaisalmer Border",
          ]}
          velocity={100}
          className="custom-scroll-text text-white"
          parallaxClassName="bg-black py-4 "
        />
      </div>

      {/* Image Gallery */}
      <div className="bg-black min-h-screen py-8">
        <div className="container mx-auto">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
            padding={10}
          />
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Package Features Section */}
          <PackageFeatures />

      {/* FAQ Section */}
      <FAQSection />

      {/* Custom CSS for Glassmorphism */}
      <style jsx>{`
        .glassmorphism-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default Home;
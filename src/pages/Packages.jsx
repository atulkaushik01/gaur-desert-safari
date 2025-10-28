import { useState, useRef } from "react";
import {
  FaTimes,
  FaWhatsapp,
  FaUser,
  FaPhone,
  FaUsers,
  FaCalendar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    people: "2",
    date: "",
    message: "",
  });

  const packages = [
    // ... (aapka existing packages array - exactly same rakhen)
    {
      id: 1,
      name: "Heritage Explorer",
      price: "₹999",
      duration: "4 Hours",
      places: [
        "Golden Fort",
        "Patwon Ki Haveli",
        "Salem Singh Haveli",
        "Gadisar Lake",
        "War Museum",
      ],
      highlights: [
        "Guided Fort Tour",
        "Haveli Photography",
        "Lake Sunset",
        "Local Guide",
      ],
      bestFor: "History & Architecture Lovers",
    },
    {
      id: 2,
      name: "Desert Adventure",
      price: "₹2,999",
      duration: "8 Hours",
      places: [
        "Sam Sand Dunes (1 Night Stay In Camp)",
        "Camel Safari",
        "Cultural Show (Live Performance -DJ Night)",
        "Desert Camp Dinner + Breakfast",
      ],
      highlights: [
        "Camel Ride",
        "Sunset View",
        "Folk Dance",
        "Traditional Dinner",
      ],
      bestFor: "Adventure Seekers",
    },
    {
      id: 3,
      name: "Mystical Jaisalmer",
      price: "₹799",
      duration: "3 Hours",
      places: [
        "Kuldhara Village (World 3rd Haunted Place)",
        "Bada Bagh",
      ],
      highlights: [
        "Ghost Village",
        "Royal Cenotaphs",
      ],
      bestFor: "Mystery & History Buffs",
    },
    {
      id: 4,
      name: "Patriotic Trail",  
      price: "₹2,499",
      duration: "12 Hours",
      places: ["Tanot Mata Temple", "Longewala", "Jaisalmer Border Visit (0 Point)"],
      highlights: [
        "Tanot Mata Temple",
        "Jaisalmer Border Visit",
        "War Memorial",
        "Temple Blessings",
        "Army Stories",
      ],
      bestFor: "Patriotic Travelers",
    },
    {
      id: 5,
      name: "Complete Jaisalmer",
      price: "₹7,500",
      duration: "2 Days",
      places: [
        "All 12 Major Attractions",
        "Desert Camp Stay",
        "Breakfast & Dinner",
      ],
      highlights: [
        "Comprehensive Tour",
        "Overnight Stay",
        "All Transfers",
        "Expert Guide",
      ],
      bestFor: "First-time Visitors",
    },
    {
      id: 6,
      name: "Desert Serenity",
      price: "₹3,499",
      duration: "7 Hours",
      places: ["Khuri Desert", "Sand Dunes", "Village Visit", "Local Culture"],
      highlights: [
        "Less Crowded",
        "Authentic Experience",
        "Village Life",
        "Peaceful Dunes",
      ],
      bestFor: "Peace Seekers",
    },
  ];

  const allPlaces = [
    "Jaisalmer War Museum",
    "Gadisar Lake",
    "Golden Fort",
    "Salem Singh Haveli",
    "Patwon Ki Haveli",
    "Bada Bagh",
    "Kuldhara",
    "Sam Sand Dunes",
    "Khuri Desert",
    "Tanot Mata",
    "Longewala",
    "Jaisalmer Border",
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle package selection
  const handleBookPackage = (pkg) => {
    setSelectedPackage(pkg);
    setShowPopup(true);
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData((prev) => ({
      ...prev,
      date: tomorrow.toISOString().split("T")[0],
    }));
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const packageDetails = `
🏜️ *GAUR DESERT SAFARI BOOKING* 🏜️

*Package Details:*
📦 Package: ${selectedPackage.name}
💰 Price: ${selectedPackage.price}
⏰ Duration: ${selectedPackage.duration}
🎯 Best For: ${selectedPackage.bestFor}

*Customer Details:*
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
👥 People: ${formData.people}
📅 Date: ${formData.date}

*Places Included:*
${selectedPackage.places.map((place) => `📍 ${place}`).join("\n")}

*Additional Message:*
${formData.message || "No additional message"}

---
🌵 Booked via Gaur Desert Safari Website
⏰ Submitted at: ${new Date().toLocaleString("en-IN")}
    `;

    return encodeURIComponent(packageDetails);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919772800077"; // Your WhatsApp number
    const message = generateWhatsAppMessage();
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
    setShowPopup(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      people: "2",
      date: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="./videos/sand.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content - Everything same, bas outer div mein relative z-10 add kiya */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mt-20 font-bold text-yellow-400 mb-4">
            Desert Safari Packages Jaisalmer - Best Prices & Deals
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our exclusive desert tour packages including camel
            safari, jeep tours and cultural experiences in Jaisalmer desert.
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* All Places Covered Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="glassmorphism-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
              All Places We Cover
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allPlaces.map((place, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg"
                >
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-black font-bold text-sm">🏜️</span>
                  </div>
                  <span className="text-gray-200 text-sm">{place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="glassmorphism-card rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-yellow-400"
              >
                {/* Package Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex justify-center items-baseline space-x-2 mb-3">
                    <span className="text-3xl font-bold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-gray-400">/ person</span>
                  </div>
                  <div className="bg-yellow-400/20 text-yellow-400 py-1 px-3 rounded-full text-sm font-semibold inline-block">
                    {pkg.duration}
                  </div>
                </div>

                {/* Best For */}
                <div className="mb-4 text-center">
                  <span className="text-gray-400 text-sm">Best for</span>
                  <p className="text-white font-semibold">{pkg.bestFor}</p>
                </div>

                {/* Places Covered */}
                <div className="mb-6">
                  <h4 className="text-yellow-400 font-semibold mb-3 flex items-center">
                    <span className="mr-2">📍</span>
                    Places Covered
                  </h4>
                  <ul className="space-y-2">
                    {pkg.places.map((place, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-yellow-400 font-semibold mb-3 flex items-center">
                    <span className="mr-2">⭐</span>
                    Experience Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBookPackage(pkg)}
                  className="w-full bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Book This Package</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="glassmorphism-card rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Why Choose Gaur Desert Safari?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  10+ Years Experience
                </h3>
                <p className="text-gray-300">
                  Trusted by thousands of travelers since 1999
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Best Price Guarantee
                </h3>
                <p className="text-gray-300">
                  Quality experiences at competitive prices
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  100% Safety
                </h3>
                <p className="text-gray-300">
                  Well-maintained vehicles & experienced guides
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Popup Modal */}
        {showPopup && selectedPackage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="glassmorphism-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Popup Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Book {selectedPackage.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {selectedPackage.price} • {selectedPackage.duration}
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              {/* Package Highlights */}
              <div className="p-6 border-b border-gray-700">
                <h4 className="text-yellow-400 font-semibold mb-3">
                  Package Includes:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedPackage.places.map((place, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <FaMapMarkerAlt className="w-3 h-3 text-yellow-400 mr-2" />
                      {place}
                    </div>
                  ))}
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
                      min={new Date().toISOString().split("T")[0]}
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
                    placeholder="Any special requirements or questions..."
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

        {/* Custom CSS for Glassmorphism */}
        <style jsx>{`
          .glassmorphism-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Packages;

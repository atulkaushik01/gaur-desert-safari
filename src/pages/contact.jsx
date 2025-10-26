import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // ✅ APNE CREDENTIALS YAHAN DALEN
    const serviceID = 'service_gaurdesertsafari';
    const templateID = 'template_qvq5ocm';
    const publicKey = 'TlmgKrK19WEgPN0Q1'; // Yahan apni public key dalna

    try {
      const result = await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'atulkaushik2311@gmail.com',
        date_time: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata'
        })
      }, publicKey);

      console.log('✅ Email sent successfully!', result);
      alert('Thank you for your inquiry! We will contact you soon.');
      
      // Form reset
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('❌ Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please call us directly: +91 97728 00077');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 mt-20">
          Contact Gaur Desert Safari
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Get in touch with us for an unforgettable desert experience. We're here to help you plan your perfect Jaisalmer adventure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Map */}
          <div className="bg-black rounded-2xl p-6 glassmorphism-card">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Location</h2>
            <div className="rounded-xl overflow-hidden h-96 bg-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.456789012345!2d70.91234567890123!3d26.912345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3948c123456789ab%3A0x1234567890abcdef!2sJaisalmer%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gaur Desert Safari Location"
              ></iframe>
            </div>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="glassmorphism-card p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-yellow-400">Call Us</h3>
                </div>
                <p className="text-gray-300">+91 97728 00077</p>
                <p className="text-gray-300">+91 63674 38637</p>
                <p className="text-gray-300">+91 83022 83626</p>
              </div>

              <div className="glassmorphism-card p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-yellow-400">Email Us</h3>
                </div>
                <p className="text-gray-300">atulkaushik2311@gmail.com</p>
                <p className="text-gray-300">info@gaurdesertsafari.com</p>
                <p className="text-gray-300">bookings@gaurdesertsafari.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="glassmorphism-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="Desert Safari Booking">Desert Safari Booking</option>
                    <option value="Hotel Booking">Hotel Booking</option>
                    <option value="Custom Tour Package">Custom Tour Package</option>
                    <option value="Group Booking">Group Booking</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Tell us about your requirements and preferences..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 ${
                  isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:from-yellow-500 hover:to-yellow-700 hover:scale-105'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glassmorphism-card p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">24/7 Support</h3>
            <p className="text-gray-300">We're available round the clock to assist you with your queries and bookings.</p>
          </div>

          <div className="glassmorphism-card p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Best Price Guarantee</h3>
            <p className="text-gray-300">We offer the most competitive prices for all our desert safari packages.</p>
          </div>

          <div className="glassmorphism-card p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Local Experts</h3>
            <p className="text-gray-300">25 years of experience in showcasing the real beauty of Jaisalmer desert.</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for Glassmorphism */}
      <style jsx>{`
        .glassmorphism-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Contact;
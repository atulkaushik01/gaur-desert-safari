import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "Amazing desert safari experience! Gaur Desert Safari made our Jaisalmer trip unforgettable. The camel ride at sunset was magical.",
      date: "January 2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      photo: "/api/placeholder/80/80",
      rating: 4,
      review: "Excellent service and knowledgeable guides. The cultural show and dinner were fantastic. Highly recommended!",
      date: "December 2023"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Ahmedabad",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "10+ of experience really shows! They know all the hidden gems of Jaisalmer. Best desert safari company.",
      date: "November 2023"
    },
    {
      id: 4,
      name: "Sunita Singh",
      location: "Kolkata",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "Family-friendly and safe. Our kids loved the camel ride and the folk dance performances. Great value for money.",
      date: "October 2023"
    },
    {
      id: 5,
      name: "Vikram Malhotra",
      location: "Bangalore",
      photo: "/api/placeholder/80/80",
      rating: 4,
      review: "Professional team and well-maintained vehicles. The Sam sand dunes experience was breathtaking. Will visit again!",
      date: "September 2023"
    },
    {
      id: 6,
      name: "Anjali Gupta",
      location: "Chennai",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "Customized tour package was perfect for our group. The guides were friendly and took amazing photos for us.",
      date: "August 2023"
    },
    {
      id: 7,
      name: "Rahul Verma",
      location: "Hyderabad",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "From booking to drop-off, everything was seamless. The desert camp was comfortable and food was delicious.",
      date: "July 2023"
    },
    {
      id: 8,
      name: "Neha Joshi",
      location: "Pune",
      photo: "/api/placeholder/80/80",
      rating: 4,
      review: "Great communication and punctual service. The sunset view from Khuri desert was absolutely stunning.",
      date: "June 2023"
    },
    {
      id: 9,
      name: "Sanjay Reddy",
      location: "Goa",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "Best decision to choose Gaur Desert Safari. Their 10+ experience really makes a difference in service quality.",
      date: "May 2023"
    },
    {
      id: 10,
      name: "Pooja Mehta",
      location: "Jaipur",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "Honeymoon special package was romantic and well-organized. The private dinner under stars was dreamy!",
      date: "April 2023"
    },
    {
      id: 11,
      name: "Arun Desai",
      location: "Lucknow",
      photo: "/api/placeholder/80/80",
      rating: 4,
      review: "Knowledgeable guides who shared interesting stories about Jaisalmer's history. Very informative tour.",
      date: "March 2023"
    },
    {
      id: 12,
      name: "Kavita Nair",
      location: "Kochi",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "Safety was their priority. Well-maintained jeeps and experienced drivers for desert dune bashing.",
      date: "February 2023"
    },
    {
      id: 13,
      name: "Manoj Tiwari",
      location: "Patna",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "Affordable prices without compromising on quality. The cultural performances were authentic and entertaining.",
      date: "January 2023"
    },
    {
      id: 14,
      name: "Sneha Kapoor",
      location: "Chandigarh",
      photo: "/api/placeholder/80/80",
      rating: 4,
      review: "Great photography opportunities. The guides knew all the best spots for perfect sunset pictures.",
      date: "December 2022"
    },
    {
      id: 15,
      name: "Rohit Iyer",
      location: "Bhopal",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "Smooth booking process and excellent customer service. The desert safari exceeded our expectations.",
      date: "November 2022"
    },
    {
      id: 16,
      name: "Divya Choudhary",
      location: "Indore",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "Perfect blend of adventure and culture. The folk music around bonfire was a memorable experience.",
      date: "October 2022"
    },
    {
      id: 17,
      name: "Alok Mishra",
      location: "Nagpur",
      photo: "/api/placeholder/80/80",
      rating: 4,
      review: "Comfortable transportation and hygienic food arrangements. Great for family trips.",
      date: "September 2022"
    },
    {
      id: 18,
      name: "Nisha Rathi",
      location: "Surat",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "The star-gazing experience was phenomenal. Guides were very patient and answered all our questions.",
      date: "August 2022"
    },
    {
      id: 19,
      name: "Deepak Oberoi",
      location: "Ludhiana",
      photo: "/api/placeholder/80/80",
      rating: 5,
      review: "10+ in business and it shows! Professional, reliable, and truly authentic desert experience.",
      date: "July 2022"
    },
    {
      id: 20,
      name: "Meera Krishnan",
      location: "Coimbatore",
      photo: "/api/placeholder/80/80",
      rating: 4,
      review: "Well-planned itinerary that covered all major attractions. The desert camp was clean and comfortable.",
      date: "June 2022"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Calculate visible slides based on screen size
  const getVisibleSlides = () => {
    if (typeof window === 'undefined') return 1;
    
    const width = window.innerWidth;
    if (width >= 1280) return 3; // xl screens
    if (width >= 1024) return 3; // lg screens
    if (width >= 768) return 2;  // md screens
    return 1;                    // mobile
  };

  const visibleSlides = getVisibleSlides();
  const startIndex = currentSlide;
  const endIndex = Math.min(startIndex + visibleSlides, testimonials.length);
  const visibleTestimonials = testimonials.slice(startIndex, endIndex);

  // If we're at the end and need to wrap around
  if (endIndex > testimonials.length) {
    const remaining = endIndex - testimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 pt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover why thousands of travelers trust Gaur Desert Safari for their Jaisalmer adventure
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Testimonial Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-yellow-400 hover:bg-yellow-500 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-yellow-400 hover:bg-yellow-500 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div 
            ref={sliderRef}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-500"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 rounded-2xl p-6 glassmorphism-card hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-linear-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-lg truncate">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {testimonial.location}
                    </div>
                    <p className="text-yellow-400 text-sm mt-1">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.slice(0, Math.ceil(testimonials.length / visibleSlides)).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * visibleSlides)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / visibleSlides) === index 
                    ? 'bg-yellow-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10K+</div>
            <div className="text-gray-300">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">4.8/5</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-300">Safety Record</div>
          </div>
        </div>
      </div>

      {/* Glassmorphism CSS */}
      <style jsx>{`
        .glassmorphism-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
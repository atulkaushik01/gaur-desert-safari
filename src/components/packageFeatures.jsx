import React from 'react';

const PackageFeatures = () => {
const features = [
  {
    id: 1,
    title: "Thrilling Jeep Safari",
    description: "Our signature Jeep Safari takes you into a world of adventure and natural beauty. This safari leads you through the heart of the desert, where you can experience raw beauty.",
    highlights: [
      "Evening Safari: Spectacular sunset views",
      "Morning Safari: Serene sunrise experience", 
      "Includes Dune Bashing: Exciting ride included!"
    ],
    image: "/images/Thrilling-Jeep-Safari.jpg"
  },
  {
    id: 2,
    title: "Classic Camel Safari",
    description: "Experience your desert adventure in traditional style. Enjoy the pure pleasure of golden sand dunes while riding on a comfortable camel. This peaceful experience will remind you of vintage Arabia.",
    highlights: [
      "Traditional Experience: Authentic desert journey",
      "Comfortable Camel Ride: Smooth travel on golden dunes",
      "Peaceful Experience: Tranquil memories of vintage Arabia"
    ],
    image: "/images/Classic-Camel-Safari.jpg"
  },
  {
    id: 4,
    title: "Fun Sandboarding",
    description: "Have you ever tried snowboarding? Now try Sandboarding! Sliding down dune slopes on a board is a fun-filled activity that people of all ages enjoy.",
    highlights: [
      "Easy to Learn: Simple for beginners too",
      "Unique Sport: Different kind of desert adventure",
      "Great for Photos: Perfect opportunity for amazing photos"
    ],
    image: "/images/Fun-Sandboarding.jpg"
  }
];

  return (
    <section className="w-full py-8 md:py-12 bg-black">
      <div className="container mx-auto px-4 mt-20">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Package Features & Activities
          </h2>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto">
            Yeh khaas activities hain jo humare safaris ka hissa hain. Inme se kuch standard hain, 
            aur kuch special packages ke saath included hain.
          </p>
        </div>

        {/* Features List with Alternating Layout */}
        <div className="space-y-8 md:space-y-12">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 lg:h-96">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg h-full">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Highlights List */}
                  <ul className="space-y-3 md:space-y-4">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-sm md:text-base text-amber-700">
                        <svg className="w-5 h-5 mr-3 mt-0.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Package Selection Note - Mobile Friendly */}
        <div className="mt-8 md:mt-12 bg-black rounded-2xl p-6 shadow-md border-white border-2">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center">
            Package Selection Suggestion
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
            <div className="bg-white border-white border-2 text-black px-4 py-3 rounded-lg flex-1 text-center">
              <div className="font-medium mb-1">Basic Package</div>
              <div className="text-sm">Jeep Safari + Dune Bashing</div>
            </div>
            <div className="bg-white border-white border-2 text-black px-4 py-3 rounded-lg flex-1 text-center">
              <div className="font-medium mb-1">Classic Package</div>
              <div className="text-sm">All Activities + Camel Ride</div>
            </div>
            <div className="bg-white border-white border-2 text-black px-4 py-3 rounded-lg flex-1 text-center">
              <div className="font-medium mb-1">Premium Package</div>
              <div className="text-sm">Everything + Dinner & Cultural Show</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageFeatures;
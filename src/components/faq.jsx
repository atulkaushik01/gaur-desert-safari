import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best time to visit Jaisalmer for a desert safari?",
      answer: "The ideal time for a desert safari in Jaisalmer is from October to March when the weather is pleasant with temperatures ranging from 25°C to 8°C. The winter months provide perfect conditions for desert activities without the extreme heat of summer. During this period, you can enjoy camel rides, cultural performances, and bonfire nights comfortably."
    },
    {
      question: "What should I wear for the desert safari?",
      answer: "We recommend wearing comfortable cotton clothes, preferably covering your arms and legs to protect from the sun. Light-colored, loose-fitting clothes are ideal. Don't forget sunglasses, a hat or scarf, and comfortable closed shoes. During winter evenings (November to February), carry a light jacket or sweater as temperatures can drop significantly in the desert after sunset."
    },
    {
      question: "Are the desert safaris safe for children and elderly people?",
      answer: "Yes, absolutely! We offer customized safari experiences suitable for all age groups. For children and elderly guests, we provide gentler camel rides, comfortable seating arrangements, and ensure proper safety measures. Our experienced guides take extra care to make the experience enjoyable for everyone. We also have special vehicles for those who prefer not to ride camels but still want to experience the desert."
    },
    {
      question: "What is included in the desert safari package?",
      answer: "Our standard desert safari package includes: camel safari or jeep safari (your choice), traditional Rajasthani welcome drink, cultural performances (authentic folk music and dance), breathtaking sunset viewing at sand dunes, delicious dinner with both vegetarian and non-vegetarian options, and safe return transfer to your hotel. Additional activities like parasailing, quad biking, and special photography sessions can be customized as per your preference."
    },
    {
      question: "How far in advance should I book my desert safari?",
      answer: "We recommend booking at least 2-3 days in advance, especially during peak season (October to March). For larger groups (more than 10 people) or special occasions like weddings and corporate events, we suggest booking a week in advance to ensure availability. Last-minute bookings are also welcome subject to availability, and we try our best to accommodate all requests."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 xl:py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header - Larger for Desktop */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-4xl xl:text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Everything you need to know about your Jaisalmer desert safari adventure
          </p>
          <div className="w-32 h-1.5 bg-yellow-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* FAQ Items - Larger for Desktop */}
        <div className="space-y-5 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black rounded-xl border-2 border-gray-700 overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Question - Larger Text */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 lg:px-8 lg:py-4 text-left flex justify-between items-center focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 rounded-xl"
              >
                <span className="text-xl lg:text-2xl xl:text-2xl font-semibold text-white pr-8 leading-tight">
                  {faq.question}
                </span>
                <svg
                  className={`w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-yellow-400 transform transition-transform duration-300 shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer - Larger Text */}
              <div
                className={`px-8 lg:px-10 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 lg:max-h-80 xl:max-h-72 pb-6 lg:pb-8' : 'max-h-0'
                }`}
              >
                <div className="border-t-2 border-gray-700 pt-6 lg:pt-8">
                  <p className="text-gray-300 text-lg lg:text-xl xl:text-2xl leading-relaxed lg:leading-loose">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="mt-16 lg:mt-20"></div>
      </div>
    </section>
  );
};

export default FAQSection;
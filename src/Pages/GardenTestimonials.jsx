import React from "react";

const GardenTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Green",
      feedback: "This website helped me learn how to take care of my indoor plants. Highly recommended!",
    },
    {
      id: 2,
      name: "John Brown",
      feedback: "I joined the gardening tips section, and my flowers are blooming beautifully now.",
    },
    {
      id: 3,
      name: "Sophia Rose",
      feedback: "Simple and useful advice! Perfect for beginners like me.",
    },
  ];

  return (
    <div className="p-10 my-20 bg-pink-200 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
      What Our Gardeners Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl border border-pink-100 hover:border-pink-400 transition duration-400"
          >
            <p className="text-gray-600 italic">“{t.feedback}”</p>
            <h3 className="mt-4 font-semibold text-pink-700">– {t.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardenTestimonials;

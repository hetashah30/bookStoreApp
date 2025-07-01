import React from "react";

const testimonialsData = [
  {
    name: "Aarav Mehta",
    title: "Student",
    quote:
      "BookStore has been a game changer in my academic journey. The collection and user experience are simply amazing!",
    image: "/aarav.jpg",
  },
  {
    name: "Riya Shah",
    title: "Book Enthusiast",
    quote:
      "From fiction to educational books, I’ve found everything here. Love the interface and the service!",
    image: "/riya.jpg",
  },
  {
    name: "Devansh Patel",
    title: "Teacher",
    quote:
      "An excellent platform for learners of all ages. Highly recommended for discovering quality books.",
    image: "/devansh.jpg",
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-gray-200 dark:bg-gray-800" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          What Our Readers Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          {testimonialsData.map((t, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-pink-400"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{t.quote}"
              </p>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

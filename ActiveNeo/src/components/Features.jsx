import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="py-16 bg-gradient-to-r from-purple-600 to-black text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Why ActiveNeo?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Verified Workouts",
              description:
                "Track and verify your workouts with GPS and blockchain validation.",
            },
            {
              title: "Earn Rewards",
              description: "Earn tokens and NFTs for consistent workouts.",
            },
            {
              title: "Data Ownership",
              description:
                "Own your fitness data and choose to sell or share it.",
            },
            {
              title: "AI Insights",
              description:
                "AI-driven fitness suggestions to improve your workout plans.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from "react";

const AIInsights = () => {
  return (
    <section
      id="ai"
      className="py-16 bg-gradient-to-r from-purple-600 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">
          AI-Powered Fitness Insights
        </h2>
        <p className="text-center mt-4 text-lg">
          Get smarter workout suggestions based on your habits.
        </p>
        <div className="mt-8 text-center">
          <p className="max-w-2xl mx-auto">
            Our AI analyses your workout data to recommend improvements, avoid
            burnout, and boost your performance.
          </p>
          <div className="mt-6">
            <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Discover Your Insights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;

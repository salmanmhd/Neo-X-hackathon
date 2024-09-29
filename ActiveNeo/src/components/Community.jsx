import React from "react";

const Community = () => {
  return (
    <section
      id="community"
      className="py-16 bg-gradient-to-r from-purple-600 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Join the Fitness DAO</h2>
        <p className="text-center mt-4 text-lg">
          Help validate workouts and earn rewards.
        </p>
        <div className="mt-8 text-center">
          <p className="max-w-2xl mx-auto">
            Become part of the DAO and participate in the verification of
            workouts submitted by others. Earn rewards for your contributions.
          </p>
          <div className="mt-6">
            <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

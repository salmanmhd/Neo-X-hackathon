import React from "react";

const Rewards = () => {
  return (
    <section
      id="rewards"
      className="py-16 bg-gradient-to-r from-purple-600 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Earn Real Rewards</h2>
        <p className="text-center mt-4">
          Turn your workouts into tokens and NFTs.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Token Rewards",
              description:
                "Earn Neo tokens for consistent workouts and achievements.",
            },
            {
              title: "NFT Achievements",
              description: "Collect NFTs for milestones like a 30-day streak.",
            },
            {
              title: "Bonus Challenges",
              description:
                "Participate in challenges to earn extra tokens and rewards.",
            },
          ].map((reward, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="font-semibold text-lg">{reward.title}</h3>
              <p className="text-gray-400">{reward.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;

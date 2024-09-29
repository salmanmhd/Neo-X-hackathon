import React from "react";
import Spline from "@splinetool/react-spline";

function MainSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-row">
      <div className="text-white min-h-screen flex flex-col justify-center items-start px-4 mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-4xl font-bold mb-4 font-sans">
          Shape Your Fitness 🏋️‍♂️ Journey with ✅ Verified Rewards 💰
        </h1>
        <p className="text-lg mb-8 font-sans">
          Earn tokens for real workouts, own your data, and get rewarded for
          fitness consistency.
        </p>

        <div className="flex space-x-4 mt-8">
          <button className="px-4 py-2 border border-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2 hover:bg-gradient-to-r from-purple-500 to-black">
            <span>Start Tracking</span>
          </button>
        </div>
      </div>

      <div className="box-content h-1/1 w-3/5 p-1 bg-none">
        <Spline scene="https://prod.spline.design/s4OQyDEGP32PGCxB/scene.splinecode" />
      </div>
    </div>
  );
}

export default MainSection;

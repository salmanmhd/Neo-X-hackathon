import React from "react";
import Navbar from "./shared/Navbar";

const Workouts = () => {
  return (
    <section
      id="workouts"
      className="py-16 bg-gradient-to-r from-purple-600 to-black text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Customised Workouts</h2>
        <p className="text-center mt-4">
          Follow verified workout plans or create your own routine.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Cardio Plan",
              description: "Boost your endurance with custom cardio routines.",
            },
            {
              title: "Strength Training",
              description: "Build muscle with AI-recommended strength plans.",
            },
            {
              title: "Flexibility",
              description:
                "Improve flexibility with our personalised yoga routines.",
            },
          ].map((workout, index) => (
            <div
              key={index}
              className="p-6 bg-purple-900 border border-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="font-semibold text-lg">{workout.title}</h3>
              <p className="text-gray-400">{workout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workouts;

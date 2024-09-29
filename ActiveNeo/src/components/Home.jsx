import React from "react";
import Navbar from "./shared/Navbar";
import MainSection from "./MainSection";
import Features from "./Features";
import Workouts from "./Workouts";
import Rewards from "./Rewards";
import AIInsights from "./AiInsights";
import Community from "./Community";
import Footer from "./shared/Footer";

const Home = () => {
  return (
    <div className="absolute min-h-screen w-full bg-gradient-to-r from-purple-600 to-black">
      <Navbar />
      <MainSection />
      <Features />
      <Workouts />
      <Rewards />
      <AIInsights />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;

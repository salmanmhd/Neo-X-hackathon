import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  BarChart,
  Calendar,
  MapPin,
  Video,
  Award,
  Coins,
  BarChart2,
  TrendingUp,
  Users,
  Lock,
} from "lucide-react";
import Navbar from "./shared/Navbar";

export default function Dashboard() {
  const [neoBalance, setNeoBalance] = useState(150);
  const [nftsOwned, setNftsOwned] = useState(3);
  const [workoutStreak, setWorkoutStreak] = useState(7);
  const [weeklyGoalProgress, setWeeklyGoalProgress] = useState(75);

  const handleClaimRewards = () => {
    console.log("Claiming rewards...");
    setNeoBalance((prevBalance) => prevBalance + 10);
  };

  const handleMintNFT = () => {
    console.log("Minting NFT...");
    setNftsOwned((prevCount) => prevCount + 1);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 to-black">
      {" "}
      <Navbar />
      <div className="flex justify-center items-center min-h-screen mt-5 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-800 to-gray-900 border-purple-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-300">
                Fitness Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-purple-300">
                <span>Workout Streak</span>
                <span className="font-bold">{workoutStreak} days</span>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-purple-300">
                  <span>Weekly Goal Progress</span>
                  <span>{weeklyGoalProgress}%</span>
                </div>
                <Progress value={weeklyGoalProgress} className="w-full" />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                View Detailed Stats
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800 to-gray-900 border-purple-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-300">
                Web3 Rewards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-purple-300">
                <span className="flex items-center">
                  <Coins className="w-5 h-5 mr-2" />
                  NEO Balance
                </span>
                <span className="font-bold">{neoBalance} NEO</span>
              </div>
              <div className="flex items-center justify-between text-purple-300">
                <span className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  NFTs Owned
                </span>
                <span className="font-bold">{nftsOwned}</span>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Claim Daily Rewards
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Mint Achievement NFT
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800 to-gray-900 border-purple-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-300">
                Data Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" /> Manage Location Data
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center">
                <Video className="w-4 h-4 mr-2" /> Manage Workout Videos
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center">
                <BarChart2 className="w-4 h-4 mr-2" /> View Data Analytics
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center">
                <Lock className="w-4 h-4 mr-2" /> Privacy Settings
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800 to-gray-900 border-purple-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-300">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  {
                    date: "2023-09-28",
                    type: "Running",
                    duration: 30,
                    verified: true,
                  },
                  {
                    date: "2023-09-27",
                    type: "Weightlifting",
                    duration: 45,
                    verified: true,
                  },
                  {
                    date: "2023-09-26",
                    type: "Yoga",
                    duration: 60,
                    verified: true,
                  },
                ].map((workout, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-2 bg-purple-900 rounded-md"
                  >
                    <span className="text-purple-300">
                      {workout.date} - {workout.type} ({workout.duration} min)
                    </span>
                    {workout.verified && (
                      <span className="text-green-500 flex items-center">
                        <Award className="w-4 h-4 mr-1" /> Verified
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800 to-gray-900 border-purple-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-300">
                Community Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-purple-300">
                <span>30-Day Running Challenge</span>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Join
                </Button>
              </div>
              <div className="flex items-center justify-between text-purple-300">
                <span>Weightlifting Competition</span>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  View
                </Button>
              </div>
              <div className="flex items-center justify-between text-purple-300">
                <span>Yoga Marathon</span>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800 to-gray-900 border-purple-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-300">
                Marketplace
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center">
                <TrendingUp className="w-4 h-4 mr-2" /> Trade NEO Tokens
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center">
                <Award className="w-4 h-4 mr-2" /> NFT Marketplace
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center">
                <Users className="w-4 h-4 mr-2" /> Sell Fitness Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import {
//   BarChart,
//   Calendar,
//   MapPin,
//   Video,
//   Award,
//   Coins,
//   BarChart2,
//   TrendingUp,
//   Users,
//   Lock,
// } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
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
} from 'lucide-react';
export default function Dashboard() {
  const [neoBalance, setNeoBalance] = useState(150);
  const [nftsOwned, setNftsOwned] = useState(3);
  const [workoutStreak, setWorkoutStreak] = useState(7);
  const [weeklyGoalProgress, setWeeklyGoalProgress] = useState(75);

  const handleClaimRewards = () => {
    // This function would typically interact with a smart contract to claim rewards
    console.log('Claiming rewards...');
    setNeoBalance((prevBalance) => prevBalance + 10);
  };

  const handleMintNFT = () => {
    // This function would typically interact with a smart contract to mint an NFT
    console.log('Minting NFT...');
    setNftsOwned((prevCount) => prevCount + 1);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>ActiveNeo Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Fitness Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span>Workout Streak</span>
                <span className='font-bold'>{workoutStreak} days</span>
              </div>
              <div>
                <div className='flex justify-between mb-1'>
                  <span>Weekly Goal Progress</span>
                  <span>{weeklyGoalProgress}%</span>
                </div>
                <Progress value={weeklyGoalProgress} className='w-full' />
              </div>
              <Button
                className='w-full'
                onClick={() => console.log('View detailed stats')}
              >
                View Detailed Stats
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Web3 Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span className='flex items-center'>
                  <Coins className='w-5 h-5 mr-2' />
                  NEO Balance
                </span>
                <span className='font-bold'>{neoBalance} NEO</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='flex items-center'>
                  <Award className='w-5 h-5 mr-2' />
                  NFTs Owned
                </span>
                <span className='font-bold'>{nftsOwned}</span>
              </div>
              <Button className='w-full' onClick={handleClaimRewards}>
                Claim Daily Rewards
              </Button>
              <Button className='w-full' onClick={handleMintNFT}>
                Mint Achievement NFT
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Control</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <Button className='w-full flex items-center justify-center'>
                <MapPin className='w-4 h-4 mr-2' /> Manage Location Data
              </Button>
              <Button className='w-full flex items-center justify-center'>
                <Video className='w-4 h-4 mr-2' /> Manage Workout Videos
              </Button>
              <Button className='w-full flex items-center justify-center'>
                <BarChart2 className='w-4 h-4 mr-2' /> View Data Analytics
              </Button>
              <Button className='w-full flex items-center justify-center'>
                <Lock className='w-4 h-4 mr-2' /> Privacy Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2'>
              {[
                {
                  date: '2023-09-28',
                  type: 'Running',
                  duration: 30,
                  verified: true,
                },
                {
                  date: '2023-09-27',
                  type: 'Weightlifting',
                  duration: 45,
                  verified: true,
                },
                {
                  date: '2023-09-26',
                  type: 'Yoga',
                  duration: 60,
                  verified: true,
                },
              ].map((workout, index) => (
                <li
                  key={index}
                  className='flex items-center justify-between p-2 bg-secondary rounded-md'
                >
                  <span>
                    {workout.date} - {workout.type} ({workout.duration} min)
                  </span>
                  {workout.verified && (
                    <span className='text-green-500 flex items-center'>
                      <Award className='w-4 h-4 mr-1' /> Verified
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Challenges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <span>30-Day Running Challenge</span>
                <Button size='sm'>Join</Button>
              </div>
              <div className='flex items-center justify-between'>
                <span>Weightlifting Competition</span>
                <Button size='sm'>View</Button>
              </div>
              <div className='flex items-center justify-between'>
                <span>Yoga Marathon</span>
                <Button size='sm'>Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marketplace</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <Button className='w-full flex items-center justify-center'>
                <TrendingUp className='w-4 h-4 mr-2' /> Trade NEO Tokens
              </Button>
              <Button className='w-full flex items-center justify-center'>
                <Award className='w-4 h-4 mr-2' /> NFT Marketplace
              </Button>
              <Button className='w-full flex items-center justify-center'>
                <Users className='w-4 h-4 mr-2' /> Sell Fitness Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

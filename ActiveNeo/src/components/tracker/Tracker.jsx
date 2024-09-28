import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MapPin, Timer, Flame } from 'lucide-react';

const Tracker = () => {
  const [duration, setDuration] = useState(60);
  const [customDuration, setCustomDuration] = useState(60);
  const [gymLocation, setGymLocation] = useState('Downtown Gym');
  const [streak, setStreak] = useState(5);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const workouts = ['Chest', 'Biceps', 'Triceps', 'Pull', 'Push', 'Legs'];

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsWorkoutStarted(true);
    const id = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);
    setDuration(customDuration); // Use custom duration
  };

  const handleEnd = () => {
    setIsWorkoutStarted(false);
    if (intervalId) clearInterval(intervalId);
    setElapsedTime(0);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-black text-white'>
      <Card className='w-full max-w-md mx-auto bg-gradient-to-br from-purple-800 to-gray-900 border-purple-600'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center text-purple-300'>
            Exercise Tracker
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='flex justify-between text-purple-300'>
            <div className='flex items-center'>
              <Timer className='w-5 h-5 mr-2' />
              <span>{duration} min</span>
            </div>
            <div className='flex items-center'>
              <MapPin className='w-5 h-5 mr-2' />
              <span>{gymLocation}</span>
            </div>
            <div className='flex items-center'>
              <Flame className='w-5 h-5 mr-2' />
              <span>{streak} days</span>
            </div>
          </div>

          <div className='relative'>
            <select
              value={selectedWorkout}
              onChange={(e) => setSelectedWorkout(e.target.value)}
              className='flex items-center justify-between w-full px-3 py-2 text-sm bg-purple-700 border border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white'
            >
              <option value='' disabled>
                Select Workout
              </option>
              {workouts.map((workout) => (
                <option key={workout} value={workout} className='text-black'>
                  {workout}
                </option>
              ))}
            </select>
          </div>

          {!isWorkoutStarted ? (
            <>
              <Button
                className='w-full bg-purple-600 hover:bg-purple-700 text-white'
                onClick={handleStart}
              >
                Start Workout
              </Button>
              <div className='text-center space-y-2'>
                <p className='text-lg font-semibold text-purple-300'>
                  Ready to crush your goals?
                </p>
                <p className='text-sm text-purple-400'>
                  Every rep brings you closer to the best version of yourself.
                </p>
                <p className='text-sm text-purple-400'>
                  Start your session and make today count!
                </p>
              </div>
            </>
          ) : (
            <>
              <div className='text-center text-3xl font-bold text-purple-300'>
                {formatTime(elapsedTime)}
              </div>
              <Button
                className='w-full bg-red-600 hover:bg-red-700 text-white'
                onClick={handleEnd}
              >
                End Workout
              </Button>
            </>
          )}

          {isWorkoutStarted && (
            <div className='space-y-4'>
              {/* Additional sections can be added here when workout is started */}
            </div>
          )}

          <Button
            className='w-full bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-800'
            onClick={handleEnd}
          >
            End Session
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tracker;

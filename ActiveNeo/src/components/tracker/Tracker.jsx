'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MapPin, Timer, Flame } from 'lucide-react';
import ImageCapture from './ImageCapture';

const Tracker = () => {
  const [duration, setDuration] = useState(30);
  const [customDuration, setCustomDuration] = useState(60);
  const [gymLocation, setGymLocation] = useState('Downtown Gym');
  const [streak, setStreak] = useState(5);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [showImageCapture, setShowImageCapture] = useState(false);
  const [isEndingWorkout, setIsEndingWorkout] = useState(false);
  const [workoutStartTime, setWorkoutStartTime] = useState(null);
  const [workoutEndTime, setWorkoutEndTime] = useState(null);

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

  const startTimer = () => {
    setIsWorkoutStarted(true);
    const id = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);
    setDuration(customDuration);
  };

  const handleStart = () => {
    setShowImageCapture(true);
  };

  const handleImageCaptured = () => {
    setShowImageCapture(false);
    if (!isWorkoutStarted) {
      startTimer();
    } else {
      handleEnd();
    }
  };

  const handleEndWorkout = () => {
    setIsEndingWorkout(true);
    setShowImageCapture(true);
  };

  const handleEnd = () => {
    setIsWorkoutStarted(false);
    setIsEndingWorkout(false);
    if (intervalId) clearInterval(intervalId);
    setElapsedTime(0);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-black text-white'>
      <Card className='w-full max-w-md mx-auto bg-gradient-to-br from-purple-800 to-gray-900 border-purple-600 min-h-screen flex flex-col'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center text-purple-300'>
            Exercise Tracker
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6 flex-grow flex flex-col justify-between'>
          <div className='space-y-6'>
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

            {showImageCapture ? (
              <ImageCapture
                setIsImageClicked={handleImageCaptured}
                setTime={
                  isWorkoutStarted ? setWorkoutStartTime : setWorkoutEndTime
                }
              />
            ) : isWorkoutStarted ? (
              <>
                <div className='text-center text-3xl font-bold text-purple-300'>
                  {formatTime(elapsedTime)}
                </div>
                <Button
                  className='w-full bg-red-600 hover:bg-red-700 text-white'
                  onClick={handleEndWorkout}
                >
                  End Workout
                </Button>
              </>
            ) : (
              <>
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-purple-300'>
                    Select Workout:
                  </h3>
                  <div className='grid grid-cols-2 gap-2'>
                    {workouts.map((workout) => (
                      <Button
                        key={workout}
                        className={`w-full ${
                          selectedWorkout === workout
                            ? 'bg-purple-600'
                            : 'bg-purple-800'
                        } hover:bg-purple-700`}
                        onClick={() => setSelectedWorkout(workout)}
                      >
                        {workout}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-purple-300'>
                    Set Duration:
                  </h3>
                  <input
                    type='range'
                    min='15'
                    max='120'
                    step='15'
                    value={customDuration}
                    onChange={(e) => setCustomDuration(Number(e.target.value))}
                    className='w-full'
                  />
                  <p className='text-center text-purple-300'>
                    {customDuration} minutes
                  </p>
                </div>
                <Button
                  className='w-full bg-green-600 hover:bg-green-700 text-white'
                  onClick={handleStart}
                >
                  Start Workout
                </Button>
              </>
            )}
          </div>

          {isEndingWorkout && !showImageCapture && (
            <Button
              className='w-full bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-800'
              onClick={handleEnd}
            >
              End Session
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Tracker;

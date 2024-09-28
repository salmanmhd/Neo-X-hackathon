import { useState } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar } from './ui/calendar';
import { MapPin, Video, Award, Coins, BarChart2 } from 'lucide-react';

export default function Tracker() {
  const [workouts, setWorkouts] = useState([
    { date: '2023-09-25', type: 'Running', duration: 30, verified: true },
    { date: '2023-09-26', type: 'Weightlifting', duration: 45, verified: true },
    { date: '2023-09-28', type: 'Yoga', duration: 60, verified: false },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAddWorkout = () => {
    // This function would typically open a modal or form to add a new workout
    console.log('Add new workout');
  };

  const handleVerifyWorkout = (index) => {
    // This function would typically trigger the verification process
    const newWorkouts = [...workouts];
    newWorkouts[index].verified = true;
    setWorkouts(newWorkouts);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>ActiveNeo Fitness Tracker</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Workout Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode='single'
              selected={selectedDate}
              onSelect={setSelectedDate}
              className='rounded-md border'
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2'>
              {workouts.map((workout, index) => (
                <li
                  key={index}
                  className='flex items-center justify-between p-2 bg-secondary rounded-md'
                >
                  <span>
                    {workout.date} - {workout.type} ({workout.duration} min)
                  </span>
                  {workout.verified ? (
                    <span className='text-green-500 flex items-center'>
                      <Award className='w-4 h-4 mr-1' /> Verified
                    </span>
                  ) : (
                    <Button
                      size='sm'
                      onClick={() => handleVerifyWorkout(index)}
                    >
                      Verify
                    </Button>
                  )}
                </li>
              ))}
            </ul>
            <Button onClick={handleAddWorkout} className='mt-4'>
              Add Workout
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Workout Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div>
                <div className='flex justify-between mb-1'>
                  <span>Weekly Goal Progress</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className='w-full' />
              </div>
              <div className='flex items-center'>
                <Coins className='w-5 h-5 mr-2' />
                <span>Tokens Earned: 150 NEO</span>
              </div>
              <div className='flex items-center'>
                <Award className='w-5 h-5 mr-2' />
                <span>NFTs Collected: 3</span>
              </div>
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProofOfWorkoutWithLocation {
    struct Workout {
        uint256 id;
        address user;
        string workoutType;    
        uint256 duration;
        uint256 startTime;     
        uint256 endTime;       
        uint256 latitudeStart; 
        uint256 longitudeStart;
        uint256 latitudeEnd;   
        uint256 longitudeEnd;  
    }

    mapping(address => Workout[]) private workouts;
    uint256 public workoutCount;

    event WorkoutLogged(
        uint256 indexed id, 
        address indexed user, 
        string workoutType, 
        uint256 duration, 
        uint256 startTime, 
        uint256 endTime, 
        uint256 latitudeStart, 
        uint256 longitudeStart, 
        uint256 latitudeEnd, 
        uint256 longitudeEnd
    );

    function logWorkout(
        string memory _workoutType, 
        uint256 _duration, 
        uint256 _startTime, 
        uint256 _endTime, 
        uint256 _latitudeStart, 
        uint256 _longitudeStart, 
        uint256 _latitudeEnd, 
        uint256 _longitudeEnd
    ) public {
        require(bytes(_workoutType).length > 0, "Workout type cannot be empty");
        require(_duration > 0, "Duration must be greater than zero");
        require(_startTime > 0, "Start time must be valid");
        require(_endTime > _startTime, "End time must be greater than start time");

        workoutCount++;
        workouts[msg.sender].push(Workout(
            workoutCount, 
            msg.sender, 
            _workoutType, 
            _duration, 
            _startTime, 
            _endTime, 
            _latitudeStart, 
            _longitudeStart, 
            _latitudeEnd, 
            _longitudeEnd
        ));

        emit WorkoutLogged(
            workoutCount, 
            msg.sender, 
            _workoutType, 
            _duration, 
            _startTime, 
            _endTime, 
            _latitudeStart, 
            _longitudeStart, 
            _latitudeEnd, 
            _longitudeEnd
        );
    }

    function getUserWorkouts(address _user) public view returns (Workout[] memory) {
        return workouts[_user];
    }


    function getUserWorkoutCount(address _user) public view returns (uint256) {
        return workouts[_user].length;
    }
}
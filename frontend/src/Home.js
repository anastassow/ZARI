// Home.js
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleExerciseChange = (e) => {
    setExerciseName(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleRepsChange = (e) => {
    setReps(e.target.value);
  };

  const handleExerciseSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/weights/exercise/', { name: exerciseName });
      alert('Exercise created successfully!');
      setExerciseName('');
    } catch (error) {
      console.error('Error creating exercise:', error);
    }
  };

  const handleWeightSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/weights/weight/', {
        name: exerciseName,
        weights: [{ weight, reps }]
      });
      alert('Weight added successfully!');
      setWeight('');
      setReps('');
    } catch (error) {
      console.error('Error adding weight:', error);
    }
  };

  return (
    <div>
      <h1>Exercise Tracker</h1>
      <form onSubmit={handleExerciseSubmit}>
        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={handleExerciseChange}
        />
        <button type="submit">Create Exercise</button>
      </form>

      <form onSubmit={handleWeightSubmit}>
        <input
          type="text"
          placeholder="Weight"
          value={weight}
          onChange={handleWeightChange}
        />
        <input
          type="text"
          placeholder="Reps"
          value={reps}
          onChange={handleRepsChange}
        />
        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={handleExerciseChange}
        />
        <button type="submit">Add Weight</button>
      </form>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    fetchExerciseData();
  }, []);

  const fetchExerciseData = async () => {
    try {
      const user_id = localStorage.getItem('user_id'); // Get user_id from local storage
      const response = await axios.post('http://127.0.0.1:8000/weights/get_user_exercise_data/', { user_id });
      setExerciseData(response.data);
    } catch (error) {
      console.error('Error fetching exercise data:', error);
    }
  };

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
      const user_id = localStorage.getItem('user_id'); // Get user_id from local storage
      await axios.post('http://127.0.0.1:8000/weights/exercise/', { name: exerciseName, user_id });
      alert('Exercise created successfully!');
      setExerciseName('');
    } catch (error) {
      console.error('Error creating exercise:', error);
    }
  };

  const handleWeightSubmit = async (e) => {
    e.preventDefault();
    try {
      const user_id = localStorage.getItem('user_id'); // Get user_id from local storage
      await axios.post('http://127.0.0.1:8000/weights/weight/', {
        name: exerciseName,
        weight: parseFloat(weight),
        reps: parseInt(reps),
        user_id
      });
      alert('Weight added successfully!');
      setWeight('');
      setReps('');
      fetchExerciseData();
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

      <h2>All Exercise Data</h2>
      <table>
        <thead>
          <tr>
            <th>Exercise Name</th>
            <th>Weights</th>
          </tr>
        </thead>
        <tbody>
          {exerciseData.map(exercise => (
            <tr key={exercise.id}>
              <td>{exercise.name}</td>
              <td>
                <ul>
                  {exercise.weights.map(weight => (
                    <li key={weight.id}>
                      Weight: {weight.value}, Reps: {weight.reps}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

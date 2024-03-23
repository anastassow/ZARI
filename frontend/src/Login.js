import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import CryptoJS from 'crypto-js';
import axios from 'axios';

const LoginForm = ({ logout }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const hashedPassword = CryptoJS.SHA256(password).toString();
      try {
        await axios.post('http://127.0.0.1:8000/authenticate/login/', { username, password: hashedPassword });
        navigate('/home'); // Redirect to '/home' route using navigate
      } catch (error) {
        console.error('Login failed:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
        <button onClick={logout}>Logout</button>
      </form>
    );
};

export default LoginForm;

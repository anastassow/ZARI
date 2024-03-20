import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';


const RegisterForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const hashedPassword = CryptoJS.SHA256(password).toString(); // Hash the password
      axios.post('http://127.0.0.1:8000/authenticate/register/', { username, password: hashedPassword});
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
        <button type="submit">Register</button>
      </form>
    );
  };

export default RegisterForm
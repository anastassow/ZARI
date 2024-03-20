import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const LoginForm = ({ logout }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const hashedPassword = CryptoJS.SHA256(password).toString();
      axios.post('http://127.0.0.1:8000/authenticate/login/', { username, password: hashedPassword});
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
        <button onClick={logout}>logout</button>
      </form>
    );
  };

export default LoginForm
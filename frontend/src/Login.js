  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import CryptoJS from 'crypto-js';
  import axios from 'axios';

  const LoginForm = () => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
          e.preventDefault();
          const hashedPassword = CryptoJS.SHA256(password).toString();
          try {
              const response = await axios.post('http://127.0.0.1:8000/authenticate/login/', { username, password: hashedPassword });
              if (response.status === 200) {
                  const userId = response.data.user_id; 
                  localStorage.setItem('user_id', userId); 
                  console.log('Login successful:', response.data.message);
                  navigate('/home');
              } else {
                  console.error('Login failed:', response.data.error);
              }
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
          </form>
      );
  };

  export default LoginForm;

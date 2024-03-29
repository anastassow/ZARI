import React from 'react';
import axios from 'axios';
import RegisterForm from './Register';
import LoginForm from './Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';

const App = () => {
  const handleSubmit = (url, data) => {
    axios.post(url, data)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  const logout = () => {
    axios.post('http://127.0.0.1:8000/authenticate/logout/')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm logout={logout}/>}/>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

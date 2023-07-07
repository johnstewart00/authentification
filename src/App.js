import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (event) => {
    event.preventDefault();
    console.log('login');
    console.log(username, password);
    try {
      // Modify the login request in the onLogin function
      const response = await axios.get('http://localhost:3001/login', {
        params: {
          username,
          password
        }
      });

      console.log(response);
      // Handle success case here
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        console.log(error.response.data); // Access the error message directly
      } else {
        console.log('An error occurred'); // Handle other error scenarios if needed
      }
    }
  };
  

  const onSignup = async (event) => {
    event.preventDefault();
    console.log('signup');
    console.log(username, password);
    try {
     const response = await axios.post('http://localhost:3001/signup', {
        username,
        password
      })
      console.log(response)
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        console.log(error.response.data); // Access the error message directly
      } else {
        console.log('An error occurred'); // Handle other error scenarios if needed
      }
    }
  };

  return (
    <div className="page">
      <div className="header"></div>
      <div className="body">
        <h2>Please Log In or Create an Account</h2>
        <form className="signinForm" onSubmit={onLogin}>
          <label className="usernameLabel">
            Username:
            <input type="text" className="usernameText" onChange={(event) => setUsername(event.target.value)} />
          </label>
          <label className="passwordLabel">
            Password:
            <input type="text" className="passwordText" onChange={(event) => setPassword(event.target.value)} />
          </label>
          <div>
            <button type="submit" className="submitBox">Login</button>
            <button type="submit" className="submitBox" onClick={onSignup}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

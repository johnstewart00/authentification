import '../Login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

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
      localStorage.setItem("authenticated", true);
      navigate("/home");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        console.log(error.response.data); // Access the error message directly
      } else {
        console.log('An error occurred'); // Handle other error scenarios if needed
      }
    }
  };

  let handleSignup = () => {
    localStorage.setItem("signingup", true);
    navigate("/signup");
  }

  return (
    <div className="page">
      <div className="header"></div>
      <div className="body">
        <h2>Please Log In</h2>
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
            </div>
        </form>
        <h2>Don't have an account? </h2>
        <button onClick = {handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default Login;

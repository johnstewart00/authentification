import './Login.css';
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
      localStorage.setItem('firstName', response.data.firstName);
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
      <div className="login-header"></div>
      <div className="body">
        <h2>Please Log In</h2>
        <div className = "formBox">
            <form className="signinForm">
                <label className="LoginLabel">
                    Username:
                </label>
                <input type="text" className="LoginInput" onChange={(event) => setUsername(event.target.value)} />
                
                <label className="LoginLabel">
                    Password:
                </label>
                <input type="text" className="LoginInput" onChange={(event) => setPassword(event.target.value)} />
            </form>
            <div>
                <button type="submit" className="submitBox" onSubmit={onLogin} >Login</button>
            </div>
            <h2>Don't have an account? </h2>
            <div className = "signinWrapper">
                <button className = "signupButton" onClick = {handleSignup}>Sign Up</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

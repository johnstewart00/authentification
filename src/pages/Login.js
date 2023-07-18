import './Login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const [error, setError] = useState('');
  const onLogin = async (event) => {
    event.preventDefault();
    console.log('login');
    console.log(username, password);
    try {
      // Modify the login request in the onLogin function
      const response = await axios.get('https://authentificationapp-04ab233f11ff.herokuapp.com/login', {
        params: {
          username,
          password,
        //   key: 'a4452169-4524-456c-b5e2-ba51f355ec48'
        }
      });
      console.log(response);
      // Handle success case here
      localStorage.setItem("authenticated", 'true');
      localStorage.setItem('firstName', response.data.firstName);
      localStorage.setItem('lastName', response.data.lastName);
      localStorage.setItem('address', response.data.address);
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('gender', response.data.gender);
      navigate("/home");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        console.log(error.response.data); // Access the error message directly
        setError(error.response.data);
      } else {
        console.log('A weird error occurred'); // Handle other error scenarios if needed
      }
    }
  };

  let handleSignup = () => {
    localStorage.setItem("signingup", true);
    navigate("/signup");
  }

  return (
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
            <button type="submit" className="LoginButton" onClick={onLogin} >Login</button>
        </div>
        <div>
            {error}
        </div>
        <h2>Don't have an account? </h2>
        <div className = "signinWrapper">
            <button className = "signupButton" onClick = {handleSignup}>Sign Up</button>
        </div>
    </div>
    </div>

  );
}

export default Login;

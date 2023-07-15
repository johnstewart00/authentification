import axios from 'axios';
import './Signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

    const onSignup = async (event) => {
        event.preventDefault();
        console.log('signup');
        console.log(username, password);
        try {
         const response = await axios.post('http://localhost:3001/signup', {
            username,
            password,
            firstName, 
            lastName, 
            gender,
            address
          })
          console.log(response);
          localStorage.setItem("authenticated", true);
          localStorage.setItem("firstName", firstName);
          localStorage.setItem("lastName", lastName);
          localStorage.setItem("address", address);
          localStorage.setItem("gender", gender);
          localStorage.setItem("username", username);
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

    return (
        <div className = "signup">
            <h1 className="signup-header">Enter Your Information Below</h1>
            <form className="signupForm">
                <label className="FormLabel">
                    Username:
                </label>
                <input type="text" className="FormInput" onChange={(event) => setUsername(event.target.value)} />
                
                <label className="FormLabel">
                    Password:
                </label>
                <input type="text" className="FormInput" onChange={(event) => setPassword(event.target.value)} />
                
                <label className = "FormLabel">
                    First Name:
                </label>
                <input type = "text" className="FormInput" onChange = {(event) => setFirstName(event.target.value)} />
                
                <label className = "FormLabel">
                    Last Name:
                </label>
                <input type = "text" className="FormInput" onChange = {(event) => setLastName(event.target.value)} />
                
                <label className = "FormLabel">
                    Address:
                </label>
                <input type = "text" className="FormInput" onChange = {(event) => setAddress(event.target.value)} />
                
                <label className = "FormLabel">
                    Gender:
                </label>
                <input type = "text" className="FormInput" onChange = {(event) => setGender(event.target.value)} />               
             </form>
            <div className="submitWrapper">
                <button type="submit" className="signupButton" onClick={onSignup}>Sign Up</button>
            </div>
        </div>
    )
}
export default Signup
import axios from 'axios';
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
          localStorage.setItem("userInfo", {
            username, 
            password,
            firstName,
            lastName,
            address,
            gender
          })
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
        <div>
            <p>Enter Your Information Below</p>
            <form className="signupForm" >
                <label className="usernameLabel">
                    Username:
                    <input type="text" className="usernameText" onChange={(event) => setUsername(event.target.value)} />
                </label>
                <label className="passwordLabel">
                    Password:
                    <input type="text" className="passwordText" onChange={(event) => setPassword(event.target.value)} />
                </label>
                <label className = "firstNameLabel">
                    First Name:
                    <input type = "text" className="firstNameText" onChange = {(event) => setFirstName(event.target.value)} />
                </label>
                <label className = "LastNameLabel">
                    Last Name:
                    <input type = "text" className="LastNameText" onChange = {(event) => setLastName(event.target.value)} />
                </label>
                <label className = "addressLabel">
                    Address:
                    <input type = "text" className="addressText" onChange = {(event) => setAddress(event.target.value)} />
                </label>
                <label className = "genderLabel">
                    Gender:
                    <input type = "text" className="GenderText" onChange = {(event) => setGender(event.target.value)} />
                </label>
                <div>
                    <button type="submit" className="submitBox" onClick={onSignup}>Sign Up</button>
                </div>
             </form>
        </div>
    )
}
export default Signup
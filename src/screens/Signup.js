import axios from "axios";
import "../css/Signup.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../icons/backArrow.png";
import { useAuth } from "../AuthContext";

const Signup = () => {
  const {
    firstName,
    setFirstName,
    authenticated,
    setAuthenticated,
    lastName,
    setLastName,
    address,
    setAddress,
    username,
    setUsername,
    gender,
    setGender,
  } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authenticated) {
      navigate("/authentification/home");
    }
  }, [authenticated]);

  const goBack = () => {
    navigate("/authentification");
  };

  const onSignup = async (event) => {
    event.preventDefault();
    console.log("signup");
    console.log(username, password);
    try {
      const response = await axios.post(
        "https://authentificationapp-04ab233f11ff.herokuapp.com/signup",
        {
          username,
          password,
          firstName,
          lastName,
          gender,
          address,
        }
      );
      console.log(response);
      setAuthenticated(true);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        console.log(error.response.data); // Access the error message directly
      } else {
        console.log("An error occurred"); // Handle other error scenarios if needed
      }
    }
  };

  return (
    <div className="signup">
      <h1 className="signup-header">Enter Your Information Below</h1>
      <form className="signupForm">
        <label className="FormLabel">Username:</label>
        <input
          type="text"
          className="FormInput"
          onChange={(event) => setUsername(event.target.value)}
        />

        <label className="FormLabel">Password:</label>
        <input
          type="text"
          className="FormInput"
          onChange={(event) => setPassword(event.target.value)}
        />

        <label className="FormLabel">First Name:</label>
        <input
          type="text"
          className="FormInput"
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label className="FormLabel">Last Name:</label>
        <input
          type="text"
          className="FormInput"
          onChange={(event) => setLastName(event.target.value)}
        />

        <label className="FormLabel">Address:</label>
        <input
          type="text"
          className="FormInput"
          onChange={(event) => setAddress(event.target.value)}
        />

        <label className="FormLabel">Gender:</label>
        <input
          type="text"
          className="FormInput"
          onChange={(event) => setGender(event.target.value)}
        />
      </form>
      <div className="submitWrapper">
        <button type="submit">
          <img src={backArrow} height={15} width={15} onClick={goBack} />
        </button>
        <button
          type="submit"
          className="signupButton"
          height={40}
          onClick={onSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Signup;

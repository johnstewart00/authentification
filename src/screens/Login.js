import "../css/Login.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import MuiButton from "../components/MuiButtons";
import { Box } from "@mui/material";
import { Color } from "../components/Colors";
import MuiBox from "../components/MuiBox";

function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    username,
    setAuthenticated,
    setFirstName,
    setLastName,
    setGender,
    setUsername,
    setAddress,
  } = useAuth();
  const [error, setError] = useState("");
  const onLogin = async (event) => {
    event.preventDefault();
    console.log("login");
    console.log(username, password);
    try {
      // Modify the login request in the onLogin function
      const response = await axios.get(
        "https://authentificationapp-04ab233f11ff.herokuapp.com/login",
        {
          params: {
            username,
            password,
          },
        }
      );
      console.log(response);
      setAuthenticated(true);
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setAddress(response.data.lastName);
      setGender(response.data.gender);
      navigate("/authentification/home");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        console.log(error.response.data); // Access the error message directly
        setError(error.response.data);
      } else {
        console.log("A weird error occurred"); // Handle other error scenarios if needed
      }
    }
  };

  let handleSignup = () => {
    localStorage.setItem("signingup", true);
    navigate("/authentification/signup");
  };

  return (
    <div style={{ backgroundColor: Color.green }} className="body">
      <MuiBox
        maxHeight={475}
        marginTop={6}
        padding={4}
        boxShadow={15}
        borderRadius={5}
        content={
          <>
            <h2
              style={{
                textAlign: "center",
                color: Color.black,
              }}
              className="h2"
            >
              Please Log In
            </h2>
            <MuiBox
              minWidth={470}
              minHeight={330}
              maxHeight={375}
              margin={0}
              content={
                <>
                  <ul className="signinForm">
                    <li className="li">
                      <label>Username:</label>
                      <input
                        type="text"
                        onChange={(event) => setUsername(event.target.value)}
                      />
                    </li>
                    <li className="li">
                      <label>Password:</label>
                      <input
                        type="text"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </li>
                    <li className="li">
                      <MuiButton
                        variant="contained"
                        className="LoginButton"
                        onClick={onLogin}
                        title="Login"
                        margin={0}
                        marginTop={0}
                        backgroundColor={Color.tangerineYellow}
                        color={Color.black}
                      />
                    </li>
                  </ul>
                  <div className="errorWrapper">
                    <div className="errorContainer">{error}</div>
                  </div>
                  <h2 style={{ fontFamily: "Georgia" }}>
                    Don't have an account?
                  </h2>
                  <div className="signinWrapper">
                    <MuiButton
                      variant="outlined"
                      size="small"
                      className="signupButton"
                      onClick={handleSignup}
                      title="Sign up"
                    />
                  </div>
                </>
              }
            />
          </>
        }
      />
    </div>
  );
}

export default Login;

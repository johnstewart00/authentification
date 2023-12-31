import axios from "axios";
import "../css/Signup.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { RadioGroup } from "@mui/material";
import { Color } from "../components/Colors";
import MuiButton from "../components/MuiButtons";
import { Icons } from "../icons/materialIcons";
import MuiBox from "../components/MuiBox";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, FormLabel } from "@mui/material";

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
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (authenticated) {
      navigate("/authentification/home");
    }
  }, [authenticated]);

  const goBack = () => {
    navigate("/authentification");
  };

  const toLogin = () => {
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
    } catch (Error) {
      console.log(Error);
      setHasError(true);
      if (Error.response && Error.response.data) {
        console.log(Error.response.data); // Access the error message directly
        setError(Error.response.data);
      } else {
        console.log("An error occurred"); // Handle other error scenarios if needed
      }
    }
  };

  return (
    <div className="signup" style={{ backgroundColor: Color.green }}>
      <MuiBox
        maxWidth="sm"
        maxHeight={480}
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow={12}
        borderRadius={5}
        backgroundColor={Color.white}
        content={
          <>
            <h1 className="signup-header">Enter Your Information Below</h1>
            <form className="signupForm" style={{ width: 500 }}>
              <label className="FormLabel">Username:</label>
              <input
                type="text"
                className="FormInput"
                onChange={(event) => setUsername(event.target.value)}
                boxShadow={15}
              />

              <label className="FormLabel">Password:</label>
              <input
                type="password"
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

              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: 500,
                  justifyContent: "center",
                }}
              >
                <FormLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 5,
                    color: Color.black,
                  }}
                >
                  Gender:
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </form>
            {hasError ? (
              <MuiBox margin={0} minWidth={400} content={<h3>{error}</h3>} />
            ) : null}
            <div className="submitWrapper">
              <MuiButton
                variant="outlined"
                icon={Icons.ArrowBackBlack}
                onClick={toLogin}
                color={Color.black}
              />
              <MuiButton
                onClick={onSignup}
                title="Sign Up"
                variant="contained"
                backgroundColor={Color.tangerineYellow}
                color={Color.black}
              />
            </div>
          </>
        }
      />
    </div>
  );
};
export default Signup;

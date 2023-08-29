import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../css/Home.css";
import MuiButton from "../components/MuiButtons";
import { Color } from "../components/Colors";
import { Box } from "@mui/material";
import MuiBox from "../components/MuiBox";

const Home = (props) => {
  const { firstName, authenticated, setAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      console.log("authenticated");
    }
  });

  useEffect(() => {
    if (!authenticated) {
      navigate("/authentification");
    }
  }, [authenticated, navigate, setAuthenticated]);

  let handleClick = () => {
    setAuthenticated(false);
  };
  return (
    <div
      className="homeBody"
      style={{
        backgroundColor: Color.green,
        display: "flex",
      }}
    >
      <MuiBox
        maxWidth={900}
        maxHeight={155}
        backgroundColor={Color.white}
        content={
          <>
            <h1 className="welcome">{firstName}, welcome to your dashboard</h1>
            <MuiButton
              variant="contained"
              onClick={handleClick}
              className="signoutButton"
              title="SIGN OUT"
              backgroundColor={Color.tangerineYellow}
              color={Color.black}
            />
          </>
        }
      />
    </div>
  );
};

export default Home;

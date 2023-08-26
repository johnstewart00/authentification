import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../css/Home.css";

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
      setAuthenticated(false);
      navigate("/authentification");
    }
  }, [authenticated, navigate, setAuthenticated]);

  let handleClick = () => {
    setAuthenticated(false);
  };
  return (
    <div className="homeBody">
      <h1 className="welcome">{firstName}, welcome to your dashboard</h1>
      <a to="/login" className="linkTag">
        <button onClick={handleClick} className="signoutButton">
          Sign Out
        </button>
      </a>
    </div>
  );
};

export default Home;

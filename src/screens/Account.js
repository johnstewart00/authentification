import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Account.css";
import { useAuth } from "../AuthContext";

const Account = () => {
  const {
    firstName,
    lastName,
    username,
    gender,
    address,
    authenticated,
    setAuthenticated,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Authenticated is: ", authenticated);
    if (!authenticated && authenticated !== undefined) {
      navigate("/authentification");
    }
  }, [authenticated]);

  let handleClick = () => {
    setAuthenticated(false);
  };

  return (
    <div>
      <div className="accountPage">
        <h1 className="accountHeader">These are your account details</h1>
        <div className="accountDetailsGrid">
          <p className="description">First Name: </p>
          <p className="item">{firstName}</p>
          <p className="description">Last Name: </p>
          <p className="item">{lastName}</p>
          <p className="description"> Address: </p>
          <p className="item">{address}</p>
          <p className="description">Username: </p>
          <p className="item">{username}</p>
          <p className="description">Gender: </p>
          <p className="item">{gender}</p>
        </div>
        <a to="/login" className="linkTag">
          <button onClick={handleClick} className="signoutButton">
            Sign Out
          </button>
        </a>
      </div>
    </div>
  );
};

export default Account;
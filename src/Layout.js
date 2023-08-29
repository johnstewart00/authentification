import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/Layout.css";
import { useAuth } from "./AuthContext";
import MuiButton from "./components/MuiButtons";
const Layout = () => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/authentification/signup");
  };
  const handleHomeClick = () => {
    navigate("/authentification/home");
  };
  const handleAccountClick = () => {
    navigate("/authentification/account");
  };
  return (
    <>
      <nav>
        <div className="header">
          {authenticated ? (
            <>
              <MuiButton
                variant="outlined"
                onClick={handleHomeClick}
                title="Home"
              />

              <MuiButton
                variant="outlined"
                onClick={handleAccountClick}
                title="Account Details"
              />
            </>
          ) : null}
          {!authenticated ? (
            <MuiButton
              variant="outlined"
              onClick={handleSignupClick}
              title="Sign up"
            />
          ) : null}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;

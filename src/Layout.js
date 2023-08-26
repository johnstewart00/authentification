import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/Layout.css";
import { useAuth } from "./AuthContext";
const Layout = () => {
  const { authenticated } = useAuth();
  return (
    <>
      <nav>
        <div className="header">
          {authenticated ? (
            <>
              <Link to="/authentification/home" className="link">
                Home
              </Link>
              <Link to="/authentification/account" className="link">
                Account Details
              </Link>
            </>
          ) : null}
          {!authenticated ? (
            <Link to="/authentification/signup" className="link">
              Sign up
            </Link>
          ) : null}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;

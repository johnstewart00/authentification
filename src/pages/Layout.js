import { Outlet, Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css";
const Layout = () => {
    return (
        <>
            <nav>
                <div className = "header">
                    <Link to="/home" className = "link" >Home</Link>
                    <Link to="/account" className = "link" >Account Details</Link>
                    <Link to="/signup" className = "link" >Sign up</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
 };

export default Layout;
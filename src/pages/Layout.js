import { Outlet, Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css";
const Layout = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState('false')
    useEffect (() => {
        let temp = localStorage.getItem("authenticated");
        console.log('temp is: ', temp)
        if(temp == "true"){
            setLoggedIn(true);
            navigate("/home")
        } else {
            navigate("/authentification");    
        }
    }, [localStorage.getItem("authenticated")])  
    
    console.log('logged in here is: ',loggedIn)
    if(loggedIn) {
        return (
            <>
                <nav>
                    <div className = "header">
                        <Link to="/home" className = "link" >Home</Link>
                        <Link to="/account" className = "link" >Account Details</Link>
                    </div>
                </nav>
                <Outlet />
            </>
        )
    } else {
        return (
            <>
                <nav>
                    <div className = "header">
                        <Link to="/signup" className = "link" >Sign up</Link>
                    </div>
                </nav>
                <Outlet />
            </>
        )
    }
};

export default Layout;
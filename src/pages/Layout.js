import { Outlet, Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css"
const Layout = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState('false')
    useEffect (() => {
        let temp = localStorage.getItem("authenticated");
        console.log('temp is: ', temp)
        if(temp == "true"){
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
            temp = localStorage.getItem('signingup');
            if(temp != "true") {
                navigate("/login");
            }     
        }
    }, [localStorage.getItem("authenticated")])  
    
    console.log('logged in here is: ',loggedIn)
    if(loggedIn) {
        return (
            <>
            <nav>
                <ul>
                    <div className = "header">
                        <Link to="/">Home</Link>
                    </div>
                    <div className = "header">
                        <Link to="/Account">Account Details</Link>
                    </div>
                </ul>
            </nav>
        
            <Outlet />
            </>
        )
    } else {
        return (
            <>
            <nav>
                <ul>
                    <div className = "header">
                        <Link to="/signup">Sign up</Link>
                    </div>
                </ul>
            </nav>
        
            <Outlet />
            </>
        )
    }
};

export default Layout;
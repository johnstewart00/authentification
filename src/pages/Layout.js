import { Outlet, Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Account">Account Details</Link>
                    </li>
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
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
            </nav>
        
            <Outlet />
            </>
        )
    }
};

export default Layout;
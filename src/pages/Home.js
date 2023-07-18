import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const [firstName, setFirstName] = useState('');
    const navigate = useNavigate();
    const [logIn, setLogIn] = useState(true);

    useEffect(() => {
        const temp = localStorage.getItem("authenticated");
        if(temp == "true"){
            setLogIn(true);
        } else {
            setLogIn(false);
        }
        console.log('logIn in Home is: ',logIn);
        setFirstName(localStorage.getItem("firstName"));
    });

    useEffect(() => {
        if(!logIn) {
            localStorage.setItem("authenticated", false);
            navigate("/authentification");
        }
    }, [logIn]);

    let handleClick = () => {
        console.log('in handleClick')
        setLogIn(false);
    }
    return (
    <div className = "homeBody" >
        <h1 className = "welcome">{firstName}, welcome to your dashboard</h1>
        <a to="/login" className = "linkTag">
            <button onClick = {handleClick} className = "signoutButton">Sign Out</button>
        </a>
    </div> );
}
  
  export default Home;
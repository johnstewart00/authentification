import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
    const [firstName, setFirstName] = useState('');
    const navigate = useNavigate();
    const [logIn, setLogIn] = useState(true);
    useEffect(() => {
        console.log('logIn in Home is: ',logIn);
        setFirstName(localStorage.getItem("firstName"));
        if(!logIn) {
            localStorage.setItem("authenticated", false);
            navigate("/login")
        }
    }, [logIn])
    let handleClick = () => {
        console.log('in handleClick')
        setLogIn(false);
    }
    return (
    <div>
        <p>Welcome to your Dashboard {firstName}</p>
        <a to="/login">
            <button onClick = {handleClick}>Sign Out</button>
        </a>
    </div> );
}
  
  export default Home;
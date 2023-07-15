import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
    const [username, setusername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [gender, setGender] = useState();
    const [logIn, setLogIn] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setusername(localStorage.getItem('username'));
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setAddress(localStorage.getItem('address'));
        setGender(localStorage.getItem('gender'));
    })

    useEffect(() => {
        console.log('logIn in Account Details is: ',logIn);
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
        <div className = 'accountPage'>
            <h1 className = 'accountHeader'>These are your account details</h1>
            <div className = "accountDetailsGrid">
                <p className = "description">First Name:  </p>
                <p className = "item">{firstName}</p>
                <p className = "description">Last Name: </p>
                <p className = "item">{lastName}</p>
                <p className = "description"> Address: </p>
                <p className = "item">{address}</p>
                <p className = "description">Username: </p>
                <p className = "item">{username}</p>
                <p className = "description">Gender: </p>
                <p className = "item">{gender}</p>
            </div>
            <a to="/login" className = "linkTag">
                <button onClick = {handleClick} className = "signoutButton">Sign Out</button>
            </a>
        </div>
    </div> );
}
  
  export default Account;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Account.css";
import { useAuth } from "../AuthContext";
import MuiButton from "../components/MuiButtons";
import { Icons } from "../icons/materialIcons";
import { Color } from "../components/Colors";
import MuiBox from "../components/MuiBox";

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
    if (!authenticated) {
      navigate("/authentification");
    }
  }, [authenticated]);

  let handleClick = () => {
    setAuthenticated(false);
  };
  const toHome = () => {
    navigate("/authentification/home");
  };

  return (
    <div className="accountPage" style={{ backgroundColor: Color.green }}>
      <MuiBox
        backgroundColor={Color.white}
        maxWidth={600}
        maxHeight={500}
        content={
          <>
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
            <div className="callToActionRow">
              <MuiButton
                variant="contained"
                backgroundColor={Color.tangerineYellow}
                icon={Icons.ArrowBackBlack}
                onClick={toHome}
              />

              <MuiButton
                variant="contained"
                onClick={handleClick}
                className="AccountButton"
                title="SIGN OUT"
                backgroundColor={Color.tangerineYellow}
                color={Color.black}
              />
            </div>
          </>
        }
      />
    </div>
  );
};

export default Account;

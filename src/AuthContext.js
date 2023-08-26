import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [authenticated, setAuthenticated] = useState();
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");

  return (
    <AuthContext.Provider
      value={{
        firstName,
        setFirstName,
        authenticated,
        setAuthenticated,
        lastName,
        setLastName,
        address,
        setAddress,
        username,
        setUsername,
        gender,
        setGender,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

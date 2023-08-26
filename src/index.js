import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Account from "./screens/Account";
import Signup from "./screens/Signup";
import { AuthProvider } from "./AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/authentification" index element={<Login />} />
            <Route path="/authentification/home" element={<Home />} />
            <Route path="/authentification/account" element={<Account />} />
            <Route path="/authentification/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

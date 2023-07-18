import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Signup from "./pages/Signup"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path = "/authentification" index element={<Login />} />
          <Route path="/authentification/home" element={<Home />} />
          <Route path = "/authentification/account" element = {<Account />} />
          <Route path = "/authentification/signup" element = {<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
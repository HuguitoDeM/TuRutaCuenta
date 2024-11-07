import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import Login from "../components/login/Login";
import HomePostLogin from "../components/homePostLogin/HomePostLogin";
import Searches from "../components/searches/searches";

export const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePostLogin />} />
        <Route path="/busquedas" element={<Searches />} />
      </Routes>
    </Router>
  );
};

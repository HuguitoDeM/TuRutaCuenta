import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import Login from "../components/login/Login";
import HomePostLogin from "../components/homePostLogin/HomePostLogin";
import ModelOne from "../components/typesOfPost/ModelOne";
import Searches from "../components/searches/Searches";
import ModelTwo from "../components/typesOfPost/ModelTwo";

export const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePostLogin />} />
        <Route path="/busquedas" element={<Searches />} />
        <Route path="/post1" element={<ModelOne />} />
        <Route path="/post2" element={<ModelTwo />} />
      </Routes>
    </Router>
  );
};

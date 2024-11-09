import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import Login from "../components/login/Login";
import HomePostLogin from "../components/homePostLogin/HomePostLogin";

import Searches from "../components/searches/Searches";

import ModelFour from "../components/typesOfPost/modelFour/ModelFour";
import { NewPost } from "../components/newPost/NewPost";
import ModelOne from "../components/typesOfPost/modelOne/ModelOne";
import ModelTwo from "../components/typesOfPost/modelTwo/ModelTwo";
import ModelThree from "../components/typesOfPost/modelThree/ModelThree";

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
        <Route path="/post3" element={<ModelThree />} />
        <Route path="/post4" element={<ModelFour />} />
        <Route path="new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
};

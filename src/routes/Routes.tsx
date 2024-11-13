import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import Login from "../components/login/Login";
import HomePostLogin from "../screens/HomePostLogin";
import Searches from "../screens/Searches";
import ModelFour from "../components/typesOfPost/modelFour/ModelFour";
import { NewPost } from "../screens/NewPost";
import ModelTwo from "../components/typesOfPost/modelTwo/ModelTwo";
import ModelThree from "../components/typesOfPost/modelThree/ModelThree";
import Register from "../components/register/Register";
import UserSetting from "../screens/UserSetting";
import ProtectedRoute from "./ProtectedRoute";
import NewPostEdit from "../components/typesOfPost/NewPost/NewPostEdit";

export const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePostLogin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/busquedas"
          element={
            <ProtectedRoute>
              <Searches />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-post"
          element={
            <ProtectedRoute>
              <NewPost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <UserSetting />
            </ProtectedRoute>
          }
        />
        <Route path="/post1" element={<NewPostEdit id="1" />} />
        <Route path="/post2" element={<ModelTwo />} />
        <Route path="/post3" element={<ModelThree />} />
        <Route path="/post4" element={<ModelFour />} />
      </Routes>
    </Router>
  );
};

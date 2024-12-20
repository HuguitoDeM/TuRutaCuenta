import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import Login from "../components/login/Login";
import HomePostLogin from "../screens/HomePostLogin";
import Searches from "../screens/Searches";
import { NewPost } from "../screens/NewPost";
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
        <Route path="/post/:id" element={<NewPostEdit />} />
      </Routes>
    </Router>
  );
};

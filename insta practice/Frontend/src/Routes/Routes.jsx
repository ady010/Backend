import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../views/Register/Register";
import Login from "../views/Login/Login";
import Profile from "../views/Profile/profile";
import Protected from "../Components/Protected";
import Post from "../views/Posts/Post";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Protected><Profile/></Protected>}/>
        <Route path="/posts" element={<Post/>}/>
      </Routes>
    </Router>   
  );  
};

export default AppRoutes;

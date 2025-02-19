import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../views/Register/Register";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

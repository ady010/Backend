import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "../Pages/home";

const Approutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default Approutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../views/Register/Register";
import Profile from "../views/Profile/profile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

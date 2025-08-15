import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddPassword from "./components/AddPassword";
import ViewPassword from "./components/ViewPassword";
import UpdatePassword from "./components/Updatepassword";
import PasswordDetailpage from "./components/PasswordDetailpage";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/view-passwords" element={<ViewPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-password" element={<AddPassword />} />
        <Route path="/updatepassword/:id" element={<UpdatePassword />} />
        <Route path="/updatepassword/:id" element={<UpdatePassword />} />
        <Route path="/viewpassword/:id" element={<PasswordDetailpage />} />

      </Routes>
    </Router>
  );
};
export default App;

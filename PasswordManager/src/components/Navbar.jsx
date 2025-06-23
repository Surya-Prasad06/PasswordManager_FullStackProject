import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
   <div
  style={{
    display: "flex",
    alignItems: "center",
    padding: "16px 24px",
    justifyContent: "space-between",
    fontFamily: "fantasy",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ccc",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  }}
>
  <Link
    style={{
      textDecoration: "none",
      color: "#000",
      fontSize: "1.1rem",
      fontFamily:"revert",
      marginRight: "16px"
    }}
    to="/"
  >
    <span style={{ color:"red" , fontFamily:"cursive"}}>Password</span> Manager
  </Link>

  <Link
    style={{
      textDecoration: "none",
      color: "#28a745",
      fontSize: "1.1rem",
      marginRight: "16px"
    }}
    to="/add-password"
  >
<button className="animated-button">
  <span> Add Password</span>
  <span></span>
</button>

   
  </Link>

  <Link
    style={{
      textDecoration: "none",
      color: "#17a2b8",
      fontSize: "1.1rem"
    }}
    to="/view-passwords"
  >
<button className="animated-button">
  <span>View Password</span>
  <span></span>
</button>

    
  </Link>
</div>

  );
};

export default Navbar;
 
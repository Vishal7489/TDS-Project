import React from 'react'
import "../Styles/Navbar.css"
import { useNavigate } from 'react-router-dom';
import img1 from "../assests/image1.png"


const Navbar = () => {

const navigate = useNavigate();

const handleButton5Click = () => {
navigate('/LoginSection'); // This navigates to the About page
};

  return (
  <div className="Navbar_Main">
  <div className="Navbar">
   <div className="NavbarHeading">
   <div>
  <img src={img1} alt="random-image" className="Nav-image"/> 
  </div>
  <div>
  <h1 className="Navbar_Heading">TDS Academy</h1>
  </div>
   </div>
   <div className="NavbarHeading1">
   <button className="Button" onClick={handleButton5Click} >Login</button>
   <button className="Button1">Sign-up</button>
   </div>
  </div>
  </div>


  )
}

export default Navbar
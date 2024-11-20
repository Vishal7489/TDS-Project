import React from 'react'
import "../Styles/Navbar.css"
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

const navigate = useNavigate();

const handleButton5Click = () => {
navigate('/LoginSection'); // This navigates to the About page
};

  return (
    <div className="Navbar_Main">
     <div className="Navbar">
     <img src="https://analytics-vidhya.vercel.app/images/v920-kul-65.jpg" alt="random-image" className="Nav-image"/> 
     <div className="Navbar_button">
     <h1 className="Navbar_Heading">TDS Academy</h1>
     <div>
      <button className="Button"  onClick={handleButton5Click} >Login</button>
      <button className="Button1">Sign-up</button>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Navbar
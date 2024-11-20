import React from 'react'
import "../Styles/Footer.css"
import { FaSquareInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer= () => {
  return (
    <div className="Footer">

    <div className="Footer_Main">
     <div className="Footer3">
     <h2 className="Footer_Heading">Follow us on social media</h2>
     </div >
    <div className="Footer1">
    <div  className="Footer2">
    <FaSquareInstagram className="Footer_img"/>
    </div>
    <div className="Footer2">
    <SiFacebook  className="Footer_img"/>
    </div>
    <div className="Footer2">
    <FaLinkedin  className="Footer_img" />
    </div>
    <div className="Footer2">
    <IoLogoYoutube  className="Footer_img"/>
    </div>
    </div>
   </div>
    </div>
  )
}

export default Footer
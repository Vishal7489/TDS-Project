import React from 'react'
import "../Styles/DataScience.css"
import AboutCourse from "./AboutCourse.jsx"
import { useNavigate } from 'react-router-dom';



const DataScience = () => {

  const navigate = useNavigate();

  const handleButton4Click = () => {
  navigate('/PaymentSection'); // This navigates to the About page
  };



 return (
<div className="DataScience">
<div className="Python1">
<div className="Python2">
<h1 className="Python3">Data Analytics </h1>
<p className="Python_4">✅ In depth High Quality Videos</p>
<p className="Python4_1">✅ Project Based Learning</p>
<p className="Python4_2">✅ Assignments/Projects</p>
<p className="Python4_3">✅ Premium community of Engineers</p>
<p className="Python4_4">✅ Course Certificate</p>
<h2 id="course_price">
₹<span id="course_actualprice">45000</span><span> + GST ₹ <span id="course_estimationprice">60000</span></span>
</h2>
<button className="course_button" onClick={handleButton4Click}>Enroll Now</button>
</div>
  
<div className="Python5">
<img src="https://analytics-vidhya.vercel.app/images/data_analytics.jpg" alt="random-image" className="python-image"/>
</div>
</div>



<div>
<AboutCourse/>
</div>


</div>
  )
}

export default DataScience
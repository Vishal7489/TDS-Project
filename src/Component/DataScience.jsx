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
<h1 className="Data_Heading">Data Analytics </h1>
<p className="Data">✅ In depth High Quality Videos</p>
<p className="Data1">✅ Project Based Learning</p>
<p className="Data2">✅ Assignments/Projects</p>
<p className="Data3">✅ Premium community of Engineers</p>
<p className="Data4">✅ Course Certificate</p>
<h2 id="Data_price">
₹<span id="Data_actualprice">4500</span><span> + GST ₹ <span id="course_estimationprice">6000</span><span id="Slash">------</span>    </span>
</h2>
<button className="Data_Button"onClick={handleButton4Click} >Enroll Now</button>
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
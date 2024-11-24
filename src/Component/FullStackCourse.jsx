import React,{useEffect} from 'react'
import AboutFullStack from "./AboutFullStack.jsx"
import { useNavigate } from 'react-router-dom';



const FullStackCourse = () => {
useEffect(() => {
    // Scroll to the middle of the page when it loads
    const scrollableDiv = document.documentElement || document.body;
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight / 2.46; // Scroll to the middle
  }, []);

  const navigate = useNavigate();

  const handleButton4Click = () => {
  navigate('/PaymentSection'); // This navigates to the About page
  };



return (
<div className="Python">
<div className="Python1">
<div className="Python2">
<h1 className="Python3"> Full Stack Developer   </h1>
<p className="Python_4">✅ In depth High Quality Videos</p>
<p className="Python4_1">✅ Project Based Learning</p>
<p className="Python4_2">✅ Assignments/Projects</p>
<p className="Python4_3">✅ Premium community of Engineers</p>
<p className="Python4_4">✅ Course Certificate</p>
<h2 id="course_price">
₹<span id="course_actualprice"></span>5500<span> + GST ₹ <span id="course_estimationprice">8000</span></span>
</h2>
<button className="course_button" onClick={handleButton4Click}  >Enroll Now</button>
</div>
  
<div className="Python5">
<img src="https://analytics-vidhya.vercel.app/images/SQL.jpg" alt="random-image" className="python-image"/>
</div>
</div>

<div>
<AboutFullStack/>
</div>
</div>



  )
}

export default FullStackCourse
import React from 'react'
import "../Styles/Service.css"
import { useNavigate } from 'react-router-dom';

const Service = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/DataScience'); // This navigates to the About page
  };
  
  const handleButton2Click = () => {
    navigate('/PythonCourse'); // This navigates to the About page
  };

  const handleButton3Click = () => {
    navigate('/FullStackCourse'); // This navigates to the About page
  };

return (
 <div className="Service">
 <div className="Service_Upper_Heading">
 <h1 className="Service10">Start your AI journey</h1>
 <h3>Quickstart with our highly rated courses<br/> in AI, ML and data science</h3>
  </div>

    <div className="Service3">
      <div className="Service4">
        <img src="https://analytics-vidhya.vercel.app/images/data_analytics.jpg" alt="random-image" className="image_Service"/>
        <h2 className="Service_Heading">Data Analytics</h2>
        <h6 className="Service_para">Unlock the power of data with our comprehensive<br/>
        Data Analytics designed to equip you<br/>
        with essential skills for extracting insights<br/>
         and making informed decisions.</h6>
         <div className="Service6">
          <h4 className="Service5">Python</h4>
          <h4 className="Service5">Pandas</h4>
          <h4 className="Service8">Data Visualization</h4>
        </div>
        <div>
         <button className="Enroll"  onClick={handleButtonClick}  >Enroll Now</button> 
        </div>
        </div>  
       
      <div className="Service4">

      <img src="https://analytics-vidhya.vercel.app/images/Python.jpg" alt="random-image" className="image_Service"/>
        <h2 className="Service_Heading">Python for Data Science</h2>
        <h6 className="Service_para">Unlock the power of data with our comprehensive<br/>
        Data Analytics designed to equip you<br/>
        with essential skills for extracting insights<br/>
         and making informed decisions.</h6>
         <div className="Service6">
          <h4 className="Service5">Python</h4>
          <h4 className="Service5">Pandas</h4>
          <h4 className="Service8">Data Visualization</h4>
        </div>
        <div>
         <button className="Enroll"  onClick={handleButton2Click}  >Enroll Now</button> 
        </div>

      </div>
      <div className="Service4">
       <img src="https://analytics-vidhya.vercel.app/images/SQL.jpg" alt="random-image" className="image_Service"/>
        <h2 className="Service_Heading">Basics of SQL</h2>
        <h6 className="Service_para">Master the fundamentals of SQL with our<br/>
          comprehensive course designed to teach<br/>
          you database querying, management, and manipulation
        </h6>
         <div className="Service6">
          <h4 className="Service5">Python</h4>
          <h4 className="Service5">Pandas</h4>
          <h4 className="Service8">Data Visualization</h4>
        </div>
        <div>
         <button className="Enroll"  onClick={handleButton3Click}  >Enroll Now</button> 
        </div>

      </div>
    </div>


 </div>
  )
}

export default Service
import React from 'react'
import "../Styles//AboutCourse.css"

const AboutCourse = () => {
  return (
    <div className="AboutCourse">
    <div>
    <p className="Course_Heading">Who is the Data Analytics Fundamentals<br/> Course for?</p>
    </div>
    <div className="Course">
      <p><h5 className="Course_para1" >This course is for anyone who:</h5></p>  
      <ul className="Course_para_section">
      <li className="Course_para">Wants to learn the fundamentals of data analytics</li>
      <li className="Course_para">Wants to develop or enhance their data analysis skills, from beginner to<br/>
         intermediate levels</li>
      <li className="Course_para" >Is looking to master data analysis techniques from basic to advanced</li>
      <li className="Course_para">Wants to start their journey into business analytics or data science</li>
      </ul>
    </div>
     <div>
     <h1 className="Course2">What do you need to get started with the <br/>
        Fundamental of Data Analytics</h1>
     </div>
     <div className="Course3">
        <h3 className="Course4">Here’s what you’ll need:</h3>
        <ul className="Course6">
        <li className="Course5">A working laptop/desktop with 4 GB RAM</li>
        <li className="Course5">A working Internet connection</li>
        <li className="Course5">Microsoft Excel installed on your machine</li>
        </ul>
     </div>


     <div className="course_curriculam">
     <h1 className="curriculam">Course curriculum</h1>
     <h2 className="curriculam_Heading">Full Stack Developer</h2>
     <div>
      <h2 className="curriculam_para1">1     Module 1 Basics of Data Analytics</h2>
      <h2 className="curriculam_para2">2   Module 2 Packages and Libraries</h2>
      <h2 className="curriculam_para3">3   Module 3 SQL</h2>
      <h2 className="curriculam_para4">4   Module 4 Power Bi</h2>
      <h2 className="curriculam_para5">5   Module 5 Advance Microsoft Excel</h2>
     </div>
     </div>




    </div>
  )
}

export default AboutCourse
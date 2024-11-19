import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from "./Component/Navbar.jsx"
import Header from "./Component/Header.jsx"
import About from "./Component/About.jsx"
import Service from "./Component/Service.jsx"
import Footer from "./Component/Footer.jsx"
import DataScience from "./Component/DataScience.jsx"
import PythonCourse from "./Component/PythonCourse.jsx"
import FullStackCourse from "./Component/FullStackCourse.jsx"
import PaymentSection from "./Component/PaymentSection.jsx"

const App = () => {
  return (
  <>
  <Navbar/>
  <Header/>
  <About/>
  <Router>
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/DataScience" element={<DataScience/>} />
        <Route path="/PythonCourse" element={<PythonCourse/>} />
        <Route path="/FullStackCourse" element={<FullStackCourse/>}/>
        <Route path="/PaymentSection" element={<PaymentSection/>}/>
      </Routes>
    </Router>
  <Footer/>
  </>
  )
}

export default App
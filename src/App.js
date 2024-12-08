import React from 'react'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Component/Navbar.jsx"
import Header from "./Component/Header.jsx"
import About from "./Component/About.jsx"
import Service from "./Component/Service.jsx"
import Footer from "./Component/Footer.jsx"
import DataScience from "./Component/DataScience.jsx"
import PythonCourse from "./Component/PythonCourse.jsx"
import FullStackCourse from "./Component/FullStackCourse.jsx"
import PaymentSection from "./Component/PaymentSection.jsx"
import LoginSection from "./Component/LoginSection.jsx"

const App = () => {
  return (
    <Router>
    <>
    <Navbar />
    <Routes>
    <Route path="/LoginSection" element={<LoginSection/>} /> {/* Login page route */}
    </Routes>
    <Header />
    <About />
    <div>
    <Routes  className="scrollable-content"   >
    <Route path="/" element={<Service />} />
    <Route path="/DataScience" element={<DataScience />} />
    <Route path="/PythonCourse" element={<PythonCourse />} />
    <Route path="/FullStackCourse" element={<FullStackCourse />} />
    <Route path="/PaymentSection" element={<PaymentSection />} />
    </Routes>
    </div>
    <Footer />
    </>
  </Router>
  )
}

export default App
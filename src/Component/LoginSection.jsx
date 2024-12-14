import React from 'react';
import "../Styles/LoginSection.css";
import {Link} from "react-router-dom";

const LoginSection = () => {

    const login = async () => {
        try {
          var inputEmailValue = document.getElementById("email_area").value;
          var inputPasswordValue = document.getElementById("password_area").value;
      
          let body = {
            email: inputEmailValue,
            password: inputPasswordValue,
          };
      
          const response = await fetch("https://shortit-iota.vercel.app/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
      
          const loginData = await response.json();
      
          if (loginData.statusCode === 200) {
            localStorage.setItem("token", loginData.token);
            window.location.href = "https://analytics-vidhya.vercel.app/studentDashboard.html";
          } else if (loginData.statusCode === 400) {
            alert(loginData.message);
          }
        } catch (error) {
          console.error("Login failed:", error);
          alert("An unexpected error occurred. Please try again.");
        }
      };
      








return (
    <div className="Login">
    <div className="login-container">
     <Link to="/LoginSection">
    <h2>Login</h2>
    </Link>
    <form action="#" method="post">
        <input type="email" className="input-field" placeholder="Email" required/><br/>
        <input type="password" className="input-field" placeholder="Password" required/><br/>
        <button type="submit" className="login-btn">Login</button>
    </form>
</div>
</div>
)
}

export default LoginSection
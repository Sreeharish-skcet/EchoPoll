import React from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate=useNavigate();
   const handleClick=(path)=>()=>{
      navigate(path)
   }

  return (
    <div className='sphere'>
      <div className="login-container">
        <h2>LOGIN</h2>
        <form action="/login" method="POST">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" onClick={handleClick('/userdashboard')} className="loginbutton" >Login</button>
        </form>
        <br>
        </br>
      </div>
      <div>
    <h2 className="textcolorlogin">If you dont have an account</h2>
    <button onClick={handleClick('/signup')} className="loginbutton">Sign Up</button>
    </div>
    </div>
  );
}

export default Login;
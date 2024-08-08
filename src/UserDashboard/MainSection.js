import React from 'react';
import './MainSection.css';
import { useNavigate } from 'react-router-dom';

const MainSection = () => {
  const navigate=useNavigate();
  const handleClick=(path)=>()=>{
    navigate(path);
  }
  return (
    <section className="main-section">
      <div className="intro-text">
        <h1>It's all coming together</h1>
        <p>Create your own survey and polling at ease</p>
        <button className="sign-up-free" onClick={handleClick('/main')}>+ Create </button>
  
      </div>
      
      <div className="intro-image">
        <img src="https://img.freepik.com/free-vector/gradient-feedback-concept-illustration_23-2148952083.jpg?ga=GA1.1.675451979.1721727707&semt=ais_hybrid" alt="Financial Overview" />
      </div>
    </section>
  );
};

export default MainSection;

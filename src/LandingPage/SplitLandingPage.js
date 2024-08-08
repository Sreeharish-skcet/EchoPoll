import React from 'react';
import './landing.css';
import { useNavigate } from 'react-router-dom';

const SplitLandingPage = () => {
  const handleMouseEnter = (direction) => {
    const container = document.querySelector('.tcontainer');
    container.classList.add(`hover-${direction}`);
  };

  const handleMouseLeave = (direction) => {
    const container = document.querySelector('.tcontainer');
    container.classList.remove(`hover-${direction}`);
  };
  const navigate=useNavigate();
  const handleClick=(path)=>()=>{
    navigate(path);
  }

  return (
    <div className="tcontainer">
      <div
        className="split left"
        onMouseEnter={() => handleMouseEnter('left')}
        onMouseLeave={() => handleMouseLeave('left')}
      >
        <h1 className='head1'>Make Your Opinion Matter</h1>
        <input type="text" className="nickname-input" placeholder="Enter your nickname" />
        <button className="btn" onClick={handleClick('/publicdashboard')}>
          Poll
        </button>
      </div>
      <div
        className="split right"
        onMouseEnter={() => handleMouseEnter('right')}
        onMouseLeave={() => handleMouseLeave('right')}
      >
        <h1 className='head1'>Create Your Own Poll</h1>
        <button className="btn" onClick={handleClick('/login')}>
        Sign In
      </button>
      </div>
    </div>
  );
};

export default SplitLandingPage;
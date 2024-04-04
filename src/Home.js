import React from 'react';
import './Home.css';

const Home = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://www.udemy.com'; // Redirect to Udemy website
  };

  const handleGetStarteds = () => {
    window.location.href = 'https://www.royalchallengers.com/'; // Redirect to Udemy website
  };

  return (
    <div>
      <div className='name'> 
        <div className="container">
          <h1 className="head">DAMN Academy</h1>
          <p className="para">Build skills with courses, certificates and degrees <br/> online from world-class universities and companies</p>
          <button className="homebtn" onClick={handleGetStarted}> Get Started </button>
          <button className="homebtn1"onClick={handleGetStarteds}> Join for free</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

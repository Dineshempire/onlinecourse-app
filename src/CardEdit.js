import React from 'react';
import Data from './DataGett';
import './CardEdit.css';
import { FaStar, FaRegStar } from "react-icons/fa";

const CardEdit = () => {
  const handleAddToCourse = () => {
    window.location.href = 'https://www.udemy.com'; // Redirect to Udemy website
  };

  return (
    <div>
      <header>Courses</header>
      <p style={{color:'lightblue',backgroundColor:'lightblue'}}>hi</p>
      <div className='bgco'></div>
      <div className="mainContainer">
        {Data.map(({id, image, title, description, price}) => (
          <div key={id} className="box">
            <div className="card">
              <div className="image">
                <img src={image} alt=""/>
              </div>
              <div className="desc">
                <h1>{title}</h1>
                <p>{description}</p>
                <span>${price}</span>
              </div>
              <div className="star">
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaRegStar className="icon" />
                <FaRegStar className="icon"/>
              </div>
            </div>
            <button className="buttonstyle" onClick={handleAddToCourse}>Add To Course</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardEdit;

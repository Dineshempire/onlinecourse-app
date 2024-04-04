import React, { useState } from 'react';
import './about.css';

function About() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <>
      <div id="container">
        <h1 id="abouthh">About</h1>
          <p id="para">
            <b>
              "DAMN Academy stands as a beacon of excellence in the realm of education, offering a transformative 
              journey for learners seeking to unlock their full potential. Rooted in a commitment to nurturing intellectual 
              curiosity, creativity, and critical thinking, DAMN Academy provides a dynamic learning environment where students 
              are empowered to explore, innovate, and excel. With a diverse array of programs curated by experts in their fields, 
              our academy cultivates holistic development, preparing individuals to thrive in an ever-evolving world. Through rigorous  
              academics, hands-on experiences, and a supportive community, DAMN Academy fosters aculture of excellence, empowering students to become 
              lifelong learners and leaders who will make a profound impact on society."
            </b> 
          </p>
      </div>
    </>
  );
}

export default About;
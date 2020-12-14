import React from 'react';
import home1 from '../img/home1.png';

const AbouteSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dream</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for aWny photography or videography
          ideas that you have.we have professinals with
          amazing skills
        </p>
        <button>Cantact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with camera" />
      </div>
    </div>
  );
};

export default AbouteSection;

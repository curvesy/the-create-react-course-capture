import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';

const AbouteSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dream</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for aWny photography or videography
          ideas that you have.we have professinals with
          amazing skills
        </p>
        <button>Cantact Us</button>
      </Description>

      <Image>
        <img src={home1} alt="guy with camera" />
      </Image>
    </About>
  );
};

export default AbouteSection;

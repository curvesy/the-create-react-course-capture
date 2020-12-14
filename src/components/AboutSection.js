import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';

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

const About = styled.div`
  min-hight: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    hight: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AbouteSection;

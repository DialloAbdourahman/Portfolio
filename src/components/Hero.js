import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper className='sub-container'>
      <h3 className='intro'>Hi, my name is</h3>
      <h2 className='name'>Diallo Abdourahman.</h2>
      <h2 className='sub-intro'>I build things for the web.</h2>
      <p className='description'>
        I'm a software engineer specialized in building fullstack
        <span className='green'> web </span>
        application and occasionally <span className='green'>mobile </span>
        applications using up-to-date languages and technologies.
      </p>
      <a href='/docs/cv.pdf' target={'_blank'}>
        Check out my resume
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 109px);
  overflow: hidden;

  .intro {
    color: var(--greenColor);
    font-weight: normal;
    margin-bottom: 20px;
    margin-top: 30px;
    animation-name: leftToRight;
    animation-duration: 2s;
    animation-timing-function: ease-out;
  }

  .name {
    color: var(--whiteColor);
    margin-bottom: 20px;
    font-size: 70px;
    animation-name: rightToLeft;
    animation-duration: 2s;
    animation-timing-function: ease-out;
  }

  .sub-intro {
    color: var(--paleWhiteColor);
    margin-bottom: 20px;
    font-size: 70px;
    animation-name: leftToRight;
    animation-duration: 2s;
    animation-timing-function: ease-out;
  }

  .description {
    color: var(--paleWhiteColor);
    width: 50%;
    line-height: 25px;
    margin-bottom: 50px;
    animation-name: rightToLeft;
    animation-duration: 2s;
    animation-timing-function: ease-out;
  }

  a {
    color: var(--greenColor);
    border: 1px solid var(--greenColor);
    border-radius: 5px;
    padding: 20px 50px;
    background-color: transparent;
    text-decoration: none;
  }

  a:hover {
    background-color: var(--hover);
    transition: background 0.2s linear;
  }

  .green {
    color: var(--greenColor);
  }

  @media (max-width: 1000px) {
    .description {
      width: 70%;
    }
    .name {
      font-size: 60px;
    }
    .sub-intro {
      font-size: 60px;
    }
  }

  @media (max-width: 1000px) {
    .description {
      width: 80%;
    }
    .name {
      font-size: 50px;
    }
    .sub-intro {
      font-size: 50px;
    }
  }

  @media (max-width: 720px) {
    .description {
      width: 100%;
    }
    .name {
      font-size: 40px;
    }
    .sub-intro {
      font-size: 40px;
    }
  }

  @media (max-width: 500px) {
    .name {
      font-size: 30px;
    }
    .sub-intro {
      font-size: 30px;
    }
  }

  @keyframes leftToRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes rightToLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default Hero;

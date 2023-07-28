import React from 'react';
import { socialmedia } from '../utiles/socialmedia';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper id='contact' className='sub-container'>
      <h1>
        <span className='green'>04. </span>What's Next?.
      </h1>
      <h2 className='green'>Get In Touch</h2>
      <div className='con'>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
      </div>
      <div className='con'>
        <a href='mailto:dialliabdourahman78@gmail.com' className='hello'>
          Say Hello
        </a>
      </div>
      <div className='links'>
        {socialmedia.map((media, index) => {
          return (
            <a
              key={index}
              href={media.link}
              title={media.name}
              target='_blank'
              rel='noopener noreferrer'
            >
              {media.icon}
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  h1 {
    color: var(--whiteColor);
    padding: 40px 0;
    font-size: 30px;
  }

  h2 {
    color: var(--whiteColor);
    text-align: center;
    margin-bottom: 30px;
    font-size: 40px;
  }

  p {
    color: var(--whiteColor);
    text-align: center;
    line-height: 25px;
    font-size: 20px;
    max-width: 600px;
  }

  .con {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .hello {
    color: var(--greenColor);
    border: 1px solid var(--greenColor);
    border-radius: 5px;
    padding: 10px 30px;
    text-decoration: none;
  }

  .hello:hover {
    background-color: var(--hover);
    transition: background 0.2s linear;
  }

  .links {
    display: flex;
    justify-content: center;
  }

  .links a {
    color: var(--whiteColor);
    font-size: 30px;
    transition: all 0.2s;
    margin: 0 20px;
  }

  .links a:hover {
    color: var(--greenColor);
  }

  .green {
    color: var(--greenColor);
  }
`;

export default Contact;

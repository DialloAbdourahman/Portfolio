import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper id='about'>
      <div className='sub-container'>
        <div className='left'>
          <h1>
            <span className='green'>01.</span> About Me
          </h1>
          <p>
            Hello! My name is <span className='green'>Diallo Abdourahman</span>{' '}
            and I enjoy creating things live on the internet. My interest in web
            development started back in 2017 when I decided to my chrome's
            devtool to modify a web page I was visiting. Turns out hacking
            together a web page taught me a lot about{' '}
            <span className='green'>HTML & CSS</span>.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of studying
            software engineering in the university which has led me to create
            many project and do some interships. My main focus these days is
            building accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>
            A also followed some couses on <span className='green'>udemy</span>{' '}
            both in frontend and in backend which has improved my skill a lot.
          </p>
          <p>Here are a few technologies I've been with recently:</p>
          <div className='technologies'>
            <ul>
              <li>
                <AiOutlineDoubleRight className='green2' /> HTML & CSS
              </li>
              <li>
                <AiOutlineDoubleRight className='green2' /> JavaScipt
              </li>
              <li>
                <AiOutlineDoubleRight className='green2' /> React.js
              </li>
              <li>
                <AiOutlineDoubleRight className='green2' /> React Native
              </li>
              <li>
                <AiOutlineDoubleRight className='green2' /> TypeScript
              </li>
            </ul>
            <ul>
              <li>
                <AiOutlineDoubleRight className='green2' /> Node.js
              </li>
              <li>
                <AiOutlineDoubleRight className='green2' /> Express.js
              </li>
              <li>
                <AiOutlineDoubleRight className='green2' /> SQL (MySql and
                PostgreSQL)
              </li>
              <li>
                <AiOutlineDoubleRight className='green2' /> NoSQL (MongoDB)
              </li>
              <li>
                <AiOutlineDoubleRight className='green2' /> Git/Github
              </li>
            </ul>
          </div>
        </div>
        <div className='right'>
          <img
            src='/images/profile.jpg'
            alt='My Profile Picture'
            className='profile'
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  color: var(--paleWhiteColor);

  .sub-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    width: 55%;
  }

  .right {
    width: 40%;
  }

  h1 {
    color: var(--whiteColor);
    margin-top: 100px;
    margin-bottom: 30px;
    font-size: 30px;
  }

  p {
    margin: 20px 0;
    font-size: 18px;
    line-height: 25px;
  }

  .technologies {
    display: flex;
    justify-content: space-between;
  }

  ul li {
    list-style-type: none;
    margin: 10px 0;
  }

  .profile {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }

  .green {
    color: var(--greenColor);
  }

  .green2 {
    color: var(--greenColor);
    margin-right: 10px;
  }

  @media (max-width: 1100px) {
    .profile {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 900px) {
    .sub-container {
      flex-direction: column;
    }
    .left {
      width: 100%;
      margin-bottom: 20px;
    }
    .right {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    h1 {
      margin-top: 30px;
    }
    .profile {
      width: 400px;
      height: 400px;
    }
  }

  @media (max-width: 500px) {
    .profile {
      width: 300px;
      height: 300px;
    }

    .technologies {
      flex-direction: column;
    }
  }
`;

export default About;

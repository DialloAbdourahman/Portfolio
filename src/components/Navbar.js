import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

const Navbar = ({ setShowSidebar }) => {
  return (
    <Wrapper id='navbar'>
      <div className='container'>
        <div className='logo'>
          <h2>D</h2>
          <GiHamburgerMenu
            className='icon'
            onClick={() => setShowSidebar(true)}
          />
        </div>
        <div className='links'>
          <a href='#about'>
            <span className='green'>01. </span>About Me
          </a>
          <a href='#project'>
            <span className='green'>02. </span>Projects
          </a>
          <a href='#experience'>
            <span className='green'>03. </span>Experience
          </a>
          <a href='#contact'>
            <span className='green'>04. </span>Contact
          </a>
          <a href='/docs/cv.pdf' className='resume' target='_blank'>
            Resume
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 30px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo h2 {
    border: 2px solid var(--greenColor);
    color: var(--greenColor);
    padding: 8px;
    border-radius: 50%;
    font-weight: normal;
  }

  .links a {
    text-decoration: none;
    color: var(--whiteColor);
    margin: 0 15px;
    font-size: 18px;
  }

  .links a:hover {
    color: var(--greenColor);
    transition: color 0.3s linear;
  }

  .green {
    color: var(--greenColor);
  }

  .links a.resume {
    color: var(--greenColor);
    border: 1px solid var(--greenColor);
    border-radius: 5px;
    padding: 8px 10px;
  }

  .links a.resume:hover {
    background-color: var(--hover);
    transition: background 0.2s linear;
  }

  .icon {
    display: none;
  }

  @media (max-width: 900px) {
    .logo {
      width: 100%;
    }

    .links {
      display: none;
    }

    .icon {
      display: block;
      color: var(--greenColor);
      font-size: 30px;
    }
  }
`;

export default Navbar;

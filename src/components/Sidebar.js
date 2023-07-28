import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import styled from 'styled-components';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <Wrapper
      style={{
        transform: `${showSidebar ? 'translateX(0)' : 'translateX(100%)'}`,
      }}
    >
      <p className='up'>
        <RxCross1 className='icon' onClick={() => setShowSidebar(false)} />
      </p>
      <div className='links'>
        <a href='#about' onClick={() => setShowSidebar(false)}>
          <span className='green'>01. </span>About Me
        </a>
        <a href='#project' onClick={() => setShowSidebar(false)}>
          <span className='green'>02. </span>Projects
        </a>
        <a href='#experience' onClick={() => setShowSidebar(false)}>
          <span className='green'>03. </span>Experience
        </a>
        <a href='#contact' onClick={() => setShowSidebar(false)}>
          <span className='green'>04. </span>Contact
        </a>
        <a
          href='/docs/cv.pdf'
          target={'_blank'}
          className='resume'
          onClick={() => setShowSidebar(false)}
          rel='noopener noreferrer'
        >
          Resume
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--light-navy);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 70%;
  transition: transform 0.3s linear;
  padding: 40px 25px;

  .up {
    text-align: right;
  }

  .icon {
    color: var(--greenColor);
    font-size: 30px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .links a {
    text-decoration: none;
    color: var(--whiteColor);
    margin: 0 15px;
    font-size: 18px;
    margin: 10px 0;
    font-size: 20px;
    width: 100%;
  }

  .links span {
    margin: 10px 0;
  }

  .links a:hover {
    color: var(--greenColor);
    transition: color 0.3s linear;
  }

  .links a.resume {
    color: var(--greenColor);
    border: 1px solid var(--greenColor);
    border-radius: 5px;
    padding: 15px 0px;
    font-size: 18px;
  }

  .links a.resume:hover {
    background-color: var(--hover);
    transition: background 0.2s linear;
  }

  .green {
    color: var(--greenColor);
    display: block;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export default Sidebar;

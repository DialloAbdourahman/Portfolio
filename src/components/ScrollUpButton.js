import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled from 'styled-components';

const ScrollUpButton = () => {
  return (
    <Wrapper>
      <a href='#navbar'>
        <AiOutlineArrowUp />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--greenColor);
  padding: 10px;
  border-radius: 50%;
  border: none;
  z-index: 2000;
  font-size: 30px;
  font-weight: bolder;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s linear;
    color: var(--backgroundColor);
  }

  a:active {
    color: var(--backgroundColor);
  }

  &:hover a {
    transform: translateY(-15%);
  }
`;

export default ScrollUpButton;

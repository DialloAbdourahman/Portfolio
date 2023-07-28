import React from 'react';
import styled from 'styled-components';
import { CiFolderOn } from 'react-icons/ci';

const SingleProject = ({ name, description, technologies, links }) => {
  return (
    <Wrapper>
      <a
        href={links[1] ? links[1].link : links[0].link}
        target='_blank'
        className='contain'
        rel='noopener noreferrer'
      >
        <div className='flex'>
          <CiFolderOn className='icon' />
          <div className='links'>
            {links.map(({ icon, link }) => {
              return (
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <h3 className='name'>{name}</h3>
        <p className='description'>{description}</p>
        <div className='technologies'>
          {technologies.map((techno, index) => {
            return <span key={index}>{techno}</span>;
          })}
        </div>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: rgb(17, 34, 64);
  max-width: 312px;
  padding: 20px;
  border-radius: 5px;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: translateY(-3%);
  }

  .icon {
    color: var(--greenColor);
    font-size: 45px;
    font-weight: normal;
  }

  .links a {
    font-size: 22px;
    color: var(--whiteColor);
    transition: color 0.3s linear;
  }

  .links a:hover {
    color: var(--greenColor);
  }

  .links svg {
    margin-left: 10px;
  }

  .name {
    margin-top: 20px;
    margin-bottom: 10px;
    color: var(--white);
    transition: color 0.2s linear;
  }

  .description {
    color: var(--whiteColor);
  }

  .technologies {
    margin-top: 25px;
    color: var(--paleWhiteColor);
    font-size: 15px;
    font-style: italic;
    display: flex;
    flex-wrap: wrap;
  }

  .technologies span {
    margin-right: 25px;
    margin-bottom: 5px;
  }

  &:hover .name {
    color: var(--greenColor);
  }

  a {
    text-decoration: none;
  }

  a:active,
  a:focus {
    color: transparent;
  }

  @media (max-width: 1000px) {
    max-width: 350px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export default SingleProject;

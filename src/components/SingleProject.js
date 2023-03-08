import React from 'react';
import styled from 'styled-components';
import { CiFolderOn } from 'react-icons/ci';

const SingleProject = ({ name, description, technologies, links }) => {
  return (
    <Wrapper>
      <div className='flex'>
        <CiFolderOn className='icon' />
        <div className='links'>
          {links.map(({ icon, link }) => {
            return (
              <a href={link} target='_blank'>
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
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: var(--lightest-navy);
  max-width: 312px;
  padding: 20px;
  border-radius: 5px;

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
`;

export default SingleProject;

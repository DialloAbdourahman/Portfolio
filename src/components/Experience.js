import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { experiences } from '../utiles/experiences';
import styled from 'styled-components';

const Experience = () => {
  const [index, setIndex] = useState(0);
  const { company, title, date, activities } = experiences[index];
  return (
    <Wrapper id='experience' className='sub-container'>
      <h1>
        <span className='green'>03. </span>Where I've Worked.
      </h1>
      <div className='experiences'>
        <div className='left'>
          {experiences.map((experience, i) => {
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`${i === index ? 'hover' : ''}`}
              >
                {experience.company}
              </button>
            );
          })}
        </div>
        <div className='right'>
          <h2>
            {title} <span className='green'>@ {company}</span>
          </h2>
          <p className='date'>{date}</p>
          {activities.map((activity, index) => {
            return (
              <p key={index} className='activity'>
                <BiRightArrow className='green' /> <span> {activity}</span>
              </p>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;

  h1 {
    color: var(--whiteColor);
    padding: 100px 0;
    font-size: 30px;
  }

  .experiences {
    display: flex;
  }

  .left {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  .left button {
    border: none;
    padding: 15px 30px;
    background-color: transparent;
    font-size: 18px;
    color: var(--paleWhiteColor);
    border-left: 2px solid var(--hover);
    transition: all 0.4s;
  }

  .left button:hover {
    color: var(--greenColor);
    background-color: rgb(16, 32, 61);
  }

  .right h2 {
    color: var(--whiteColor);
  }

  .date {
    margin-top: 15px;
    margin-bottom: 30px;
    color: var(--paleWhiteColor);
    font-style: italic;
  }

  .activity {
    margin: 15px 0;
    color: var(--paleWhiteColor);
    display: flex;
  }

  .activity span {
    margin-left: 10px;
  }

  .green {
    color: var(--greenColor);
  }

  .left .hover {
    border-color: var(--greenColor);
    color: var(--greenColor);
    transition: 0.4s;
  }

  @media (max-width: 800px) {
    h1 {
      padding: 60px 0;
    }

    .experiences {
      flex-direction: column;
    }

    .left {
      flex-direction: row;
      margin-bottom: 30px;
    }

    .left button {
      border-bottom: 2px solid var(--hover);
      border-left: none;
      padding: 10px 30px;
    }
  }
`;

export default Experience;

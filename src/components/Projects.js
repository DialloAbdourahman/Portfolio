import React from 'react';
import styled from 'styled-components';
import SingleProject from './SingleProject';
import { importantProjects, notSoImportantProjects } from '../utiles/projects';

const Projects = () => {
  return (
    <Wrapper id='project' className='sub-container'>
      <h1>
        <span className='green'>02.</span> Some projects I've built.
      </h1>
      <h1 className='center up'>Large Projects</h1>

      <div className='projects-list'>
        {importantProjects.map((project, index) => {
          return <SingleProject key={index} {...project} />;
        })}
      </div>
      <h1 className='center'>Small Projects</h1>
      <div className='projects-list'>
        {notSoImportantProjects.map((project, index) => {
          return <SingleProject key={index} {...project} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;

  h1 {
    color: var(--whiteColor);
    padding: 50px 0;
    font-size: 30px;
  }

  .projects-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  .green {
    color: var(--greenColor);
  }

  .center {
    text-align: center;
  }

  .up {
    margin-top: -60px;
  }

  @media (max-width: 1000px) {
    .projects-list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .projects-list {
      grid-template-columns: 1fr;
    }
  }
`;

export default Projects;

import React from 'react';
import styled from 'styled-components';
import SingleProject from './SingleProject';
import { importantProjects } from '../utiles/projects';

const Projects = () => {
  return (
    <Wrapper id='project' className='sub-container'>
      <h1>
        <span className='green'>02.</span> Some projects I've built.
      </h1>
      <div className='projects-list'>
        {importantProjects.map((project, index) => {
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
`;

export default Projects;

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper className='container'>
      Designed and Built by Diallo Abdourahman all Rights Reserved.
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  padding: 30px 0;
  color: var(--paleWhiteColor);
  font-style: italic;
  font-size: 15px;
  border-top: 2px solid var(--paleWhiteColor);
`;

export default Footer;

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
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
`;

export default Footer;

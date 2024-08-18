import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #343a40;
  padding: 00px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
  color: #ffffff;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Calendar App. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;

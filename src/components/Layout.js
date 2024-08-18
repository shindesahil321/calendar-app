import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CalendarView from './CalendarView';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 60px; /* Adjusted for header height */
  padding-bottom: 60px; /* Adjusted for footer height */
  background-color: ${({ theme }) => theme.mainContentBackground};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`;


const Layout = ({ children }) => {
    const { theme } = useTheme();
  
    return (
      <LayoutContainer theme={theme}>
        <Header />
        <MainContent theme={theme}>
          {children}
        </MainContent>
        <Footer />
      </LayoutContainer>
    );
  };
  
  export default Layout;
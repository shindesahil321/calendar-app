import React from 'react';
import CalendarView from '../components/CalendarView';
import AddEventForm from '../components/AddEventForm';
import FilterEvents from '../components/FilterEvents';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Adds padding around the entire page */
`;

const CalendarPage = () => (
  <PageContainer>
    <h1>Calendar</h1>
    <FilterEvents /> {/* FilterEvents at the top */}
    <AddEventForm /> {/* AddEventForm below FilterEvents */}
    <CalendarView /> {/* CalendarView at the bottom */}
  </PageContainer>
);

export default CalendarPage;

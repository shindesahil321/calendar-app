import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import { ThemeProvider } from 'styled-components';
import { EventContext } from '../context/EventContext';
import './CalendarView.css';

const lightTheme = {
  bodyBackgroundColor: '#f0f2f5',
  bodyTextColor: '#000',
  calendarBackgroundColor: '#ffffff',
  eventListBackgroundColor: '#f8f9fa',
};

const darkTheme = {
  bodyBackgroundColor: '#333',
  bodyTextColor: '#fff',
  calendarBackgroundColor: '#444',
  eventListBackgroundColor: '#555',
};

const backgroundImages = [
  '/images/background1.jpg',
  '/images/background2.jpg',
  '/images/background3.jpg',
];

const CalendarView = () => {
  const { events } = useContext(EventContext);
  const [date, setDate] = useState(new Date());
  const [bgIndex, setBgIndex] = useState(0);
  const [theme, setTheme] = useState(lightTheme);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    document.body.style.setProperty('--body-bg-color', theme.bodyBackgroundColor);
    document.body.style.setProperty('--body-text-color', theme.bodyTextColor);
    document.body.style.setProperty('--event-list-bg-color', theme.eventListBackgroundColor);
  };

  const nextBackground = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    document.body.style.setProperty('--background-image', `url(${backgroundImages[bgIndex]})`);
  };

  const filteredEvents = events.filter(event => new Date(event.date).toDateString() === date.toDateString());

  const tileContent = ({ date, view }) => {
    const event = events.find(event => new Date(event.date).toDateString() === date.toDateString());
    return event ? (
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img src="/path-to-your-image.jpg" alt="Event" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
      </div>
    ) : null;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="calendar-container" style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}>
        <h2>Events on {date.toDateString()}</h2>
        <div className="event-list-container">
          {filteredEvents.length === 0 ? (
            <p>No events scheduled for this date.</p>
          ) : (
            filteredEvents.map(event => (
              <div className="event-item" key={event.id}>
                <p><strong>{event.title}</strong></p>
                <p>{event.description}</p>
                <p><em>{event.time}</em></p>
              </div>
            ))
          )}
        </div>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileContent={tileContent}
        />
        <div className="button-container">
          <button onClick={toggleTheme}>Toggle Theme</button>
          <button onClick={nextBackground}>Next Background</button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CalendarView;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import CalendarPage from './pages/CalendarPage';
import EventDetailsPage from './pages/EventDetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
 
const App = () => (
  <EventProvider>
    <ThemeProvider>
      <Router>
        <Layout>
          <Header />
          
            <Routes>
              <Route path="/" element={<CalendarPage />} />
              <Route path="/event/:id" element={<EventDetailsPage />} />
              {/* Add more routes as needed */}
            </Routes>
          
          <Footer />
        </Layout>
      </Router>
    </ThemeProvider>
  </EventProvider>
);

export default App;
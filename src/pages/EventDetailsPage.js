import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import EventDetailsModal from '../components/EventDetailsModal';

const EventDetailsPage = () => {
  const { id } = useParams();
  const { events } = useContext(EventContext);
  const event = events.find(event => event.id === parseInt(id));

  return event ? <EventDetailsModal event={event} /> : <p>Event not found</p>;
};

export default EventDetailsPage;

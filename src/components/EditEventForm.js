import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';

const EditEventForm = ({ event }) => {
  const { editEvent } = useContext(EventContext);
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    editEvent({ ...event, title, date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Edit Event</button>
    </form>
  );
};

export default EditEventForm;

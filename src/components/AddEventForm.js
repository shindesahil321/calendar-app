import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';

const AddEventForm = () => {
  const { addEvent } = useContext(EventContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ id: Date.now(), title, date });
    setTitle('');
    setDate('');
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
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;

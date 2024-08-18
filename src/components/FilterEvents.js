import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import './FilterEvents.css';

const FilterEvents = () => {
  const { events, updateEvent } = useContext(EventContext);
  const [category, setCategory] = useState('All');
  const [editingEvent, setEditingEvent] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');

  const filteredEvents = category === 'All' ? events : events.filter(event => event.category === category);

  const handleEditClick = (event) => {
    setEditingEvent(event);
    setNewEventTitle(event.title);
    setNewEventDate(event.date);
  };

  const handleSaveChanges = () => {
    updateEvent({ ...editingEvent, title: newEventTitle, date: newEventDate });
    setEditingEvent(null);
    setNewEventTitle('');
    setNewEventDate('');
  };

  const handleCancel = () => {
    setEditingEvent(null);
    setNewEventTitle('');
    setNewEventDate('');
  };

  return (
    <div className="filter-container">
      <h2>Filter Events</h2>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-select">
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </label>
      <div className="event-list-container">
        {filteredEvents.length === 0 ? (
          <p>No events available.</p>
        ) : (
          filteredEvents.map(event => (
            <div className="event-item" key={event.id}>
              <p><strong>{event.title}</strong></p>
              <p>{event.date}</p>
              <button className="edit-button" onClick={() => handleEditClick(event)}>Edit</button>
            </div>
          ))
        )}
      </div>
      {editingEvent && (
        <div className="edit-form-container">
          <h3>Edit Event</h3>
          <label>
            Title:
            <input
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={newEventDate}
              onChange={(e) => setNewEventDate(e.target.value)}
            />
          </label>
          <button className="save-button" onClick={handleSaveChanges}>Save Changes</button>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default FilterEvents;

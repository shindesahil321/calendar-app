import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  /* Add modal styling here */
`;

const EventDetailsModal = ({ event, onClose }) => (
  <Modal>
    <h2>{event.title}</h2>
    <p>{event.date}</p>
    <p>{event.description}</p>
    <button onClick={onClose}>Close</button>
  </Modal>
);

export default EventDetailsModal;

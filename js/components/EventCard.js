import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <h6>{event.title}</h6>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <button className="btn btn-primary" onClick={() => setShowDetails(!showDetails)}>Details</button>
      { showDetails ? <EventDetails event={event} /> : null }
    </>
  )
}

const EventDetails = ({ event }) => {
  return (
    <>
      <div>{event.description}</div>
      <a className="btn btn-primary" href={event.infoLink}>Register</a>
    </>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
}

EventDetails.propTypes = {
  event: PropTypes.object.isRequired,
}


export default EventCard
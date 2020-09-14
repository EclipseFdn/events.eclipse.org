import React, { useState } from 'react';

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

export default EventCard
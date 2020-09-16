import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
    <div className="borderedEvent eventCard">
      <div>
        <h4 className="eventTitle">{event.title}</h4>
        <p>{new Date(event.date).toLocaleDateString()}</p>
        <button className="btn eventCardButton" onClick={() => setShowDetails(!showDetails)}>Learn More</button>
      </div>
    </div>

    { showDetails ? <EventDetails event={event} /> : null }
    </>
  )
}

  const EventDetails = ({ event }) => {
    return (
      <div className="bordered-box eventDetails">
        <div>{event.description}</div>
        <a className="btn btn-primary" href={event.infoLink}>Register</a>
      </div>
    )
  }

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
}

EventDetails.propTypes = {
  event: PropTypes.object.isRequired,
}


export default EventCard
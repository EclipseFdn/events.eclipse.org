import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false)

  // const doStuff = () => {
  //   setShowDetails(!showDetails)
  //   // window.dispatchEvent(new Event('resize')) this was for react-equalizer to recalculate the height when show details
  // }

  return (
    <>
    <div className={`borderedEvent eventCard type-${event.type}`}>
      <div>
        <h4 className="eventTitle">{event.title}</h4>
        <p><i className={`fa fa-calendar-o fa-lg calendarIcon calendarIcon-${event.type}`} aria-hidden="true" />{new Date(event.date).toLocaleDateString()}</p>
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
        <div className="margin-bottom-20">{event.description}</div>
        <div>Address:</div>
        <div className="text-center">
          {/* <a className="btn btn-primary" href={event.infoLink}>More</a> */}
          <a className="btn btn-primary" href={event.infoLink}>Register</a>
        </div>
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
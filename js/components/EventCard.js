import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { hasAddress, generateDates, generateTimes } from './EventHelpers';

const EventCard = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
    <div className={`borderedEvent eventCard type-${event.type}`}>
      <div className="all-margin-auto displayForIE">
        <div className="decorationDash"></div>
        <h3 className="eventTitle">{event.title}</h3>
        <p>
          <i className={`fa fa-calendar-o fa-lg calendarIcon calendarIcon-${event.type}`} aria-hidden="true" />
          { generateDates(new Date(event.date), new Date(event['end-date'])) }
        </p>
        <p>  
          <i className={`fa fa-clock-o fa-lg calendarIcon calendarIcon-${event.type}`} aria-hidden="true"></i>
          { generateTimes(new Date(event.date), new Date(event['end-date'])) }
        </p>
      </div>
      <button className="btn eventCardButton" onClick={() => setShowDetails(!showDetails)}>Learn More</button>
    </div>
    { showDetails ? <EventDetails event={event} /> : null }
    </>
  )
}

  const EventDetails = ({ event }) => {

    return (
      <div className="bordered-box eventDetails">
        <div className="margin-bottom-20">{event.description}</div>
        { hasAddress(event) && <div className="margin-bottom-20">Address: { event.address.city + " " + event.address.country } </div>}
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
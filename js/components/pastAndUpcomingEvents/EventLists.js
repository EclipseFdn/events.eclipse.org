import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard';
import Loading from '../Loading';
import PropTypes from 'prop-types';
import { checkDatePast } from '../EventHelpers';

const EventLists = ({ events, isFetchingMore, fetchMore, reachEnd }) => {
  if (events.length === 0 && !isFetchingMore) {
    return (
      <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        We have reached the end of results for the current filters
      </p>
    );
  }

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const filterEvents = () => {
    // get past event list
    const thePastEvents = events.filter((eventItem) =>
      checkDatePast(eventItem['end-date'])
    );
    setPastEvents(thePastEvents);

    // get upcoming event list
    const theUpcomingEvents = events.filter(
      (eventItem) => !checkDatePast(eventItem['end-date'])
    );
    setUpcomingEvents(theUpcomingEvents);
  };

  const renderPastEvents = () => {
    return pastEvents.map((eventItem) => (
      <div className="col-md-12 max-min-width event-past" key={eventItem.id}>
        <EventCard event={eventItem} />
      </div>
    ));
  };

  const renderUpcomingEvents = () => {
    return upcomingEvents.map((eventItem) => (
      <div className="col-md-12 max-min-width" key={eventItem.id}>
        <EventCard event={eventItem} />
      </div>
    ));
  };

  useEffect(() => {
    filterEvents();
  }, [events]);

  return (
    <>
      <div className="upcoming-event-list">
        <h2>Upcoming Events</h2>
        {renderUpcomingEvents()}
      </div>
      <div className="past-event-list">
        <h2>Past Events</h2>
        {renderPastEvents()}
      </div>

      <div className="event-load-more">
        {reachEnd ? (
          <p className="margin-5">
            We have reached the end of results for the current filters
          </p>
        ) : isFetchingMore ? (
          <Loading />
        ) : (
          !isFetchingMore && (
            <button
              className="btn btn-primary margin-top-10"
              onClick={fetchMore}
            >
              Load More
            </button>
          )
        )}
      </div>
    </>
  );
};

EventLists.propTypes = {
  events: PropTypes.array.isRequired,
  isFetchingMore: PropTypes.bool.isRequired,
  fetchMore: PropTypes.func.isRequired,
  reachEnd: PropTypes.bool.isRequired,
};

export default EventLists;

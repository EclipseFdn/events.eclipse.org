import React from 'react';
import EventCard from '../EventCard';
import Loading from '../Loading';

const PastEventsList = ({ events, isFetchingMore, fetchMore, newLoadMore }) => {

  return (
    <> 
      <div className="col-md-18 event-list-wrapper">
        {events.map((event) => (
          <div className="col-md-12 max-min-width" key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
  
        <div className="past-event-container">
          { isFetchingMore && <Loading /> }
          { !isFetchingMore && (!newLoadMore) && <button className="btn btn-primary" onClick={fetchMore}>Load More</button>}
        </div>
      </div>

    </>
  )
}

export default PastEventsList
import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import CustomSearch from './CustomSearch';
import WorkGroupFilters from './WorkGroupFilters';
import { getFilteredEvents } from './WorkingGroupHelpers';

const Events = ({ events }) => {

  const [searchValue, setSearchValue] = useState('')
  const [checkedItems, setCheckedItems] = useState({})

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/* Filters will be here */}
          <div className="row">
            <CustomSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <WorkGroupFilters checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
          </div>

        </div>
        <div className="col-md-16">
          {getFilteredEvents(events, searchValue, checkedItems).map((event) => (
            <div className="thumbnail" key={event.id}>
              <div className="caption">
                  <EventCard
                    event={event}
                  />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Events;

import React, { useState } from 'react';
import EventCard from './EventCard';
import CustomSearch from './CustomSearch';
import CheckboxFilters from './CheckboxFilters';
import { getFilteredEvents } from './WorkingGroupHelpers';
import PropTypes from 'prop-types';

const Events = ({ events }) => {

  const [searchValue, setSearchValue] = useState('')
  const [checkedWorkingGroups, setCheckedWorkingGroups] = useState({})
  const [checkedTypes, setCheckedTypes] = useState({})

  return (
    <div className="container">
      <h4>Find an event</h4>
      <div className="row bottomSpace">
        <div className="col-md-7">
          {/* Filters will be here */}
          <CustomSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <CheckboxFilters checkedTypes={checkedTypes} setCheckedTypes={setCheckedTypes} />
          <CheckboxFilters checkedWorkingGroups={checkedWorkingGroups} setCheckedWorkingGroups={setCheckedWorkingGroups} />
        </div>

        <div className="col-md-17">
          {getFilteredEvents(events, searchValue, checkedWorkingGroups, checkedTypes).map((event) => (
            <div className="col-md-10" key={event.id}>
              <EventCard
                event={event}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Events.propTypes = {
  events: PropTypes.array.isRequired,
}

export default Events;

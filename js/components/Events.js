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
      <div className="row">
        <div className="col-md-8">
          {/* Filters will be here */}
          <div className="row">
            <CustomSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <CheckboxFilters checkedTypes={checkedTypes} setCheckedTypes={setCheckedTypes} />
            <CheckboxFilters checkedWorkingGroups={checkedWorkingGroups} setCheckedWorkingGroups={setCheckedWorkingGroups} />
          </div>

        </div>
        <div className="col-md-16">
          {getFilteredEvents(events, searchValue, checkedWorkingGroups, checkedTypes).map((event) => (
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

Events.propTypes = {
  events: PropTypes.array.isRequired,
}

export default Events;

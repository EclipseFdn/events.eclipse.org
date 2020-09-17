import React, { useState } from 'react';
import EventCard from './EventCard';
import CustomSearch from './CustomSearch';
import CheckboxFilters from './CheckboxFilters';
import { generateFinalEvents } from './WorkingGroupHelpers';
import PropTypes from 'prop-types';

const Events = ({ events }) => {

  const [searchValue, setSearchValue] = useState('')
  const [checkedWorkingGroups, setCheckedWorkingGroups] = useState({})
  const [checkedTypes, setCheckedTypes] = useState({})

  return (
    <div className="container">
      <h3>Find an event</h3>
      <div className="row bottomSpace">
        <div className="col-md-6">
          {/* Filters will be here */}
          <CustomSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <CheckboxFilters checkedTypes={checkedTypes} setCheckedTypes={setCheckedTypes} />
          <CheckboxFilters checkedWorkingGroups={checkedWorkingGroups} setCheckedWorkingGroups={setCheckedWorkingGroups} />
        </div>

        <div className="col-md-18">

          {/* {getFilteredEvents(events, searchValue, checkedWorkingGroups, checkedTypes).map((event) => (
            <div className="col-md-10" key={event.id}>
              <EventCard event={event} />
            </div>
          ))} */}

          {generateFinalEvents(events, searchValue, checkedWorkingGroups, checkedTypes).map((eventRow, index) => (
            <div className="row" key={index}>
                {eventRow.map(elem => (
                    <div className="col-md-10" key={elem.id}>              
                      <EventCard event={elem} />
                    </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Events.propTypes = {
  events: PropTypes.array.isRequired,
}

export default Events;

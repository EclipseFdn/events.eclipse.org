import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import { EVENT_TYPES, WORKING_GROUPS, EVENT_TIME, alphaOrder } from '../EventHelpers';
import PropTypes from 'prop-types';

const PastEventsFilters = ({ 
  checkedTypes, 
  setCheckedTypes, 
  checkedWorkingGroups, 
  setCheckedWorkingGroups, 
  checkedEventTime, 
  setCheckedEventTime
}) => {
  
  const determineInitialState = () => {
    return window.innerWidth > 991
  }

  const [showTypes, setShowTypes] = useState(determineInitialState())
  const [showWorkingGroups, setShowWorkingGroups] = useState(determineInitialState())
  const [showEventTime, setShowEventTime] = useState(determineInitialState())

  const handleChange = (e) => {
    if (checkedWorkingGroups && setCheckedWorkingGroups) {
      if (e.target.checked) {
        setCheckedWorkingGroups({
         ...checkedWorkingGroups,
         [e.target.name]: e.target.checked
       });
      } else {
        setCheckedWorkingGroups({
           ...checkedWorkingGroups,
          [e.target.name]: undefined
        })
      }
    }

    if (checkedTypes && setCheckedTypes) {
      if (e.target.checked) {
        setCheckedTypes({
         ...checkedTypes,
         [e.target.name]: e.target.checked
       });
      } else {
        setCheckedTypes({
           ...checkedTypes,
          [e.target.name]: undefined
        })
      }
    }

    if (checkedEventTime && setCheckedEventTime) {
      if (e.target.checked) {
        setCheckedEventTime({
         ...checkedEventTime,
         [e.target.name]: e.target.checked
       });
      } else {
        setCheckedEventTime({
           ...checkedEventTime,
          [e.target.name]: undefined
        })
      }
    }

  }

  const toggleTypes = () => {
    setShowTypes(!showTypes)
  }

  const toggleWorkingGroups = () => {
    setShowWorkingGroups(!showWorkingGroups)
  }

  const toggleEventTimes = () => {
    setShowEventTime(!showEventTime)
  }

  function renderFilterComponent(checkedFilter, filterCheckFunc, filterShowingState, filterShowingFunc, filterDataArray, filterTypeName) {
    if (checkedFilter && filterCheckFunc) {
      return (
        <> 
          <button
            onClick={filterShowingFunc}
            className="event-filter-title"
            >
              { filterTypeName }
              <i className="fa fa-angle-down event-filter-expandable-icon" aria-hidden="true"></i>
          </button>
          { filterShowingState && 
            <ul className="event-filter-checkbox-list">
                { filterDataArray.map(item => (
                  <li key={item.id}>
                    <label key={item.id}>
                      <Checkbox
                        name={item.id} 
                        checked={checkedFilter[item.id]} 
                        onChange={handleChange}
                      />
                      {item.name}
                    </label>
                  </li>
                ))}
            </ul>
          }
        </>
      )
    }
  }

  return (
    <div className="margin-bottom-10">
      {renderFilterComponent(checkedTypes, setCheckedTypes, showTypes, toggleTypes, alphaOrder(EVENT_TYPES), "EVENT TYPE")}
      {renderFilterComponent(checkedWorkingGroups, setCheckedWorkingGroups, showWorkingGroups, toggleWorkingGroups, alphaOrder(WORKING_GROUPS), "CATEGORIES")}
      {renderFilterComponent(checkedEventTime, setCheckedEventTime, showEventTime, toggleEventTimes, EVENT_TIME, "TIME")}
    </div>
  )

}

PastEventsFilters.propTypes = {
  checkedTypes: PropTypes.object,
  setCheckedTypes: PropTypes.func,
  checkedWorkingGroups: PropTypes.object,
  setCheckedWorkingGroups: PropTypes.func,
  checkedEventTime: PropTypes.object,
  setCheckedEventTime: PropTypes.func,
}

export default PastEventsFilters
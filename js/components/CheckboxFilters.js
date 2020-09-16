import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { WORKING_GROUPS } from './WorkingGroupHelpers';
import { EVENT_TYPES } from './EventsTypeConst';
import PropTypes from 'prop-types';

const CheckboxFilters = ({ checkedTypes, setCheckedTypes, checkedWorkingGroups, setCheckedWorkingGroups }) => {

  const [showTypes, setShowTypes] = useState(true)
  const [showWorkingGroups, setShowWorkingGroups] = useState(true)

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

  }

  const toggleTypes = () => {
    setShowTypes(!showTypes)
  }

  const toggleWorkingGroups = () => {
    setShowWorkingGroups(!showWorkingGroups)
  }

  const WorkingGroups = () => {
    if (checkedWorkingGroups && setCheckedWorkingGroups) {
      return (
        <> 
          <button onClick={toggleWorkingGroups} className="selectionTitle">WORKING GROUPS <i className="fa fa-angle-down" aria-hidden="true"></i></button>
          <ul className="checkboxList">
            { showWorkingGroups && 
              WORKING_GROUPS.map(item => (
                <li key={item.id}>
                  <label key={item.id}>
                    <Checkbox name={item.id} checked={checkedWorkingGroups[item.id]} onChange={handleChange} />
                    {item.name}
                  </label>
                </li>
              ))
            }
          </ul>
        </>
      )
    }
  }


  const EventTypes = () => {
    if (checkedTypes && setCheckedTypes) {
      return (
        <>
        <button onClick={toggleTypes} className="selectionTitle">EVENT TYPE<i className="fa fa-angle-down" aria-hidden="true"></i></button>
        <ul className="checkboxList">
          { showTypes &&
            EVENT_TYPES.map(item => (
              <li key={item.id}>
                <label key={item.id}>
                  <Checkbox name={item.id} checked={checkedTypes[item.id]} onChange={handleChange} />
                  {item.name}
                </label>
              </li>
            ))
          }
        </ul>
        </>
      )
    }
  }

  return (
    <div className="filters">
      {WorkingGroups()}
      {EventTypes()}
    </div>
   )
}

CheckboxFilters.propTypes = {
  checkedTypes: PropTypes.object,
  setCheckedTypes: PropTypes.func,
  checkedWorkingGroups: PropTypes.object,
  setCheckedWorkingGroups: PropTypes.func,
}

export default CheckboxFilters
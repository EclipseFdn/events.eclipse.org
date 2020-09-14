import React from 'react';
import Checkbox from './Checkbox';
import { WORKING_GROUPS } from './WorkingGroupHelpers';

const WorkGroupFilters = ({ checkedItems, setCheckedItems }) => {

  const handleChange = (e) => {
    if (e.target.checked) {
     setCheckedItems({
       ...checkedItems,
       [e.target.name]: e.target.checked
     });
    } else {
      setCheckedItems({
         ...checkedItems,
        [e.target.name]: undefined
      })
    }
  }
 
   return (
     <ul>
       {
          WORKING_GROUPS.map(item => (
            <li key={item.id}>
             <label key={item.id}>
               <Checkbox name={item.id} checked={checkedItems[item.id]} onChange={handleChange} />
               {item.name}
             </label>
            </li>
          ))
       }
     </ul>    
   )
}

export default WorkGroupFilters
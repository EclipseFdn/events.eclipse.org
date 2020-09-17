import _ from 'lodash'

export const WORKING_GROUPS = [
  {
    id: "ascii_doc",
    name: "AsciiDoc"
  },
  {
    id: "ecd_tools",
    name: "Eclipse Cloud Development Tools"
  },
  {
    id: "edge_native",
    name: "Edge Native"
  },
  {
    id: "gemoc_rc",
    name: "GEMOC RC"
  },
  {
    id: "eclipse_iot",
    name: "Eclipse IoT"
  },
  {
    id: "jakarta_ee",
    name: "Jakarta EE"
  },
  {
    id: "openadx",
    name: "OpenADx"
  },
  {
    id: "opengenesis",
    name: "OpenGENESIS"
  },
  {
    id: "openhwgroup",
    name: "OpenHW Group"
  },
  {
    id: "openmdm",
    name: "OpenMDM"
  },
  {
    id: "openmobility",
    name: "OpenMobility"
  },
  {
    id: "openpass",
    name: "OpenPass"
  },
  {
    id: "science",
    name: "Science"
  },
  {
    id: "sparkplug",
    name: "Sparkplug"
  },
  {
    id: "tangle_ee",
    name: "Tangle EE"
  },
  {
    id: "eclipse_org",
    name: "Eclipse Org"
  }
]

export function getSelectedItems(checkedItems) {
  let selected = []
  if (checkedItems) {
    for (const property in checkedItems) {
      if (checkedItems[property]) {
        selected.push(property)
      }
    }
    return selected
  }
}

export function getEventsByWorkingGroups(checkedItems, events) {
  let checked = getSelectedItems(checkedItems)
  if (checked && checked.length > 0) {
    let result = events.filter( el => checked.some(item => el.publish_to.includes(item)) )
    return result
  } else return events
}

export function getEventsByType(checkedItems, events) {
  let checked = getSelectedItems(checkedItems)
  if (checked && checked.length > 0) {
    let result = events.filter( el => checked.includes(el.type) )
    return result
  } else return events
}

export function getEventsByDate() {
  
}

export function getSearchedEvents(events, searchValue) {
  if (searchValue && searchValue != '') {
    let result = events.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()))
    return result
  } else {
    return events
  }
}

// export function chunkArrays(originalArray) {
//   var newArray = [], size = 2
  
//   while (originalArray.length > 0) {
//       newArray.push(originalArray.splice(0, size))
//   }

//   return newArray
// }

export function getFilteredEvents(events, searchValue, checkedWorkingGroups, checkedTypes) {
  let selectedByWorkingGroups = getEventsByWorkingGroups(checkedWorkingGroups, events)
  let selectedByTypes = getEventsByType(checkedTypes, selectedByWorkingGroups)
  return getSearchedEvents(selectedByTypes, searchValue)
  // return chunkArrays(getSearchedEvents(selectedByTypes, searchValue))
}


// use lodash _.cloneDeep(array)
// use lodash chunk

export function generateFinalEvents(events, searchValue, checkedWorkingGroups, checkedTypes) {

  let originalArray = getFilteredEvents(events, searchValue, checkedWorkingGroups, checkedTypes)
  let copyArray = _.cloneDeep(originalArray)
  let chunkArray = _.chunk(copyArray, 2)

  return chunkArray
}

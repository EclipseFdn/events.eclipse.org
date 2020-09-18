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

export function getFilteredEvents(events, searchValue, checkedWorkingGroups, checkedTypes) {
  let selectedByWorkingGroups = getEventsByWorkingGroups(checkedWorkingGroups, events)
  let selectedByTypes = getEventsByType(checkedTypes, selectedByWorkingGroups)
  return getSearchedEvents(selectedByTypes, searchValue)
}

export function hasAddress(event) {
  if (event.address && (event.address.city || event.address.country)) {
    return true
  } else return false
}

export function checkSameMonth(startDate, endDate) {
  return startDate.getMonth() === endDate.getMonth()
}

export function checkSameDay(startDate, endDate) {
  return checkSameMonth(startDate, endDate) && startDate.getDate() === endDate.getDate()
}

export function generateDate(date) {
  if (date) {
    return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
  }
}

export function generateDates(startDate, endDate) {
  if (endDate && !checkSameDay(startDate, endDate)) {
    return generateDate(startDate) + " - " + generateDate(endDate) + ", " + startDate.getFullYear()
  }
  else {
    return generateDate(startDate)
  }
}

export function generateTime(time) {
  if (time) {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
}

export function generateTimes(startDate, endDate) {
  if (endDate && checkSameDay(startDate, endDate)) {
    return generateTime(startDate) + " - " + generateTime(endDate)
  }
  else {
    return generateTime(startDate)
  }
}


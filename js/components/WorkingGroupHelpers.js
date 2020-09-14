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
  }
]

export function getselectedWorkingGroups(checkedItems) {
  let selected = []
  for (const property in checkedItems) {
    if (checkedItems[property]) {
      selected.push(property)
    }
  }
  return selected
}

export function getEventsByWorkingGroups(checkedItems, events) {
  let checked = getselectedWorkingGroups(checkedItems)
  if (checked && checked.length > 0) {
    let result = events.filter( el => checkedItems.some(item => el.publish_to.includes(item)) )
    return result
  } else return events
}

export function getEventsByType() {

}

export function getEventsByDate() {
  
}

export function getEventsByCheckbox() {

}

export function getSearchedEvents(events, searchValue) {
  if (searchValue && searchValue != '') {
    let result = events.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()))
    return result
  } else {
    return events
  }
}

export function getFilteredEvents(events, searchValue, checkedItems) {
  let selected = getselectedWorkingGroups(checkedItems)
  let first = getEventsByWorkingGroups(selected, events)
  return getSearchedEvents(first, searchValue)
}
import React, { useState, useEffect } from 'react';
import Events from './Events';

const EventsDataFetcher = () => {
  // Based off https://reactjs.org/docs/faq-ajax.html
  
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [events, setEvents] = useState([])
  
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://newsroom.eclipse.org/api/events?parameters[upcoming_only]=1')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setEvents(result.events)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <Events events={events} />
    )
  }
}
  
  export default EventsDataFetcher
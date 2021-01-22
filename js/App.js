import 'promise-polyfill/src/polyfill';
import 'unfetch/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import EventsDataFetcher from './components/EventsDataFetcher';

const App = () => (
  <div className="container">
    <h1>Upcoming Events</h1>
    <EventsDataFetcher />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
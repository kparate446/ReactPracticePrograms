import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Person from './Person';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Demo name=" Parate" /> */}
    <div>
      {/* <Person  id="1" name="Krunal" work="Java Developer"/> */}
      {/* <Person /> */}
      <Person />
      {/* {<Person />} */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

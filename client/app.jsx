import React, { Component, useState, setState, useEffect} from 'react';
// import { Switch, Route } from 'react-router-dom';
import { useTable } from 'react-table';
import axios from 'axios'
import Waitingroom from './components/waiting-room.jsx';
import Navcontainer from './components/nav-container.jsx';

// const [data, getData] = useState(0);

export default function App(props) {

  useEffect(() => {
    console.log('inside App component')
    async function getData() {
      try {
        const response = await axios.get('/api');
        console.log(...response.data);
      } catch (error) {
        console.error(error);
      } 
    }
    getData();
  }, [])
  

  // console.log(response);
  // const data = React.useMemo(() => {})
  return (
    <div>
          <Navcontainer />
          <Waitingroom />
    </div>
  );
};
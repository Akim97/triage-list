import React, { Component, useState, setState, useEffect } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { useTable } from 'react-table';

import Waitingroom from './components/waiting-room.jsx';
import Navcontainer from './components/nav-container.jsx';

// const [data, getData] = useState(0);


// async function getData(){
//   try {
//     const response = await fetch('http://localhost:3000/');
//     const data = await response.json();
//     console.log(...data);
//   } catch (error) {
//     console.error(error);
//   } 
// }
// getData();

 
// // console.log(...data);


// export default function App(props) {
//   // // console.log(response);
//   // const data = React.useMemo(() => {})
//   return (
//     <div>
//           <Navcontainer />
//           <Waitingroom />
//     </div>
//   );
// };

export default function App(props) {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/');
        const data = await response.json();
        console.log(...data)
        setPatientData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Navcontainer />
      <Waitingroom patientData={patientData} />
    </div>
  );
};

// export default App;

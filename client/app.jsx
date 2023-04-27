// import React, { Component, useState, setState, useEffect} from 'react';
// // import { Switch, Route } from 'react-router-dom';
// import { useTable } from 'react-table';
// import axios from 'axios'
// import Waitingroom from './components/waiting-room.jsx';
// import Navcontainer from './components/nav-container.jsx';

// // const [data, getData] = useState(0);

// export default function App(props) {

//   useEffect(() => {
//     console.log('inside App component')
//     async function getData() {
//       try {
//         const response = await axios.get('/api');
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       } 
//     }
//     getData();
//   }, [])

//         //  const data = React.useMemo(() => response, [])
//         // const columns = React.useMemo(() => [
//         //   {
//         //     Header: "ID",
//         //     accessor: "id",
//         //   },
//         //   {
//         //     Header: "Last Name",
//         //     accessor: "last_name",
//         //   },
//         //   {
//         //     Header: "First Name",
//         //     accessor: "first_name",
//         //   },
//         //   {
//         //     Header: "Chief Complaint",
//         //     accessor: "	chief_complaint",
//         //   },
//         //   {
//         //     Header: "Address",
//         //     accessor: "address",
//         //   },
//         //   {
//         //     Header: "Time Arrived",
//         //     accessor: "time_arrived",
//         //   }
//         // ], []);

//         // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
//   return (
//     <div>
//           <Navcontainer />
//           <Waitingroom />
//           {/* <div className='container'>
//             <table {...getTableProps()}>
//               <thead>
//                 {headerGroups.map((headerGroup) => {
//                   <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column) => (
//                       <th {...column.getHeaderProps()}>
//                         {column.render('Header')}
//                       </th>
//                     ))}
//                   </tr>
//                 })}
//               </thead>
//               <tbody>
//                 {rows.map((row) => {
//                   prepareRow(row)
//                   return (
//                     <tr {...row.getRowProps()}>
//                       {row.cells.map((cell) =>(
//                         <td {...HTMLTableCellElement.getCellProps()}> {cell.render('Cell')} </td>
//                       ))}
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div> */}
//     </div>
//   );
// };






/// ATTTEMPT 2

import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import Waitingroom from './components/waiting-room.jsx';
import Navcontainer from './components/nav-container.jsx';

export default function App(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Chief Complaint',
        accessor: 'chief_complaint',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Time Arrived',
        accessor: 'time_arrived',
      },
    ],
    []
  );

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>

      <Navcontainer />
      <Waitingroom />




      
      <div className='container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

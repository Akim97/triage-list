import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import Waitingroom from './components/waiting-room.jsx';
import Navcontainer from './components/nav-container.jsx';
import "./App.css"
import Createuser from './components/createuser.jsx';

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
      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row }) => (
          <button id='btn' onClick={() => handleDeleteRow(row.index)}>Remove Patient</button>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const handleDeleteRow = (index) => {
    setData((prevData) => prevData.filter((row, i) => i !== index));
  };

  return (
    <div>
      <Navcontainer />

      <div id='container'>
        <table className='tableheader'{...getTableProps()}>
          <thead >
            {headerGroups.map((headerGroup) => (
              <tr className='tablecontainer' {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className='titlenames'{...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='tablebody'{...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className='tablerows'{...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Createuser />
    </div>
  );
};

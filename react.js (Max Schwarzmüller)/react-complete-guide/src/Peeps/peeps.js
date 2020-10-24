import React, { useState, useEffect } from 'react';

const peeps = [
  {  "id": 1,
    "first_name": "Red",
    "last_name": "Pudner",
  }, {
    "id": 2,
    "first_name": "Olva",
    "last_name": "Kellegher",
  }, {
    "id": 3,
    "first_name": "Byrle",
    "last_name": "Dick",
  },
  {
    "id": 4,
    "first_name": "Cecile",
    "last_name": "Rainton",
  }
];

function Peeps() {
    const [data, setData] = useState([]);
    const [sortLast, setSortLast] = useState('last_name');

    useEffect(() => {
        const sortArray = name => {
            const names = {
                lastName:'last_name'
            };
            const sortByLast = names[name];
            const sorted = [...peeps].sort((a,b) => b[sortByLast] - a[sortByLast]);
            setData(sorted);
        }
        sortArray(sortLast)
    }, [sortLast]);

    return (
        <div className="App">
      <button onClick={(e) => setSortLast(e.target.value)}> 
        Sort by Last Name
      </button>

      {data.map(peep => (
        <div key={peep.id} style={{ margin: '30px' }}>
          <div>{`First Name: ${peep.first_name}`}</div>
          <div>{`Last Name: ${peep.last_name}`}</div>
        </div>
      ))}
    </div>
    )

    
}

export default Peeps;
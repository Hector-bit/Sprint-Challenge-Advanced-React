import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/navbar';
import PlayerCard from './components/playcard';

// function App() {

//   const [player, setPlayer] = useState([])

//   useEffect(() => {
//     axios
//       .get(
//         "http://localhost:5000/api/players"
//       )
//       .then(res => {
//         console.log(res.data);
//         setPlayer(res.data);
//       })

//       .catch(err => console.log(err, 'something went wrong with .get'));
//   }, []);

//   {console.log(player)}

//   return (
//     <NavBar/>
//     player.map(e => {
//       return( 
//       <div className="App">
//         <div className="playerCard">
//           <h3>{e.name}</h3>
//           <p>{e.country}</p>
//         </div>
//     </div>)
//     })
//   );
// };

// export default App;

function App () {

  return (
    <div className="App">
    <NavBar/>
    <PlayerCard/>
    </div>
  )
};

export default App;

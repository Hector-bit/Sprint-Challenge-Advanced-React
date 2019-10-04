import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PlayerCard() {

    const [player, setPlayer] = useState([])
  
    useEffect(() => {
      axios
        .get(
          "http://localhost:5000/api/players"
        )
        .then(res => {
          setPlayer(res.data);
        })
  
        .catch(err => console.log(err, 'something went wrong with .get'));
    }, []);
  
    {console.log(player)}

    return (
    <div className='roster'>
      {player.map(e => {
        return( 
          <div className="playerCard">
            <h3>Name : {e.name}</h3>
            <p>Country : {e.country}</p>
          </div>
      )
      })}
    </div>
    )
  };
  
  export default PlayerCard;
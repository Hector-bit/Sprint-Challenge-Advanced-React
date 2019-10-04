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
          console.log(res.data);
          setPlayer(res.data);
        })
  
        .catch(err => console.log(err, 'something went wrong with .get'));
    }, []);
  
    {console.log(player)}
  
    return (
      player.map(e => {
        return( 
          <div className="playerCard">
            <h3>{e.name}</h3>
            <p>{e.country}</p>
          </div>
      )
      })
    );
  };
  
  export default PlayerCard;
import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import PlayerCard from './components/playcard';
import axios from 'axios';

class App extends React.Component {
  state = {
    person: [],
    personText: ''
  };

  componentDidMount() {
    // useEffect
      axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data)
        this.setState({
          person: res.data
        });
      })
      .catch(err => console.log(err));
    }

  render() {
    (this.state.person.forEach(e => {
      console.log(e.name);
    }));
    return (
      <div className='cards'>
        {/* {this.state.person.forEach(e => { */}
          {/* return( */}
          <div className="playerCard">
            {this.state.person.map(e => {
              return(
                <div className>
                  <h3>{e.name}</h3>
                  <h3>{e.country}</h3>
                </div>
              )
            })}
          </div>
          {/* )
        })} */}
      </div>
  )};
}

// function App () {

//   return (
//     <div className="App">
//     <NavBar/>
//     <PlayerCard/>
//     </div>
//   )
// };

export default App;

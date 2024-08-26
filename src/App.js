import './App.css';
import Header from './Components/Header';
import React, { Component } from 'react'

// import { getTeams, getPlayers } from './APICalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teaminfo: [],
      playerinfo: []
      
    }
  }
    componentDidMount() {

        const getPlayers = fetch('http://localhost:3000/players/nfl')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });

        const getTeams = fetch('https://api.sleeper.app/v1/league/1048428157226868736/rosters')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
            Promise.all([getPlayers, getTeams])
            .then(([call1, call2]) => {
                this.setState({
                    playerinfo: call1,
                    teaminfo: call2,
                    loading: false,
                });
                console.log(this.state)
            })
            .catch(error => {
                this.setState({
                    error: error.message,
                    loading: false,
                });
            });
    }

     
    
render() {
    return (
      <Header />
           
    )
  
 }
}



export default App;



import './App.css';
import Header from './Components/Header';
import React, { Component } from 'react'

// import { getTeams, getPlayers } from './APICalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teaminfo: [],
      playerinfo: [],
      userinfo: [],
      rankingsinfo: [],
      dynastyRankings: [
        { name: "Justin Jefferson", team: "MIN", ranking: 1 },
        { name: "CeeDee Lamb", team: "DAL", ranking: 2 },
        { name: "Ja'Marr Chase", team: "CIN", ranking: 3 },
        { name: "Amon-Ra St. Brown", team: "DET", ranking: 4 },
        { name: "Marvin Harrison Jr.", team: "ARI", ranking: 5 },
        { name: "Bijan Robinson", team: "ATL", ranking: 6 },
        { name: "Breece Hall", team: "NYJ", ranking: 7 },
        { name: "Garrett Wilson", team: "NYJ", ranking: 8 },
        { name: "A.J. Brown", team: "PHI", ranking: 9 },
        { name: "Jahmyr Gibbs", team: "DET", ranking: 10 },
        { name: "Malik Nabers", team: "NYG", ranking: 11 },
        { name: "Puka Nacua", team: "LAR", ranking: 12 },
        { name: "Christian McCaffrey", team: "SF", ranking: 13 },
        { name: "Jonathan Taylor", team: "IND", ranking: 14 },
        { name: "Tyreek Hill", team: "MIA", ranking: 15 },
        { name: "Chris Olave", team: "NO", ranking: 16 },
        { name: "Travis Etienne Jr.", team: "JAC", ranking: 17 },
        { name: "Sam LaPorta", team: "DET", ranking: 18 },
        { name: "Jaylen Waddle", team: "MIA", ranking: 19 },
        { name: "Drake London", team: "ATL", ranking: 20 },
        { name: "Rome Odunze", team: "CHI", ranking: 21 },
        { name: "De'Von Achane", team: "MIA", ranking: 22 },
        { name: "Brandon Aiyuk", team: "SF", ranking: 23 },
        { name: "DeVonta Smith", team: "PHI", ranking: 24 },
        { name: "Saquon Barkley", team: "PHI", ranking: 25 },
        { name: "DJ Moore", team: "CHI", ranking: 26 },
        { name: "Josh Allen", team: "BUF", ranking: 27 },
        { name: "Patrick Mahomes II", team: "KC", ranking: 28 },
        { name: "Michael Pittman Jr.", team: "IND", ranking: 29 },
        { name: "DK Metcalf", team: "SEA", ranking: 30 },
        { name: "Nico Collins", team: "HOU", ranking: 31 },
        { name: "Trey McBride", team: "ARI", ranking: 32 },
        { name: "Rachaad White", team: "TB", ranking: 33 },
        { name: "Jalen Hurts", team: "PHI", ranking: 34 },
        { name: "Zay Flowers", team: "BAL", ranking: 35 },
        { name: "Kyren Williams", team: "LAR", ranking: 36 },
        { name: "C.J. Stroud", team: "HOU", ranking: 37 },
        { name: "Isiah Pacheco", team: "KC", ranking: 38 },
        { name: "Kenneth Walker III", team: "SEA", ranking: 39 },
        { name: "Lamar Jackson", team: "BAL", ranking: 40 },
        { name: "Brock Bowers", team: "LV", ranking: 41 },
        { name: "Tank Dell", team: "HOU", ranking: 42 },
        { name: "Jonathon Brooks", team: "CAR", ranking: 43 },
        { name: "Mark Andrews", team: "BAL", ranking: 44 },
        { name: "James Cook", team: "BUF", ranking: 45 },
        { name: "Tee Higgins", team: "CIN", ranking: 46 },
        { name: "Kyle Pitts", team: "ATL", ranking: 47 },
        { name: "Joe Burrow", team: "CIN", ranking: 48 },
        { name: "Dalton Kincaid", team: "BUF", ranking: 49 },
        { name: "George Pickens", team: "PIT", ranking: 50 },
        { name: "Jordan Addison", team: "MIN", ranking: 51 },
        { name: "Xavier Worthy", team: "KC", ranking: 52 },
        { name: "Anthony Richardson", team: "IND", ranking: 53 },
        { name: "Josh Jacobs", team: "GB", ranking: 54 },
        { name: "Rashee Rice", team: "KC", ranking: 55 },
        { name: "Brian Thomas Jr.", team: "JAC", ranking: 56 },
        { name: "Jaxon Smith-Njigba", team: "SEA", ranking: 57 },
        { name: "Caleb Williams", team: "CHI", ranking: 58 },
        { name: "Deebo Samuel Sr.", team: "SF", ranking: 59 },
        { name: "Trey Benson", team: "ARI", ranking: 60 },
        { name: "Joe Mixon", team: "HOU", ranking: 61 },
          { name: "Rhamondre Stevenson", team: "NE", ranking: 62 },
          { name: "Derrick Henry", team: "BAL", ranking: 63 },
          { name: "D'Andre Swift", team: "CHI", ranking: 64 },
          { name: "Travis Kelce", team: "KC", ranking: 65 },
          { name: "Davante Adams", team: "LV", ranking: 66 },
          { name: "Mike Evans", team: "TB", ranking: 67 },
          { name: "Jayden Reed", team: "GB", ranking: 68 },
          { name: "Ladd McConkey", team: "LAC", ranking: 69 },
          { name: "Amari Cooper", team: "CLE", ranking: 70 },
          { name: "Keon Coleman", team: "BUF", ranking: 71 },
          { name: "Jordan Love", team: "GB", ranking: 72 },
          { name: "T.J. Hockenson", team: "MIN", ranking: 73 },
          { name: "Kyler Murray", team: "ARI", ranking: 74 },
          { name: "Terry McLaurin", team: "WAS", ranking: 75 },
          { name: "George Kittle", team: "SF", ranking: 76 },
          { name: "Jayden Daniels", team: "WAS", ranking: 77 },
          { name: "Stefon Diggs", team: "HOU", ranking: 78 },
          { name: "Tony Pollard", team: "TEN", ranking: 79 },
          { name: "David Montgomery", team: "DET", ranking: 80 },
          { name: "Javonte Williams", team: "DEN", ranking: 81 },
          { name: "Justin Herbert", team: "LAC", ranking: 82 },
          { name: "Chris Godwin", team: "TB", ranking: 83 },
          { name: "Najee Harris", team: "PIT", ranking: 84 },
          { name: "Brian Robinson Jr.", team: "WAS", ranking: 85 },
          { name: "Tyjae Spears", team: "TEN", ranking: 86 },
          { name: "Christian Watson", team: "GB", ranking: 87 },
          { name: "Christian Kirk", team: "JAC", ranking: 88 },
          { name: "Zamir White", team: "LV", ranking: 89 },
          { name: "Diontae Johnson", team: "CAR", ranking: 90 },
          { name: "Cooper Kupp", team: "LAR", ranking: 91 },
          { name: "Evan Engram", team: "JAC", ranking: 92 },
          { name: "Alvin Kamara", team: "NO", ranking: 93 },
          { name: "David Njoku", team: "CLE", ranking: 94 },
          { name: "Trevor Lawrence", team: "JAC", ranking: 95 },
          { name: "Ricky Pearsall", team: "SF", ranking: 96 },
          { name: "Blake Corum", team: "LAR", ranking: 97 },
          { name: "Jaylen Warren", team: "PIT", ranking: 98 },
          { name: "Dak Prescott", team: "DAL", ranking: 99 },
          { name: "Calvin Ridley", team: "TEN", ranking: 100 },
          { name: "Aaron Jones", team: "MIN", ranking: 101 },
          { name: "Jake Ferguson", team: "DAL", ranking: 102 },
          { name: "Adonai Mitchell", team: "IND", ranking: 103 },
          { name: "Keenan Allen", team: "CHI", ranking: 104 },
          { name: "Marquise Brown", team: "KC", ranking: 105 },
          { name: "Brock Purdy", team: "SF", ranking: 106 },
          { name: "Jameson Williams", team: "DET", ranking: 107 },
          { name: "Tua Tagovailoa", team: "MIA", ranking: 108 },
          { name: "Xavier Legette", team: "CAR", ranking: 109 },
          { name: "James Conner", team: "ARI", ranking: 110 },
          { name: "Dallas Goedert", team: "PHI", ranking: 111 },
          { name: "Zach Charbonnet", team: "SEA", ranking: 112 },
          { name: "Devin Singletary", team: "NYG", ranking: 113 },
          { name: "MarShawn Lloyd", team: "GB", ranking: 114 },
          { name: "Drake Maye", team: "NE", ranking: 115 },
          { name: "DeAndre Hopkins", team: "TEN", ranking: 116 },
          { name: "Jared Goff", team: "DET", ranking: 117 },
          { name: "Pat Freiermuth", team: "PIT", ranking: 118 },
          { name: "Nick Chubb", team: "CLE", ranking: 119 },
          { name: "Jaylen Wright", team: "MIA", ranking: 120 },
          { name: "Chase Brown", team: "CIN", ranking: 121 },
          { name: "Josh Downs", team: "IND", ranking: 122 },
          { name: "Ben Sinnott", team: "WAS", ranking: 123 },
          { name: "Ja'Lynn Polk", team: "NE", ranking: 124 },
          { name: "Courtland Sutton", team: "DEN", ranking: 125 },
          { name: "Dalton Schultz", team: "HOU", ranking: 126 },
          { name: "Zack Moss", team: "CIN", ranking: 127 },
          { name: "Cole Kmet", team: "CHI", ranking: 128 },
          { name: "Luke Musgrave", team: "GB", ranking: 129 },
          { name: "Romeo Doubs", team: "GB", ranking: 130 },
          { name: "Roman Wilson", team: "PIT", ranking: 131 },
          { name: "Jakobi Meyers", team: "LV", ranking: 132 },
          { name: "Raheem Mostert", team: "MIA", ranking: 133 },
          { name: "Austin Ekeler", team: "WAS", ranking: 134 },
          { name: "J.J. McCarthy", team: "MIN", ranking: 135 },
          { name: "Jerry Jeudy", team: "CLE", ranking: 136 },
          { name: "Jerome Ford", team: "CLE", ranking: 137 },
          { name: "Bryce Young", team: "CAR", ranking: 138 },
            { name: "Ray Davis", team: "BUF", ranking: 139 },
            { name: "Jermaine Burton", team: "CIN", ranking: 140 },
            { name: "Deshaun Watson", team: "CLE", ranking: 141 },
            { name: "Dontayvion Wicks", team: "GB", ranking: 142 },
            { name: "Joshua Palmer", team: "LAC", ranking: 143 },
            { name: "Isaiah Likely", team: "BAL", ranking: 144 },
            { name: "Jahan Dotson", team: "PHI", ranking: 145 },
            { name: "Gabe Davis", team: "JAC", ranking: 146 },
            { name: "Troy Franklin", team: "DEN", ranking: 147 },
            { name: "Tucker Kraft", team: "GB", ranking: 148 },
            { name: "Will Levis", team: "TEN", ranking: 149 },
            { name: "Javon Baker", team: "NE", ranking: 150 },
            { name: "Baker Mayfield", team: "TB", ranking: 151 },
            { name: "Kirk Cousins", team: "ATL", ranking: 152 },
            { name: "Tyler Lockett", team: "SEA", ranking: 153 },
            { name: "Chuba Hubbard", team: "CAR", ranking: 154 },
            { name: "Rashid Shaheed", team: "NO", ranking: 155 },
            { name: "Rico Dowdle", team: "DAL", ranking: 156 },
            { name: "Kendre Miller", team: "NO", ranking: 157 },
            { name: "Bo Nix", team: "DEN", ranking: 158 },
            { name: "Ja'Tavion Sanders", team: "CAR", ranking: 159 },
            { name: "Jaleel McLaughlin", team: "DEN", ranking: 160 },
            { name: "Matthew Stafford", team: "LAR", ranking: 161 },
            { name: "Marvin Mims Jr.", team: "DEN", ranking: 162 },
            { name: "Curtis Samuel", team: "BUF", ranking: 163 },
            { name: "Gus Edwards", team: "LAC", ranking: 164 },
            { name: "Noah Fant", team: "SEA", ranking: 165 },
            { name: "Roschon Johnson", team: "CHI", ranking: 166 },
            { name: "Khalil Shakir", team: "BUF", ranking: 167 },
            { name: "Tyler Allgeier", team: "ATL", ranking: 168 },
            { name: "Jalen McMillan", team: "TB", ranking: 169 },
            { name: "Kimani Vidal", team: "LAC", ranking: 170 },
            { name: "Luke McCaffrey", team: "WAS", ranking: 171 },
            { name: "Bucky Irving", team: "TB", ranking: 172 },
            { name: "Cade Otton", team: "TB", ranking: 173 },
            { name: "Antonio Gibson", team: "NE", ranking: 174 },
            { name: "Michael Mayer", team: "LV", ranking: 175 },
            { name: "Tyrone Tracy Jr.", team: "NYG", ranking: 176 },
            { name: "Michael Penix Jr.", team: "ATL", ranking: 177 },
            { name: "Mike Williams", team: "NYJ", ranking: 178 },
            { name: "Khalil Herbert", team: "CHI", ranking: 179 },
            { name: "Braelon Allen", team: "NYJ", ranking: 180 },
            { name: "Malachi Corley", team: "NYJ", ranking: 181 },
            { name: "DeMario Douglas", team: "NE", ranking: 182 },
            { name: "Quentin Johnston", team: "LAC", ranking: 183 },
            { name: "Michael Wilson", team: "ARI", ranking: 184 },
            { name: "Audric Estime", team: "DEN", ranking: 185 },
            { name: "Baltimore Ravens", team: "BAL", ranking: 186 },
            { name: "Rashod Bateman", team: "BAL", ranking: 187 },
            { name: "Buffalo Bills", team: "BUF", ranking: 188 },
            { name: "Ty Chandler", team: "MIN", ranking: 189 },
            { name: "Wan'Dale Robinson", team: "NYG", ranking: 190 },
            { name: "Dallas Cowboys", team: "DAL", ranking: 191 },
            { name: "Hunter Henry", team: "NE", ranking: 192 },
            { name: "Darnell Mooney", team: "ATL", ranking: 193 },
            { name: "Brandin Cooks", team: "DAL", ranking: 194 },
            { name: "J.K. Dobbins", team: "LAC", ranking: 195 },
            { name: "Keaton Mitchell", team: "BAL", ranking: 196 },
            { name: "San Francisco 49ers", team: "SF", ranking: 197 },
            { name: "Chigoziem Okonkwo", team: "TEN", ranking: 198 },
            { name: "Ezekiel Elliott", team: "DAL", ranking: 199 },
            { name: "Jalin Hyatt", team: "NYG", ranking: 200 },
            { name: "Will Shipley", team: "PHI", ranking: 201 },
            { name: "Justin Tucker", team: "BAL", ranking: 202 },
            { name: "Geno Smith", team: "SEA", ranking: 203 },
            { name: "Justin Fields", team: "PIT", ranking: 204 },
            { name: "Juwan Johnson", team: "NO", ranking: 205 },
            { name: "Pittsburgh Steelers", team: "PIT", ranking: 206 },
            { name: "Dameon Pierce", team: "HOU", ranking: 207 },
            { name: "Greg Dulcich", team: "DEN", ranking: 208 },
            { name: "New York Jets", team: "NYJ", ranking: 209 },
            { name: "Dylan Laube", team: "LV", ranking: 210 }
          ]
      
      
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
        const getUsers = fetch('https://api.sleeper.app/v1/league/1048428157226868736/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
        const getRankings = fetch('https://api.fantasynerds.com/v1/nfl/dynasty?apikey=TEST')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
          
        
            Promise.all([getPlayers, getTeams, getUsers, getRankings])
            .then(([call1, call2, call3, call4]) => {
                this.setState({
                    playerinfo: call1,
                    teaminfo: call2,
                    userinfo: call3,
                    rankingsinfo: call4,
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



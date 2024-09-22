import './App.css';
import AllTeams from './Components/AllTeams';
import Header from './Components/Header';
import React, { Component } from 'react'
import TeamDetails from './Components/TeamDetails';
import Form from './Components/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { getTeams, getPlayers } from './APICalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teaminfo: [],
      playerinfo: [],
      userinfo: [],
      rankingsinfo: [],
      leagueId:'1048428157226868736',
      dynastyRankings: [
        { ranking: 1, name: "Justin Jefferson", team: "MIN", position: "WR1", age: 24 },
        { ranking: 2, name: "Ja'Marr Chase", team: "CIN", position: "WR2", age: 24 },
        { ranking: 3, name: "CeeDee Lamb", team: "DAL", position: "WR3", age: 25 },
        { ranking: 4, name: "Breece Hall", team: "NYJ", position: "RB1", age: 23 },
        { ranking: 5, name: "Amon-Ra St. Brown", team: "DET", position: "WR4", age: 24 },
        { ranking: 6, name: "Bijan Robinson", team: "ATL", position: "RB2", age: 22 },
        { ranking: 7, name: "Garrett Wilson", team: "NYJ", position: "WR5", age: 24 },
        { ranking: 8, name: "Marvin Harrison", team: "ARI", position: "WR6", age: 21 },
        { ranking: 9, name: "Jahmyr Gibbs", team: "DET", position: "RB3", age: 22 },
        { ranking: 10, name: "A.J. Brown", team: "PHI", position: "WR7", age: 26 },
        { ranking: 11, name: "Malik Nabers", team: "NYG", position: "WR8", age: 21 },
        { ranking: 12, name: "Jonathan Taylor", team: "IND", position: "RB4", age: 25 },
        { ranking: 13, name: "Christian McCaffrey", team: "SF", position: "RB5", age: 28 },
        { ranking: 14, name: "Puka Nacua", team: "LAR", position: "WR9", age: 23 },
        { ranking: 15, name: "Tyreek Hill", team: "MIA", position: "WR10", age: 30 },
        { ranking: 16, name: "Chris Olave", team: "NO", position: "WR11", age: 23 },
        { ranking: 17, name: "Sam LaPorta", team: "DET", position: "TE1", age: 22 },
        { ranking: 18, name: "Jaylen Waddle", team: "MIA", position: "WR12", age: 25 },
        { ranking: 19, name: "Brandon Aiyuk", team: "SF", position: "WR13", age: 26 },
        { ranking: 20, name: "De'Von Achane", team: "MIA", position: "RB6", age: 22 },
        { ranking: 21, name: "DeVonta Smith", team: "PHI", position: "WR14", age: 25 },
        { ranking: 22, name: "Josh Allen", team: "BUF", position: "QB1", age: 28 },
        { ranking: 23, name: "Travis Etienne", team: "JAC", position: "RB7", age: 25 },
        { ranking: 24, name: "Rome Odunze", team: "CHI", position: "WR15", age: 21 },
        { ranking: 25, name: "Nico Collins", team: "HOU", position: "WR16", age: 25 },
        { ranking: 26, name: "Patrick Mahomes", team: "KC", position: "QB2", age: 29 },
        { ranking: 27, name: "Drake London", team: "ATL", position: "WR17", age: 23 },
        { ranking: 28, name: "Trey McBride", team: "ARI", position: "TE2", age: 24 },
        { ranking: 29, name: "DJ Moore", team: "CHI", position: "WR18", age: 26 },
        { ranking: 30, name: "Michael Pittman", team: "IND", position: "WR19", age: 26 },
        { ranking: 31, name: "Saquon Barkley", team: "PHI", position: "RB8", age: 27 },
        { ranking: 32, name: "Zay Flowers", team: "BAL", position: "WR20", age: 23 },
        { ranking: 33, name: "DK Metcalf", team: "SEA", position: "WR21", age: 26 },
        { ranking: 34, name: "Rashee Rice", team: "KC", position: "WR22", age: 24 },
        { ranking: 35, name: "C.J. Stroud", team: "HOU", position: "QB3", age: 23 },
        { ranking: 36, name: "Jalen Hurts", team: "PHI", position: "QB4", age: 26 },
        { ranking: 37, name: "Kenneth Walker", team: "SEA", position: "RB9", age: 23 },
        { ranking: 38, name: "Lamar Jackson", team: "BAL", position: "QB5", age: 27 },
        { ranking: 39, name: "Jonathon Brooks", team: "CAR", position: "RB10", age: 22 },
        { ranking: 40, name: "Brock Bowers", team: "LV", position: "TE3", age: 22 },
        { ranking: 41, name: "James Cook", team: "BUF", position: "RB11", age: 24 },
        { ranking: 42, name: "Kyren Williams", team: "LAR", position: "RB12", age: 24 },
        { ranking: 43, name: "Kyle Pitts", team: "ATL", position: "TE4", age: 23 },
        { ranking: 44, name: "Joe Burrow", team: "CIN", position: "QB6", age: 27 },
        { ranking: 45, name: "Jordan Addison", team: "MIN", position: "WR23", age: 22 },
        { ranking: 46, name: "Tee Higgins", team: "CIN", position: "WR24", age: 25 },
        { ranking: 47, name: "Deebo Samuel", team: "SF", position: "WR25", age: 28 },
        { ranking: 48, name: "Rachaad White", team: "TB", position: "RB13", age: 25 },
        { ranking: 49, name: "Isiah Pacheco", team: "KC", position: "RB14", age: 24 },
        { ranking: 50, name: "George Pickens", team: "PIT", position: "WR26", age: 24 },  { ranking: 51, name: "Tank Dell", team: "HOU", position: "WR27", age: 24 },
        { ranking: 52, name: "Dalton Kincaid", team: "BUF", position: "TE5", age: 24 },
        { ranking: 53, name: "Anthony Richardson", team: "IND", position: "QB7", age: 22 },
        { ranking: 54, name: "Mark Andrews", team: "BAL", position: "TE6", age: 29 },
        { ranking: 55, name: "Jaxon Smith-Njigba", team: "SEA", position: "WR28", age: 22 },
        { ranking: 56, name: "Josh Jacobs", team: "GB", position: "RB15", age: 26 },
        { ranking: 57, name: "Trey Benson", team: "ARI", position: "RB16", age: 22 },
        { ranking: 58, name: "Jayden Reed", team: "GB", position: "WR29", age: 24 },
        { ranking: 59, name: "Xavier Worthy", team: "KC", position: "WR30", age: 21 },
        { ranking: 60, name: "Kyler Murray", team: "ARI", position: "QB8", age: 27 },
        { ranking: 61, name: "Ladd McConkey", team: "LAC", position: "WR31", age: 22 },
        { ranking: 62, name: "Justin Herbert", team: "LAC", position: "QB9", age: 26 },
        { ranking: 63, name: "Jordan Love", team: "GB", position: "QB10", age: 25 },
        { ranking: 64, name: "Caleb Williams", team: "CHI", position: "QB11", age: 22 },
        { ranking: 65, name: "Mike Evans", team: "TB", position: "WR32", age: 31 },
        { ranking: 66, name: "Davante Adams", team: "LV", position: "WR33", age: 31 },
        { ranking: 67, name: "T.J. Hockenson", team: "MIN", position: "TE7", age: 27 },
        { ranking: 68, name: "Rhamondre Stevenson", team: "NE", position: "RB17", age: 26 },
        { ranking: 69, name: "George Kittle", team: "SF", position: "TE8", age: 30 },
        { ranking: 70, name: "Stefon Diggs", team: "HOU", position: "WR34", age: 30 },
        { ranking: 71, name: "Brian Thomas", team: "JAC", position: "WR35", age: 21 },
        { ranking: 72, name: "Diontae Johnson", team: "CAR", position: "WR36", age: 28 },
        { ranking: 73, name: "Joe Mixon", team: "HOU", position: "RB18", age: 28 },
        { ranking: 74, name: "Jayden Daniels", team: "WAS", position: "QB12", age: 23 },
        { ranking: 75, name: "David Montgomery", team: "DET", position: "RB19", age: 27 },
        { ranking: 76, name: "Christian Kirk", team: "JAC", position: "WR37", age: 27 },
        { ranking: 77, name: "Chris Godwin", team: "TB", position: "WR38", age: 28 },
        { ranking: 78, name: "Cooper Kupp", team: "LAR", position: "WR39", age: 31 },
        { ranking: 79, name: "Tony Pollard", team: "TEN", position: "RB20", age: 27 },
        { ranking: 80, name: "D'Andre Swift", team: "CHI", position: "RB21", age: 25 },
        { ranking: 81, name: "Amari Cooper", team: "CLE", position: "WR40", age: 30 },
        { ranking: 82, name: "Travis Kelce", team: "KC", position: "TE9", age: 34 },
        { ranking: 83, name: "Evan Engram", team: "JAC", position: "TE10", age: 30 },
        { ranking: 84, name: "Javonte Williams", team: "DEN", position: "RB22", age: 24 },
        { ranking: 85, name: "Terry McLaurin", team: "WAS", position: "WR41", age: 29 },
        { ranking: 86, name: "Tyjae Spears", team: "TEN", position: "RB23", age: 23 },
        { ranking: 87, name: "Derrick Henry", team: "BAL", position: "RB24", age: 30 },
        { ranking: 88, name: "Jameson Williams", team: "DET", position: "WR42", age: 23 },
        { ranking: 89, name: "Christian Watson", team: "GB", position: "WR43", age: 25 },
        { ranking: 90, name: "Trevor Lawrence", team: "JAC", position: "QB13", age: 24 },
        { ranking: 91, name: "David Njoku", team: "CLE", position: "TE11", age: 28 },
        { ranking: 92, name: "Dak Prescott", team: "DAL", position: "QB14", age: 31 },
        { ranking: 93, name: "Calvin Ridley", team: "TEN", position: "WR44", age: 29 },
        { ranking: 94, name: "Najee Harris", team: "PIT", position: "RB25", age: 26 },
        { ranking: 95, name: "Brock Purdy", team: "SF", position: "QB15", age: 24 },
        { ranking: 96, name: "Jake Ferguson", team: "DAL", position: "TE12", age: 25 },
        { ranking: 97, name: "Keon Coleman", team: "BUF", position: "WR45", age: 21 },
        { ranking: 98, name: "Blake Corum", team: "LAR", position: "RB26", age: 23 },
        { ranking: 99, name: "Alvin Kamara", team: "NO", position: "RB27", age: 29 },
        { ranking: 100, name: "Brian Robinson", team: "WAS", position: "RB28", age: 25 },
        { ranking: 101, name: "Zamir White", team: "LV", position: "RB29", age: 25 },
  { ranking: 102, name: "Tua Tagovailoa", team: "MIA", position: "QB16", age: 26 },
  { ranking: 103, name: "Jaylen Warren", team: "PIT", position: "RB30", age: 25 },
  { ranking: 104, name: "Courtland Sutton", team: "DEN", position: "WR46", age: 28 },
  { ranking: 105, name: "Marquise Brown", team: "KC", position: "WR47", age: 27 },
  { ranking: 106, name: "Isaiah Likely", team: "BAL", position: "TE13", age: 24 },
  { ranking: 107, name: "Ricky Pearsall", team: "SF", position: "WR48", age: 24 },
  { ranking: 108, name: "Jared Goff", team: "DET", position: "QB17", age: 29 },
  { ranking: 109, name: "Adonai Mitchell", team: "IND", position: "WR49", age: 21 },
  { ranking: 110, name: "Drake Maye", team: "NE", position: "QB18", age: 22 },
  { ranking: 111, name: "Josh Downs", team: "IND", position: "WR50", age: 23 },
  { ranking: 112, name: "Aaron Jones", team: "MIN", position: "RB31", age: 29 },
  { ranking: 113, name: "MarShawn Lloyd", team: "GB", position: "RB32", age: 23 },
  { ranking: 114, name: "Pat Freiermuth", team: "PIT", position: "TE14", age: 25 },
  { ranking: 115, name: "Keenan Allen", team: "CHI", position: "WR51", age: 32 },
  { ranking: 116, name: "Zach Charbonnet", team: "SEA", position: "RB33", age: 23 },
  { ranking: 117, name: "James Conner", team: "ARI", position: "RB34", age: 29 },
  { ranking: 118, name: "Jerry Jeudy", team: "CLE", position: "WR52", age: 25 },
  { ranking: 119, name: "Romeo Doubs", team: "GB", position: "WR53", age: 24 },
  { ranking: 120, name: "Dallas Goedert", team: "PHI", position: "TE15", age: 29 },
  { ranking: 121, name: "Bryce Young", team: "CAR", position: "QB19", age: 23 },
  { ranking: 122, name: "Chase Brown", team: "CIN", position: "RB35", age: 24 },
  { ranking: 123, name: "Ja'Lynn Polk", team: "NE", position: "WR54", age: 22 },
  { ranking: 124, name: "Xavier Legette", team: "CAR", position: "WR55", age: 23 },
  { ranking: 125, name: "Nick Chubb", team: "CLE", position: "RB36", age: 28 },
  { ranking: 126, name: "DeAndre Hopkins", team: "TEN", position: "WR56", age: 32 },
  { ranking: 127, name: "Zack Moss", team: "CIN", position: "RB37", age: 26 },
  { ranking: 128, name: "Bo Nix", team: "DEN", position: "QB20", age: 24 },
  { ranking: 129, name: "Jerome Ford", team: "CLE", position: "RB38", age: 25 },
  { ranking: 130, name: "Jaylen Wright", team: "MIA", position: "RB39", age: 21 },
  { ranking: 131, name: "J.J. McCarthy", team: "MIN", position: "QB21", age: 21 },
  { ranking: 132, name: "Jermaine Burton", team: "CIN", position: "WR57", age: 23 },
  { ranking: 133, name: "Joshua Palmer", team: "LAC", position: "WR58", age: 25 },
  { ranking: 134, name: "Khalil Shakir", team: "BUF", position: "WR59", age: 24 },
  { ranking: 135, name: "Dalton Schultz", team: "HOU", position: "TE16", age: 28 },
  { ranking: 136, name: "Rashid Shaheed", team: "NO", position: "WR60", age: 26 },
  { ranking: 137, name: "Roman Wilson", team: "PIT", position: "WR61", age: 23 },
  { ranking: 138, name: "Devin Singletary", team: "NYG", position: "RB40", age: 27 },
  { ranking: 139, name: "Deshaun Watson", team: "CLE", position: "QB22", age: 29 },
  { ranking: 140, name: "Baker Mayfield", team: "TB", position: "QB23", age: 29 },
  { ranking: 141, name: "Ben Sinnott", team: "WAS", position: "TE17", age: 22 },
  { ranking: 142, name: "Austin Ekeler", team: "WAS", position: "RB41", age: 29 },
  { ranking: 143, name: "Michael Wilson", team: "ARI", position: "WR62", age: 24 },
  { ranking: 144, name: "Dontayvion Wicks", team: "GB", position: "WR63", age: 23 },
  { ranking: 145, name: "Jakobi Meyers", team: "LV", position: "WR64", age: 27 },
  { ranking: 146, name: "Marvin Mims", team: "DEN", position: "WR65", age: 22 },
  { ranking: 147, name: "Troy Franklin", team: "DEN", position: "WR66", age: 21 },
  { ranking: 148, name: "Ray Davis", team: "BUF", position: "RB42", age: 24 },
  { ranking: 149, name: "Tyler Lockett", team: "SEA", position: "WR67", age: 31 },
  { ranking: 150, name: "Cole Kmet", team: "CHI", position: "TE18", age: 25 },
  { ranking: 151, name: "Luke Musgrave", team: "GB", position: "TE19", age: 24 },
  { ranking: 152, name: "Will Levis", team: "TEN", position: "QB24", age: 25 },
  { ranking: 153, name: "Curtis Samuel", team: "BUF", position: "WR68", age: 28 },
  { ranking: 154, name: "Jahan Dotson", team: "PHI", position: "WR69", age: 24 },
  { ranking: 155, name: "Tucker Kraft", team: "GB", position: "TE20", age: 23 },
  { ranking: 156, name: "Matthew Stafford", team: "LAR", position: "QB25", age: 36 },
  { ranking: 157, name: "Javon Baker", team: "NE", position: "WR70", age: 22 },
  { ranking: 158, name: "Bucky Irving", team: "TB", position: "RB43", age: 22 },
  { ranking: 159, name: "Raheem Mostert", team: "MIA", position: "RB44", age: 32 },
  { ranking: 160, name: "Jalen McMillan", team: "TB", position: "WR71", age: 22 },
  { ranking: 161, name: "Michael Mayer", team: "LV", position: "TE21", age: 23 },
  { ranking: 162, name: "Chuba Hubbard", team: "CAR", position: "RB45", age: 25 },
    { ranking: 163, name: "Kendre Miller", team: "NO", position: "RB46", age: 22 },
    { ranking: 164, name: "Gabe Davis", team: "JAC", position: "WR72", age: 25 },
    { ranking: 165, name: "Kimani Vidal", team: "LAC", position: "RB47", age: 23 },
    { ranking: 166, name: "J.K. Dobbins", team: "LAC", position: "RB48", age: 25 },
    { ranking: 167, name: "Tyrone Tracy", team: "NYG", position: "RB49", age: 24 },
    { ranking: 168, name: "Mike Williams", team: "NYJ", position: "WR73", age: 29 },
    { ranking: 169, name: "Roschon Johnson", team: "CHI", position: "RB50", age: 23 },
    { ranking: 170, name: "Justin Fields", team: "PIT", position: "QB26", age: 25 },
    { ranking: 171, name: "Wan'Dale Robinson", team: "NYG", position: "WR74", age: 23 },
    { ranking: 172, name: "Quentin Johnston", team: "LAC", position: "WR75", age: 23 },
    { ranking: 173, name: "Chig Okonkwo", team: "TEN", position: "TE22", age: 25 },
    { ranking: 174, name: "Will Shipley", team: "PHI", position: "RB51", age: 22 },
    { ranking: 175, name: "Gus Edwards", team: "LAC", position: "RB52", age: 29 },
    { ranking: 176, name: "Kirk Cousins", team: "ATL", position: "QB27", age: 36 },
    { ranking: 177, name: "Cade Otton", team: "TB", position: "TE23", age: 25 },
    { ranking: 178, name: "Darnell Mooney", team: "ATL", position: "WR76", age: 26 },
    { ranking: 179, name: "Ty Chandler", team: "MIN", position: "RB53", age: 26 },
    { ranking: 180, name: "Rashod Bateman", team: "BAL", position: "WR77", age: 24 },
    { ranking: 181, name: "Brandin Cooks", team: "DAL", position: "WR78", age: 31 },
    { ranking: 182, name: "Noah Fant", team: "SEA", position: "TE24", age: 26 },
    { ranking: 183, name: "Tyler Allgeier", team: "ATL", position: "RB54", age: 24 },
    { ranking: 184, name: "Luke McCaffrey", team: "WAS", position: "WR79", age: 23 },
    { ranking: 185, name: "Michael Penix", team: "ATL", position: "QB28", age: 24 },
    { ranking: 186, name: "Malachi Corley", team: "NYJ", position: "WR80", age: 22 },
    { ranking: 187, name: "Ja'Tavion Sanders", team: "CAR", position: "TE25", age: 21 },
    { ranking: 188, name: "DeMario Douglas", team: "NE", position: "WR81", age: 23 },
    { ranking: 189, name: "Audric Estime", team: "DEN", position: "RB55", age: 21 },
    { ranking: 190, name: "Hunter Henry", team: "NE", position: "TE26", age: 29 },
    { ranking: 191, name: "Theo Johnson", team: "NYG", position: "TE27", age: 23 },
    { ranking: 192, name: "Antonio Gibson", team: "NE", position: "RB56", age: 26 },
    { ranking: 193, name: "Jalin Hyatt", team: "NYG", position: "WR82", age: 22 },
    { ranking: 194, name: "Geno Smith", team: "SEA", position: "QB29", age: 33 },
    { ranking: 195, name: "Isaac Guerendo", team: "SF", position: "RB57", age: 24 },
    { ranking: 196, name: "Juwan Johnson", team: "NO", position: "TE28", age: 28 },
    { ranking: 197, name: "Ezekiel Elliott", team: "DAL", position: "RB58", age: 29 },
    { ranking: 198, name: "Braelon Allen", team: "NYJ", position: "RB59", age: 20 },
    { ranking: 199, name: "Elijah Moore", team: "CLE", position: "WR83", age: 24 },
    { ranking: 200, name: "Jaleel McLaughlin", team: "DEN", position: "RB60", age: 24 },
    { ranking: 201, name: "Rico Dowdle", team: "DAL", position: "RB61", age: 26 },
    { ranking: 202, name: "Tyler Conklin", team: "NYJ", position: "TE29", age: 29 },
    { ranking: 203, name: "Keaton Mitchell", team: "BAL", position: "RB62", age: 22 },
    { ranking: 204, name: "Dameon Pierce", team: "HOU", position: "RB63", age: 24 },
    { ranking: 205, name: "Greg Dulcich", team: "DEN", position: "TE30", age: 24 },
    { ranking: 206, name: "Khalil Herbert", team: "CHI", position: "RB64", age: 26 },
    { ranking: 207, name: "Tank Bigsby", team: "JAC", position: "RB65", age: 23 },
    { ranking: 208, name: "Adam Thielen", team: "CAR", position: "WR84", age: 34 },
    { ranking: 209, name: "Treylon Burks", team: "TEN", position: "WR85", age: 24 },
    { ranking: 210, name: "Alexander Mattison", team: "LV", position: "RB66", age: 26 },
    { ranking: 211, name: "Taysom Hill", team: "NO", position: "TE31", age: 34 },
    { ranking: 212, name: "Andrei Iosivas", team: "CIN", position: "WR86", age: 24 },
    { ranking: 213, name: "Tyler Boyd", team: "TEN", position: "WR87", age: 29 },
    { ranking: 214, name: "Trey Palmer", team: "TB", position: "WR88", age: 23 },
    { ranking: 215, name: "Dylan Laube", team: "LV", position: "RB67", age: 24 },
    { ranking: 216, name: "Jonathan Mingo", team: "CAR", position: "WR89", age: 23 },
    { ranking: 217, name: "Noah Brown", team: "WAS", position: "WR90", age: 28 },
    { ranking: 218, name: "Jelani Woods", team: "IND", position: "TE32", age: 25 },
    { ranking: 219, name: "Elijah Mitchell", team: "SF", position: "RB68", age: 26 },
    { ranking: 220, name: "Brenden Rice", team: "LAC", position: "WR91", age: 22 },
    { ranking: 221, name: "K.J. Osborn", team: "NE", position: "WR92", age: 27 },
    { ranking: 222, name: "Devontez Walker", team: "BAL", position: "WR93", age: 23 },
    { ranking: 223, name: "Aaron Rodgers", team: "NYJ", position: "QB30", age: 40 },
    { ranking: 224, name: "A.T. Perry", team: "NO", position: "WR94", age: 24 },
    { ranking: 225, name: "Derek Carr", team: "NO", position: "QB31", age: 33 },
    { ranking: 226, name: "Tutu Atwell", team: "LAR", position: "WR95", age: 24 },
    { ranking: 227, name: "Odell Beckham", team: "MIA", position: "WR96", age: 31 },
    { ranking: 228, name: "Colby Parkinson", team: "LAR", position: "TE33", age: 25 },
    { ranking: 229, name: "Jordan Mason", team: "SF", position: "RB69", age: 25 },
    { ranking: 230, name: "AJ Dillon", team: "GB", position: "RB70", age: 26 },
    { ranking: 231, name: "Rondale Moore", team: "ATL", position: "WR97", age: 24 },
    { ranking: 232, name: "Jonnu Smith", team: "MIA", position: "TE34", age: 29 },
    { ranking: 233, name: "Cedric Tillman", team: "CLE", position: "WR98", age: 24 },
    { ranking: 234, name: "DJ Chark", team: "LAC", position: "WR99", age: 28 },
    { ranking: 235, name: "Jalen Tolbert", team: "DAL", position: "WR100", age: 25 },
    { ranking: 236, name: "Darius Slayton", team: "NYG", position: "WR101", age: 27 },
    { ranking: 237, name: "Miles Sanders", team: "CAR", position: "RB71", age: 27 },
    { ranking: 238, name: "Daniel Bellinger", team: "NYG", position: "TE35", age: 24 },
    { ranking: 239, name: "Samaje Perine", team: "KC", position: "RB72", age: 29 },
    { ranking: 240, name: "Alec Pierce", team: "IND", position: "WR102", age: 24 },
    { ranking: 241, name: "Malik Washington", team: "MIA", position: "WR103", age: 23 },
    { ranking: 242, name: "Erick All", team: "CIN", position: "TE36", age: 24 },
    { ranking: 243, name: "Skyy Moore", team: "KC", position: "WR104", age: 24 },
    { ranking: 244, name: "Justice Hill", team: "BAL", position: "RB73", age: 26 },
    { ranking: 245, name: "Cade Stover", team: "HOU", position: "TE37", age: 24 },
    { ranking: 246, name: "Gerald Everett", team: "CHI", position: "TE38", age: 30 },
    { ranking: 247, name: "Rasheen Ali", team: "BAL", position: "RB74", age: 23 },
    { ranking: 248, name: "Zay Jones", team: "ARI", position: "WR105", age: 29 },
    { ranking: 249, name: "Kenneth Gainwell", team: "PHI", position: "RB75", age: 25 },
    { ranking: 250, name: "Tre Tucker", team: "LV", position: "WR106", age: 23 },
    { ranking: 251, name: "Isaiah Davis", team: "NYJ", position: "RB76", age: 22 },
    { ranking: 252, name: "Jaheim Bell", team: "NE", position: "TE39", age: 23 },
    { ranking: 253, name: "Sam Darnold", team: "MIN", position: "QB32", age: 27 },
    { ranking: 254, name: "Kendrick Bourne", team: "NE", position: "WR107", age: 29 },
    { ranking: 255, name: "Daniel Jones", team: "NYG", position: "QB33", age: 27 },
    { ranking: 256, name: "Greg Dortch", team: "ARI", position: "WR108", age: 26 },
    { ranking: 257, name: "Jacob Cowing", team: "SF", position: "WR109", age: 23 },
    { ranking: 258, name: "Jamaal Williams", team: "NO", position: "RB77", age: 29 },
    { ranking: 259, name: "D'Onta Foreman", team: "CLE", position: "RB78", age: 28 },
    { ranking: 260, name: "Dawson Knox", team: "BUF", position: "TE40", age: 27 },
    { ranking: 261, name: "Mike Gesicki", team: "CIN", position: "TE41", age: 28 },
    { ranking: 262, name: "Jamari Thrash", team: "CLE", position: "WR110", age: 23 },
    { ranking: 263, name: "Clyde Edwards-Helaire", team: "KC", position: "RB79", age: 25 },
    { ranking: 264, name: "Pierre Strong", team: "CLE", position: "RB80", age: 25 },
    { ranking: 265, name: "Tyler Higbee", team: "LAR", position: "TE42", age: 31 },
    { ranking: 266, name: "Donovan Peoples-Jones", team: "DET", position: "WR111", age: 25 },
    { ranking: 267, name: "John Metchie", team: "HOU", position: "WR112", age: 24 },
    { ranking: 268, name: "Russell Wilson", team: "PIT", position: "QB34", age: 35 },
    { ranking: 269, name: "Tyler Scott", team: "CHI", position: "WR113", age: 22 },
    { ranking: 270, name: "Parker Washington", team: "JAC", position: "WR114", age: 22 },
    { ranking: 271, name: "Cam Akers", team: "HOU", position: "RB81", age: 25 },
    { ranking: 272, name: "Van Jefferson", team: "PIT", position: "WR115", age: 28 },
    { ranking: 273, name: "Brevin Jordan", team: "HOU", position: "TE43", age: 24 },
    { ranking: 274, name: "Jauan Jennings", team: "SF", position: "WR116", age: 27 },
    { ranking: 275, name: "Sam Howell", team: "SEA", position: "QB35", age: 24 },
    { ranking: 276, name: "Tyquan Thornton", team: "NE", position: "WR117", age: 24 },
    { ranking: 277, name: "Jared Wiley", team: "KC", position: "TE44", age: 23 },
    { ranking: 278, name: "Demarcus Robinson", team: "LAR", position: "WR118", age: 30 },
    { ranking: 279, name: "Gardner Minshew", team: "LV", position: "QB36", age: 28 },
    { ranking: 280, name: "Luke Schoonmaker", team: "DAL", position: "TE45", age: 25 },
    { ranking: 281, name: "Michael Carter", team: "ARI", position: "RB82", age: 25 },
    { ranking: 282, name: "Will Dissly", team: "LAC", position: "TE46", age: 28 },
    { ranking: 283, name: "Calvin Austin", team: "PIT", position: "WR119", age: 25 },
    { ranking: 284, name: "JuJu Smith-Schuster", team: "KC", position: "WR120", age: 27 },
    { ranking: 285, name: "Jeff Wilson", team: "MIA", position: "RB83", age: 28 },
    { ranking: 286, name: "Johnny Wilson", team: "PHI", position: "WR121", age: 23 },
    { ranking: 287, name: "Kylen Granson", team: "IND", position: "TE47", age: 26 },
    { ranking: 288, name: "Zach Ertz", team: "WAS", position: "TE48", age: 33 },
    { ranking: 289, name: "Emari Demercado", team: "ARI", position: "RB84", age: 25 },
    { ranking: 290, name: "Hayden Hurst", team: "LAC", position: "TE49", age: 31 },
    { ranking: 291, name: "Jordan Whittington", team: "LAR", position: "WR122", age: 23 },
    { ranking: 292, name: "Trey Lance", team: "DAL", position: "QB37", age: 24 },
    { ranking: 293, name: "Israel Abanikanda", team: "NYJ", position: "RB85", age: 21 },
    { ranking: 294, name: "Harrison Butker", team: "KC", position: "K1", age: 29 },
    { ranking: 295, name: "Kadarius Toney", team: "CLE", position: "WR123", age: 25 },
    { ranking: 296, name: "Dyami Brown", team: "WAS", position: "WR124", age: 24 },
    { ranking: 297, name: "Josh Reynolds", team: "DEN", position: "WR125", age: 29 },
    { ranking: 298, name: "Evan Hull", team: "IND", position: "RB86", age: 23 },
    { ranking: 299, name: "Chris Rodriguez", team: "WAS", position: "RB87", age: 24 },
    { ranking: 300, name: "Casey Washington", team: "ATL", position: "WR126", age: 23 },
    { ranking: 301, name: "Parris Campbell", team: "PHI", position: "WR127", age: 27 },
    { ranking: 302, name: "Tim Patrick", team: "DET", position: "WR128", age: 30 },
    { ranking: 303, name: "Aidan O'Connell", team: "LV", position: "QB38", age: 26 },
    { ranking: 304, name: "Bo Melton", team: "GB", position: "WR129", age: 25 },
    { ranking: 305, name: "Darnell Washington", team: "PIT", position: "TE50", age: 23 },
    { ranking: 306, name: "Noah Gray", team: "KC", position: "TE51", age: 25 },
    { ranking: 307, name: "Baltimore Ravens", team: "BAL", position: "DST1", age: null },
    { ranking: 308, name: "San Francisco 49ers", team: "SF", position: "DST2", age: null },
    { ranking: 309, name: "Dallas Cowboys", team: "DAL", position: "DST3", age: null },
    { ranking: 310, name: "Ainias Smith", team: "PHI", position: "WR130", age: 23 },
    { ranking: 311, name: "Jake Browning", team: "CIN", position: "QB39", age: 28 },
    { ranking: 312, name: "Josh Oliver", team: "MIN", position: "TE52", age: 27 },
    { ranking: 313, name: "Jawhar Jordan", team: "FA", position: "RB88", age: 25 },
    { ranking: 314, name: "Eric Gray", team: "NYG", position: "RB89", age: 24 },
    { ranking: 315, name: "New York Jets", team: "NYJ", position: "DST4", age: null },
    { ranking: 316, name: "Hendon Hooker", team: "DET", position: "QB40", age: 26 },
    { ranking: 317, name: "Buffalo Bills", team: "BUF", position: "DST5", age: null },
    { ranking: 318, name: "Trey Sermon", team: "IND", position: "RB90", age: 25 },
    { ranking: 319, name: "Mac Jones", team: "JAC", position: "QB41", age: 26 },
    { ranking: 320, name: "Allen Lazard", team: "NYJ", position: "WR131", age: 28 },
    { ranking: 321, name: "Justin Tucker", team: "BAL", position: "K2", age: 34 },
    { ranking: 322, name: "Nelson Agholor", team: "BAL", position: "WR132", age: 31 },
    { ranking: 323, name: "Brandon Aubrey", team: "DAL", position: "K3", age: 29 },
    { ranking: 324, name: "Kenny Pickett", team: "PHI", position: "QB42", age: 26 },
    { ranking: 325, name: "Michael Thomas", team: "FA", position: "WR133", age: 31 },
    { ranking: 326, name: "Kareem Hunt", team: "KC", position: "RB91", age: 29 },
    { ranking: 327, name: "Sean Tucker", team: "TB", position: "RB92", age: 22 },
    { ranking: 328, name: "Zach Wilson", team: "DEN", position: "QB43", age: 25 },
    { ranking: 329, name: "Xavier Gipson", team: "NYJ", position: "WR134", age: 23 },
    { ranking: 330, name: "Jeremy Ruckert", team: "NYJ", position: "TE53", age: 24 },
    { ranking: 331, name: "Tyler Bass", team: "BUF", position: "K4", age: 27 },
    { ranking: 332, name: "Kenny McIntosh", team: "SEA", position: "RB93", age: 24 },
    { ranking: 333, name: "Charlie Jones", team: "CIN", position: "WR135", age: 25 },
    { ranking: 334, name: "Washington Commanders", team: "WAS", position: "DST6", age: null },
    { ranking: 335, name: "Bub Means", team: "NO", position: "WR136", age: 23 },
    { ranking: 336, name: "Philadelphia Eagles", team: "PHI", position: "DST7", age: null },
    { ranking: 337, name: "Pittsburgh Steelers", team: "PIT", position: "DST8", age: null },
    { ranking: 338, name: "Evan McPherson", team: "CIN", position: "K5", age: 25 },
    { ranking: 339, name: "Frank Gore", team: "BUF", position: "RB94", age: 22 },
    { ranking: 340, name: "Indianapolis Colts", team: "IND", position: "DST9", age: null },
    { ranking: 341, name: "Los Angeles Chargers", team: "LAC", position: "DST10", age: null },
    { ranking: 342, name: "Dallin Holker", team: "NO", position: "TE54", age: 24 },
    { ranking: 343, name: "Deneric Prince", team: "MIA", position: "RB95", age: 24 },
    { ranking: 344, name: "Kansas City Chiefs", team: "KC", position: "DST11", age: null },
    { ranking: 345, name: "Cleveland Browns", team: "CLE", position: "DST12", age: null },
    { ranking: 346, name: "Desmond Ridder", team: "ARI", position: "QB44", age: 25 },
    { ranking: 347, name: "Jake Elliott", team: "PHI", position: "K6", age: 29 },
    { ranking: 348, name: "Jake Moody", team: "SF", position: "K7", age: 24 },
    { ranking: 349, name: "Greg Joseph", team: "NYG", position: "K8", age: 30 },
    { ranking: 350, name: "Xavier Hutchinson", team: "HOU", position: "WR137", age: 24 },
    { ranking: 351, name: "Marquez Valdes-Scantling", team: "BUF", position: "WR138", age: 29 },
    { ranking: 352, name: "Isaiah Hodgins", team: "NYG", position: "WR139", age: 25 },
    { ranking: 353, name: "Will Mallory", team: "IND", position: "TE55", age: 25 },
    { ranking: 354, name: "Denver Broncos", team: "DEN", position: "DST13", age: null },
    { ranking: 355, name: "Justin Watson", team: "KC", position: "WR140", age: 28 },
    { ranking: 356, name: "New England Patriots", team: "NE", position: "DST14", age: null },
    { ranking: 357, name: "Jason Sanders", team: "MIA", position: "K9", age: 28 },
    { ranking: 358, name: "Jalen Coker", team: "CAR", position: "WR141", age: 22 },
    { ranking: 359, name: "Tommy Tremble", team: "CAR", position: "TE56", age: 24 },
    { ranking: 360, name: "Blake Watson", team: "DEN", position: "RB96", age: 24 },
    { ranking: 361, name: "Younghoe Koo", team: "ATL", position: "K10", age: 30 },
    { ranking: 362, name: "Daniel Carlson", team: "LV", position: "K11", age: 29 },
    { ranking: 363, name: "Durham Smythe", team: "MIA", position: "TE57", age: 29 },
    { ranking: 364, name: "Jacoby Brissett", team: "NE", position: "QB45", age: 31 },
    { ranking: 365, name: "Jake Bobo", team: "SEA", position: "WR142", age: 26 },
    { ranking: 366, name: "Robert Woods", team: "HOU", position: "WR143", age: 32 },
    { ranking: 367, name: "Jimmy Garoppolo", team: "LAR", position: "QB46", age: 32 },
    { ranking: 368, name: "Tampa Bay Buccaneers", team: "TB", position: "DST15", age: null },
    { ranking: 369, name: "David Bell", team: "CLE", position: "WR144", age: 23 },
    { ranking: 370, name: "Jacksonville Jaguars", team: "JAC", position: "DST16", age: null },
    { ranking: 371, name: "Adam Trautman", team: "DEN", position: "TE58", age: 27 },
    { ranking: 372, name: "Jason Myers", team: "SEA", position: "K12", age: 33 },
    { ranking: 373, name: "Minnesota Vikings", team: "MIN", position: "DST17", age: null },
    { ranking: 374, name: "Terrace Marshall", team: "SF", position: "WR145", age: 24 },
    { ranking: 375, name: "Green Bay Packers", team: "GB", position: "DST18", age: null },
    { ranking: 376, name: "Spencer Rattler", team: "NO", position: "QB47", age: 23 },
    { ranking: 377, name: "Detroit Lions", team: "DET", position: "DST19", age: null },
    { ranking: 378, name: "Cole Turner", team: "WAS", position: "TE59", age: 24 },
    { ranking: 379, name: "Dillon Johnson", team: "CAR", position: "RB97", age: 23 },
    { ranking: 380, name: "Cordarrelle Patterson", team: "PIT", position: "RB98", age: 33 },
    { ranking: 381, name: "Cody Schrader", team: "LAR", position: "RB99", age: 25 },
    { ranking: 382, name: "Deuce Vaughn", team: "DAL", position: "RB100", age: 22 },
    { ranking: 383, name: "Carolina Panthers", team: "CAR", position: "DST20", age: null },
    { ranking: 384, name: "Grant Calcaterra", team: "PHI", position: "TE60", age: 25 },
    { ranking: 385, name: "Matt Gay", team: "IND", position: "K13", age: 30 },
    { ranking: 386, name: "Riley Patterson", team: "FA", position: "K14", age: 25 },
    { ranking: 387, name: "Jordan Travis", team: "NYJ", position: "QB48", age: 24 },
    { ranking: 388, name: "Justyn Ross", team: "KC", position: "WR146", age: 24 },
    { ranking: 389, name: "Zack Kuntz", team: "NYJ", position: "TE61", age: 25 },
    { ranking: 390, name: "Los Angeles Rams", team: "LAR", position: "DST21", age: null },
    { ranking: 391, name: "Ryan Flournoy", team: "DAL", position: "WR147", age: 24 },
    { ranking: 392, name: "Tanner Hudson", team: "CIN", position: "TE62", age: 29 },
    { ranking: 393, name: "Seattle Seahawks", team: "SEA", position: "DST22", age: null },
    { ranking: 394, name: "Ka'imi Fairbairn", team: "HOU", position: "K15", age: 30 },
    { ranking: 395, name: "Cameron Dicker", team: "LAC", position: "K16", age: 24 },
    { ranking: 396, name: "Charlie Kolar", team: "BAL", position: "TE63", age: 25 },
    { ranking: 397, name: "New York Giants", team: "NYG", position: "DST23", age: null },
    { ranking: 398, name: "Jase McClellan", team: "ATL", position: "RB101", age: 22 },
    { ranking: 399, name: "Michael Badgley", team: "DET", position: "K17", age: 29 },
    { ranking: 400, name: "Emanuel Wilson", team: "GB", position: "RB102", age: 25 }
    ]
      
    }
  }
  updateLeagueId = (newLeagueId) => {
    this.setState({leagueId: newLeagueId}, this.fetchData)

  }
   
  componentDidMount() {
    this.fetchData()
  }
    fetchData = () => {
      const{ leagueId } = this.state

        const getPlayers = fetch('https://sleeper-api-backend.vercel.app/players/nfl')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });

        const getTeams = fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
        const getUsers = fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
          
        
            Promise.all([getPlayers, getTeams, getUsers])
            .then(([call1, call2, call3, call4]) => {
                this.setState({
                    playerinfo: call1,
                    teaminfo: call2,
                    userinfo: call3,
                    loading: false,
                });
                // console.log(this.state)
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
      <Router>
        <main>
          <Header />
          <Form onSubmit={this.updateLeagueId} />

          <Routes>
            {/* Route to the team list */}
            <Route
              path="/"
              element={
                <AllTeams
                  rankings={this.state.dynastyRankings}
                  users={this.state.userinfo}
                  fantasyteam={this.state.teaminfo}
                  players={this.state.playerinfo}
                />
              }
            />

            {/* Route to display the details for a particular team */}
            <Route
              path="/team/:owners_id"
              element={
                <TeamDetails
                   rankings={this.state.dynastyRankings}
                  users={this.state.userinfo}
                  fantasyteam={this.state.teaminfo}
                  players={this.state.playerinfo}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    );
  }
}



export default App;



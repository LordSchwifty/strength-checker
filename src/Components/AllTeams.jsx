import React, { useState, useEffect } from 'react';
import Team from './Team'; // Import the Team component
import { Link } from 'react-router-dom'; 

// Define getAverageRankByTeam function
function getAverageRankByTeam(rosters, dynastyRankings, players, users) {
  return rosters.map(roster => {
    // Get the user's team name from the users array
    const user = users.find(user => user.user_id === roster.owner_id);
    const teamName = user?.metadata?.team_name || "unknown team";
    const ownerId = user.user_id // Fallback to "unknown team" if no team name exists

    // Helper function to calculate average rank for any set of players
    const calculateAverageRank = (playerIds) => {
      const { totalRank, playerCount } = playerIds.reduce((acc, playerId) => {
        // Find the player in the players array using the ID
        const player = players.find(p => p.id === playerId);

        if (player) {
          // Find the player's ranking in the dynastyRankings array
          const ranking = dynastyRankings.find(r => r.name === player.name);
          if (ranking) {
            acc.totalRank += ranking.ranking;
            acc.playerCount++;
          } else {
            acc.totalRank += 344
            acc.playerCount++
          }
        }

        return acc;
      }, { totalRank: 0, playerCount: 0 });

      // Calculate the average rank
      return playerCount > 0 ? totalRank / playerCount : 0;
    };

    // Calculate average rank for starters
    const averageRankStarters = calculateAverageRank(roster.starters);

    // Calculate average rank for all players
    const averageRankAllPlayers = calculateAverageRank(roster.players);
    console.log(ownerId)

    // Return an object with the team name, average rank for starters, and average rank for all players
    return {
      team_name: teamName,
      average_rank_starters: Math.round(averageRankStarters),
      average_rank_all_players: Math.round(averageRankAllPlayers),
      owners_id: ownerId
    };
  });
}

const AllTeams = ({ fantasyteam, players, users, rankings }) => {
  const [teamRoster, setTeamRoster] = useState([]);
  const [sortBy, setSortBy] = useState('starters'); // 'starters' or 'allPlayers'

  useEffect(() => {
    const teamInfo = getAverageRankByTeam(fantasyteam, rankings, players, users);
    setTeamRoster(teamInfo);
  }, [fantasyteam, rankings, players, users]);

  // Sorting logic
  const sortedTeamRoster = [...teamRoster].sort((a, b) => {
    if (sortBy === 'starters') {
      return a.average_rank_starters - b.average_rank_starters; // Sort by starters rank (highest to lowest)
    } else {
      return a.average_rank_all_players - b.average_rank_all_players; // Sort by all players rank (highest to lowest)
    }
   
  });

  return (
    <div>
      <div>
        <button onClick={() => setSortBy('starters')}>Sort by Average Rank (Starters)</button>
        <button onClick={() => setSortBy('allPlayers')}>Sort by Average Rank (All Players)</button>
      </div>

      <div className="team-section">
    {sortedTeamRoster.map((team, index) => (
          <div key={index}>
            <Link to={`/team/${team.owners_id}`}> {/* Pass owner_id in the URL */}
              <Team
                teamName={team.team_name}
                averageRank={sortBy === 'starters' ? team.average_rank_starters : team.average_rank_all_players}
                ownerId={team.owners_id}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTeams;

// import React, { useState, useEffect } from 'react';
// import Team from './Team'; 


// function getAverageRankByTeam(rosters, dynastyRankings, players, users) {
//   return rosters.map(roster => {
    
//     const user = users.find(user => user.user_id === roster.owner_id);
//     const teamName = user?.metadata?.team_name || "unknown team"; 

    
//     const calculateAverageRank = (playerIds) => {
//       const { totalRank, playerCount } = playerIds.reduce((acc, playerId) => {
        
//         const player = players.find(p => p.id === playerId);

//         if (player) {
          
//           const ranking = dynastyRankings.find(r => r.name === player.name);
//           if (ranking) {
//             acc.totalRank += ranking.ranking;
//             acc.playerCount++;
//           } else {
//             acc.totalRank += 200
//             acc.playerCount++
//           }
//         }

//         return acc;
//       }, { totalRank: 0, playerCount: 0 });

//       return playerCount > 0 ? totalRank / playerCount : 0;
//     };

//     const averageRankStarters = calculateAverageRank(roster.starters);

   
//     const averageRankAllPlayers = calculateAverageRank(roster.players);

 
//     return {
//       team_name: teamName,
//       average_rank_starters: Math.round(averageRankStarters),
//       average_rank_all_players: Math.round(averageRankAllPlayers),
//     };
//   });
// }

// const AllTeams = ({ fantasyteam, players, users, rankings }) => {
//   const [teamRoster, setTeamRoster] = useState([]);

//   useEffect(() => {
//     const teamInfo = getAverageRankByTeam(fantasyteam, rankings, players, users);
//     setTeamRoster(teamInfo);
//   }, [fantasyteam, rankings, players, users]);

//   return (
//     <div className="team-section">
//       {teamRoster.map((team, index) => (
//         <Team
//           key={index}
//           teamName={team.team_name}
//           averageRank={team.average_rank_starters}
//           averageTotalRank={team.average_rank_all_players} 
//         />
//       ))}
//     </div>
//   );
// };

// export default AllTeams;


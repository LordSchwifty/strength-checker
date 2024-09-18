import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// The function to get the roster details with player positions and rankings
function getPlayerDetailsByRoster(rosters, dynastyRankings, players, users) {
  return rosters.map(roster => {
    // Get the user's team name from the users array
    const user = users.find(user => user.user_id === roster.owner_id);
    const teamName = user?.metadata?.team_name || "unknown team";  // Fallback to "unknown team" if team name is not available

    // Map over all players in the roster
    const playerDetails = roster.players.map(playerId => {
      // Find the player in the players array
      const player = players.find(p => p.id === playerId);

      if (player) {
        if(player.position === 'DEF'){
            return null
        }
        // Find the player's ranking in the dynastyRankings
        const ranking = dynastyRankings.find(r => r.name === player.name);
        const playerRanking = ranking ? ranking.ranking : 344;  // Assign 225 if not found

        // Return player details: name, position, and ranking
        return {
          name: player.name,
          position: player.position,
          ranking: playerRanking
        };
      }

      return null;  // In case player is not found in the `players` array
    }).filter(player => player !== null);  // Filter out any null entries

    // Return an object with the team name and player details
    return {
      team_name: teamName,
      players: playerDetails
    };
  });
}

const TeamDetails = ({ fantasyteam, players, users, rankings }) => {
  const { owners_id } = useParams();  // Get the owner_id from the URL params
  const [teamDetails, setTeamDetails] = useState(null);  // Store team details

  useEffect(() => {
    console.log("Owner ID:", owners_id);
    console.log("Fantasy Team Data:", fantasyteam);
    // Filter the roster based on the owner_id
    const roster = fantasyteam.find(roster => roster.owner_id === owners_id);

    if (roster) {
      // Use the getPlayerDetailsByRoster function to get details
      const teamInfo = getPlayerDetailsByRoster([roster], rankings, players, users); // We pass the roster in an array
      if(teamInfo[0] && teamInfo.length > 0){
      
      const sortedPlayers = teamInfo[0].players.sort((a,b) => a.ranking - b.ranking)
      setTeamDetails({...teamInfo[0], players: sortedPlayers })// Since it's an array with one team, we take the first element
    }
   } 
  }, [owners_id, fantasyteam, players, users, rankings]);

  if (!teamDetails) {
    return <div>Loading team details...</div>;
  }

  return (
    <div>
      <h2>{teamDetails.team_name}</h2>
      <h3>Players:</h3>
      <ul>
        {teamDetails.players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.position} - Ranking: {player.ranking}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamDetails;


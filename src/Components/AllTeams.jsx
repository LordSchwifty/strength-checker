import React, { useState } from 'react';
import { useEffect } from 'react';

const AllTeams = ({fantasyteam, players, users, rankings}) => {
    const [teamRoster, setTeamRoster] = useState([])

    useEffect(() => {
        const teamInfo = fantasyteam.map(roster => {
          const user = users.find(user => user.user_id === roster.owner_id);
          const teamName = user.metadata.team_name;
      
          const { totalRank, playerCount } = roster.starters.reduce((acc, playerId) => {
            const player = players.find(p => p.id === playerId)
      
            if(player){
              const ranking = rankings.find(r => r.name === player.name)
              if(ranking){
                acc.totalRank += ranking.ranking
                acc.playerCount ++
              }
            }
            return acc
          }, {totalRank: 0, playerCount: 0})
           const averageRank = totalRank / playerCount
           return {
            team_name: teamName,
            average_rank: Math.round(averageRank)
          }   
        }) 
        setTeamRoster(teamInfo)
      }, [setTeamRoster, fantasyteam, users, rankings, players])

     const getHTML = teamRoster.map(team => {
            return (<div>teamName:{team.team_name},averageRank:{team.average_rank}</div>)
        })
     
    return (
        <div className='team-section'>{getHTML}</div>
    )
}

export default AllTeams
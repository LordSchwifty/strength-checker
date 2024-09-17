import React from 'react';
import './Team.css';
const Team = ({ teamName, averageRank, averageTotalRank, ownerId }) => {
  return (
    <div className="team-container">
      <h2 className="team-name">{teamName}</h2>
      <p className="team-rank">Average Rank: {averageRank}</p>
      <p className="owner">{ownerId}</p>
    </div>
  );
};

export default Team;

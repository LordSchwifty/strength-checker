// PlayerCard.jsx
import React from 'react';
import './PlayerCard.css'

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h3 className="player-name">{player.name}</h3>
      <p className="player-position">Position: {player.position}</p>
      <p className="player-ranking">Ranking: {player.ranking}</p>
    </div>
  );
};

export default PlayerCard;

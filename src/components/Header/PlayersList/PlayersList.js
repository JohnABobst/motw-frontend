import React from 'react';
import './PlayersList.css'

const PlayerList = ({ players }) => {
  return (
    <div className="player-list">
            <div className='player-list-container'>
            {players.map((player, index) => (
          <div key={index} className={`player-item ${player.online ? 'online' : 'offline'}`}>
            {player.name}
          </div>
        ))}
            </div>
    </div>
  );
};

export default PlayerList;

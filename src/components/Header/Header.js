import React from 'react';
import PlayersList from './PlayersList/PlayersList';
import './Header.css';

const Header = ({handleLogout, players }) => {
  return (
    <header className="app-header">
      <PlayersList players={players}  />
      <h1 className='header-title'>Monster of the Week</h1>
      {(
        <button className="logout-button" onClick={() => handleLogout()}>Logout</button>
      )}
    </header>
  );
};

export default Header;

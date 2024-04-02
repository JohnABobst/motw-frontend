
import './App.css';
import React, { useState } from 'react';
import Campaign from './components/Campaign/Campaign';
import Authorization from './components/Authorization/Authorization';
import Header from './components/Header/Header';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dummyPlayers = [
    { name: 'Player 1', online: true },
    { name: 'Player 2', online: false },
    { name: 'Player 3', online: true },
    { name: 'Player 4', online: false },
    { name: 'Player 5', online: true },
  ];

  

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <div className="app-container">
      <main className="app-main">
      <Header handleLogout={handleLogout} players={dummyPlayers} />
        {isLoggedIn ? (
          <Campaign />
        ) : (
          <Authorization
            handleLogin={handleLogin}
          />
        )}
      </main>
    </div>
  );
}

export default App;

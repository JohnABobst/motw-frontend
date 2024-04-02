import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import './Authorization.css'; // Import CSS file for styling

function Authorization({ handleLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="authorization-container"> 
      <h1>Authorization</h1>
      {isLogin ? (
        <div className="form-container"> 
          <Login
            handleLogin={handleLogin}
          />
          <p>Don't have an account? <button onClick={() => handleSwitch()}>Register</button></p>
        </div>
      ) : (
        <div className="form-container">
          <Register
            handleLogin={handleLogin}
          />
          <p>Already have an account? <button onClick={() => handleSwitch()}>Login</button></p>
        </div>
      )}
    </div>
  );
};

export default Authorization;


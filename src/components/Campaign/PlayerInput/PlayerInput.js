import React, { useState } from 'react';
import VoiceInput from './Inputs/VoiceInput';
import './PlayerInput.css';

const PlayerInput = ({handleSubmit}) => {
  const [input, setInput] = useState('');

  function handleInputChange(newInput) {
    setInput(newInput);
  };

  function sendInput(event) {
    event.preventDefault();
    handleSubmit(input);
    setInput('');
  }

  return (
    <div className='input-container'>
      <div className='campaign-header'>
        <h2>Player Response</h2>
      </div>
      <div className='response-options-container'>
      </div>
      <div className="input-form-container">
        <form>
          <div className="text-input-container">
            <textarea
              className="large-input"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div className='form-button-container'>
          <button className='campaign-button form-button' type="submit" onClick={(event) => sendInput(event)}>
              Submit
            </button>
            <VoiceInput onInputChange={handleInputChange} />
            <button className='campaign-button form-button' onClick={() => setInput('')} type="button">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayerInput;
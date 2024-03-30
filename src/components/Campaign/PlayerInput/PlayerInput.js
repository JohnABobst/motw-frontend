import React, { useState } from 'react';
import VoiceInput from './Inputs/VoiceInput';
import './PlayerInput.css';

const PlayerInput = () => {
  const [transcript, setTranscript] = useState('');
  const [input, setInput] = useState('voice');

  function handleTranscriptChange(newTranscript) {
    setTranscript(newTranscript);
  };

  function handleSubmit(event) {
    event.preventDefault();
    sendTranscript(transcript);
  };

  function updateTranscript(text) {
    transcript += `\n\n${text}`;
  }

  function sendTranscript(transcript) {
    let token = localStorage.getItem("token");

    let body = {
      "input": transcript
    }
    try {
      fetch('http://localhost:8081/api/v1/player-input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          updateTranscript(data.response)
        });

    } catch (error) {
      console.error('Error sending transcript to server:', error);
    }
  };

  return (
    <div className='input-container'>
      <div className='campaign-header'>
        <h2>Player Response</h2>
      </div>
      <div className='response-options-container'>
      </div>


      {/* <TextInput transcript={transcript} onTranscriptChange={handleTranscriptChange} /> */}
      <div className="input-form-container">

        <form>
          <div className="text-input-container">

            <textarea
              className="large-input"
              value={transcript}
              onChange={(e) => handleTranscriptChange(e.target.value)}
            />
          </div>
          <div className='form-button-container'>
          <button className='campaign-button form-button' type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <VoiceInput onTranscriptChange={handleTranscriptChange} />
            <button className='campaign-button form-button' onClick={() => setTranscript('')} type="button">
              Clear
            </button>
          </div>
        </form>
      </div>


    </div>
  );
};

export default PlayerInput;
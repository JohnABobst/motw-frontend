import React, { useState, useEffect } from 'react';
import '../PlayerInput.css';

const VoiceInput = ({ onTranscriptChange }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';

    recognition.onresult = event => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      onTranscriptChange(transcript);
    };

    recognition.onerror = event => {
      console.error('Speech recognition error:', event.error);
    };

    setRecognition(recognition);

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [onTranscriptChange]);

  function startRecording(){
    setIsRecording(true);
    recognition.start();
  };

  function stopRecording() {
    setIsRecording(false);
    recognition.stop();
  };

  function handleClick() {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }

  return (
      <button type="button" className={`campaign-button form-button ${isRecording ? 'recording' : ''} `} onClick={handleClick}>
        {isRecording ? 'Stop Recording' : 'Record'}
        {isRecording && <span className="record-symbol">●</span>}
      </button>
  );
};

export default VoiceInput;

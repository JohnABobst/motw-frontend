import React, { useState, useEffect } from 'react';

function VoiceInput() {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    if (recording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [recording]);

  const startRecording = () => {
    setAudioChunks([]);

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        setAudioStream(stream);
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = event => {
          setAudioChunks(prevChunks => [...prevChunks, event.data]);
        };

        recorder.start();
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    if (!mediaRecorder) return;

    mediaRecorder.stop();
    audioStream.getTracks().forEach(track => track.stop());
  };

  const downloadRecording = () => {
    if (audioChunks.length === 0) return;

    const blob = new Blob(audioChunks, { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);
  };

  return (
    <div>
      <button
        onClick={() => setRecording(true)}
        onMouseDown={() => setRecording(true)}
        onMouseUp={() => setRecording(false)}
        onMouseLeave={() => setRecording(false)}
        disabled={recording}
      >
        Start Recording
      </button>
      <button onClick={downloadRecording} disabled={audioChunks.length === 0}>
        Save Recording
      </button>
      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default VoiceInput;

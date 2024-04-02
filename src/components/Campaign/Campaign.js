import React, { useState, useEffect, useRef } from 'react';
import './Campaign.css';
import './PlayerInput/PlayerInput.css';
import PlayerInput from './PlayerInput/PlayerInput';
import CampaignOutput from './CampaignOutput/CampaignOutput';
import Character from './Character/Character';
import Gear from './Character/Gear/Gear';
import { gear, stats } from "../../dev/dummydata";
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

function Campaign() {
  const [messages, setMessages] = useState([]);
  const [characterStats, setCharacterStats] = useState(stats);
  const ws = useRef(null);
  let gameId = 1;
  let user = "Mulder"

  function test() {
    let  message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    setMessages(prevMessages => [...prevMessages, message]);
  }

  useEffect(() => {
    const socket = new SockJS('http://localhost:8081/ws');
    ws.current = Stomp.over(socket);
    ws.current.connect({}, frame => {
      ws.current.subscribe(`/topic/game/${gameId}`, message => {
        if (!messages.includes(message.body)) {
          setMessages(prevMessages => [...prevMessages, "Keeper:"])
          setMessages(prevMessages => [...prevMessages, message.body]);
        }
      });
    });
    return () => {
      if (ws.current) {
        ws.current.disconnect();
      }
    };
  })

  function handleSubmit(newMessage) {
    setMessages(prevMessages => [...prevMessages, `${user}:`]);
    if (ws.current && ws.current.connected) {
      ws.current.send(`/app/game/${gameId}`, {}, JSON.stringify(newMessage));
    } else {
      console.log('WebSocket is not connected.');
    }
  }

  function handleStart() {
    const startInput = {
      "content": "Create the hook for the beginning of a new mystery in Monster of the Week",
      "role": "user"
    };
    handleSubmit(startInput);
  }

  return (
    <div className="campaign-container">
      <Character characterStats={characterStats} setCharacterStats={setCharacterStats} />
      <div className='gameplay-container'>
        <div>
          <button className='campaign-button' onClick={handleStart}>Start</button>
        </div>
        <div className='campaign-header'>
                <h2>Keeper</h2>
            </div>
        <CampaignOutput messages={messages} />
        <PlayerInput handleSubmit={handleSubmit} />
      </div>
      <Gear gear={gear} />
    </div>
  );
}

export default Campaign;

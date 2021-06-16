import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button'

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
      
        <h1 className="heading">Talk-Wire</h1>
      
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        
        </div>
      
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <br></br><Button size="large" variant="contained" > Sign In </Button>
        </Link>
      </div>
     
    </div>
  );
}

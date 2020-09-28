import React from 'react';
import "../CSS/Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';

function Chat( { name, message, timeStamp, profileImg }) {
    return (
        <Link to={`/chat/${name}`}>
            <div className='chat'>
                <Avatar className='chat_image' alt={name} src={profileImg} />
                <div className='chat_details'>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat_timeStamp">{timeStamp}</p>
            </div>
        </Link>
        
    )
}

export default Chat

import React from 'react';
import "../CSS/Chat.css";
import Avatar from "@material-ui/core/Avatar";

function Chat( { name, message, timeStamp, profileImg }) {
    return (
        <div className='chat'>
            <Avatar className='chat_image' alt={name} src={profileImg} />
            <div className='chat_details'>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat_timeStamp">{timeStamp}</p>
        </div>
    )
}

export default Chat

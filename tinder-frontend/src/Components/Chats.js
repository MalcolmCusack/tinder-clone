import React from 'react'
import '../CSS/Chats.css';
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Malcolm"
                message="You up??"
                timeStamp="42 minutes ago"
                profilePic=""
            />
        </div>
    )
}

export default Chats

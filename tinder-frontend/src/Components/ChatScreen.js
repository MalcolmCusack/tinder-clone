import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import '../CSS/ChatScreen.css'

function ChatScreen() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Malcolm',
            image: "",
            message: 'You up??',
        },
        {
            name: 'Malcolm',
            image: '',
            message: 'Netflex n chill',
        },
        {
            message: "nawwww",
        }

    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }

    return (
        <div className='chatScreen'>
            <p>YOU MATCHED WITH MALCOLM ON 09/24/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen_message'>
                        <Avatar
                            className="chatScreen_img"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                    <div className='chatScreen_message'>
                        <p className='chatScreen_textUser'>{message.message}</p>
                    </div>
                )
            ))}

            <div className="chatScreen_input">
                <form>
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        className="chatScreen_inputFeild"
                        placeholder="Type a message..."
                     />
                    <button onClick={handleSend} className="input_button">SEND</button>
                </form>
            </div>

        </div>
    )
}

export default ChatScreen

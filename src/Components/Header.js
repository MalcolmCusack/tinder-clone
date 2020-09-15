import React from 'react'
import "../CSS/Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import ChatIcon from '@material-ui/icons/Chat';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img
                className='header_logo'
                src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
                alt=''
            />
            <IconButton>
                <ChatIcon fontSize='large' className='header-chat'/>
            </IconButton>
            
        </div>
    );
}

export default Header

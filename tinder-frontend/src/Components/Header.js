import React from 'react'
import "../CSS/Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import ChatIcon from '@material-ui/icons/Chat';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {

    const history = useHistory();

    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className='header_icon' />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className="header_icon"/>
                </IconButton>
            )}

            <Link to='/'>
                <img
                    className='header_logo'
                    src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
                    alt=''
                />
            </Link>
            <Link to='/chats'>
                <IconButton>
                    <ChatIcon fontSize='large' className='header-chat'/>
                </IconButton>
            </Link>
            
            
        </div>
    );
}

export default Header

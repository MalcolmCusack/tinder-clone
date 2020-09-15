import React from 'react'
import '../CSS/SwipeButtons.css';
import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from '@material-ui/icons/Replay';
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='button_repeat'>
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className='swipe_left'>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className='button_star'>
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className='swipe_right'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className='lightning_button'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>

            
        </div>
    )
}

export default SwipeButtons

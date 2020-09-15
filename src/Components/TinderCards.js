import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import '../CSS/TinderCard.css';



function TinderCards() {
    const [ people, setPeople ] = useState([
        {
            name: 'Elon Musk',
            url: "https://www.gstatic.com/tv/thumb/persons/487130/487130_v9_ba.jpg"

        },
        {
            name: 'Jeff Bezos',
            url: 'https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
       // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };

    return (
        <div className='tinder_card'>
            <div className="tinder_card_container">
                {people.map(person => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards

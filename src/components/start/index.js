import React from 'react';
import './style.css';

export function StartGame(props) {
    return (
        <div className='start-game-container'>
            <p>Who makes the first move?</p>
            <div className='start-btn'>
                <button className='me-btn' onClick={props.firstMove}>
                    Me
                </button>
                <button className='skynet-btn' onClick={props.opponentsFirstMove}>
                    SkyNet
                </button>
            </div>
        </div>
    )
}
import React from 'react';
import './style.css';

export function FinishGame(props) {
    return (
        <div className='finis-game-container'>
            <p>{props.text}</p>
            <button className='finish-btn' onClick={props.onPlayAgain}>
                Play again?
            </button>
        </div>
    )
}
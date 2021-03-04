import React from 'react';
import './style.css';

export function Matches(props) {
    return (
        <div className='matches-container'>
            <h1>{props.quantityOfMatches} Matches</h1>
            <div className='matches'>
                {Array(props.quantityOfMatches).fill(props.match).map((item, index) =>
                    <button className='matche-btn' onClick={props.onCount} key={index}>
                        <img src={item} alt='match'/>
                    </button>
                )}
            </div>
            {props.count ? 
                <button className='move-btn' onClick={props.onMove}>
                    Make a move
                </button>
            :
                <button disabled className='move-btn disabled'>
                    Make a move
                </button>
            }
            <div className='score-table'>
                <div className='matches-result'>
                    <p>Player Matches: {props.playerMatches}</p>
                </div> 
                <div className='matches-result'>
                    <p>{props.count}/3 matches selected</p>
                </div>
                <div className='matches-result'>
                    <p>Opponent Matches: {props.opponentMatches}</p>
                </div> 
            </div>
        </div>
    )
}
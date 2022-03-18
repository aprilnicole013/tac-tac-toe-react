import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const Game = () => {
    const [ board, setBoard ] = useState(Array(9).fill(null))
    const [ xIsNext, setXisNext ] = useState(true)
    const winner = calculateWinner(board)


    const handleClick = () => {
        console.log('clicked')
    }

    // jumpTo = () => {

    // }

    // renderMoves = () => {
        
    // }


    return (
        <Board squares={board} onClick={handleClick}/>
    )
}

export default Game 
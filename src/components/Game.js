import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const Game = () => {
    const [ board, setBoard ] = useState(Array(9).fill(null))
    const [ xIsNext, setXisNext ] = useState(true)
    const winner = calculateWinner(board)


    const handleClick = (i) => {
        const boardCopy = [...board]
        //if user clicks on ocupied aquare or if game is won, return
        if(winner || boardCopy[i]) return;

        //put an X or O in clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext)
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
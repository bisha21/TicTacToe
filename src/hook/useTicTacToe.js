import React from 'react';
import { useState } from 'react';

const initialBoard = Array(9).fill(null);

export default function useTicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a]; // Return the winner ("X" or "O")
      }
    }
    return null; // No winner found
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return; // If there's a winner or the cell is filled, do nothing

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O'; // Set 'X' or 'O' in the clicked cell
    setBoard(newBoard);
    setIsXNext(!isXNext); // Toggle turn
  };

  const getMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins the game!`;
    if (!board.includes(null)) return `It's a draw!`; // Return draw message when all cells are filled
    return `Player ${isXNext ? 'X' : 'O'}'s turn`;
  };

  const reset = () => {
    setBoard(initialBoard); // Reset the board
    setIsXNext(true); // Reset the turn to 'X'
  };

  return { board, calculateWinner, handleClick, getMessage, reset };
}

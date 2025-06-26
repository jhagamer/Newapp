"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Board {
  board: (null | string)[];
  currentPlayer: string;
  winner: null | string;
  isGameOver: boolean;
}

const initialBoardState: Board = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  isGameOver: false,
};

export default function Home() {
  const [boardState, setBoardState] = useState<Board>(initialBoardState);

  const handleCellClick = (index: number) => {
    if (boardState.board[index] || boardState.isGameOver) return;

    const newBoard = [...boardState.board];
    newBoard[index] = boardState.currentPlayer;

    const winner = calculateWinner(newBoard);
    const isGameOver = winner || newBoard.every((cell) => cell !== null);

    setBoardState({
      board: newBoard,
      currentPlayer: boardState.currentPlayer === 'X' ? 'O' : 'X',
      winner: winner,
      isGameOver: isGameOver,
    });
  };

  const resetGame = () => {
    setBoardState(initialBoardState);
  };

  const calculateWinner = (board: (null | string)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">Tic Tac Toe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {boardState.board.map((value, index) => (
              <Button
                key={index}
                className="w-20 h-20 text-4xl font-bold"
                onClick={() => handleCellClick(index)}
                disabled={value !== null || boardState.isGameOver}
              >
                {value}
              </Button>
            ))}
          </div>
          {
            boardState.winner && (
              <div className="mt-4 text-center">
                Winner: {boardState.winner}
              </div>
            )
          }
          {
            boardState.isGameOver && !boardState.winner && (
              <div className="mt-4 text-center">
                It's a draw!
              </div>
            )
          }
          <div className="mt-4 flex justify-center">
            <Button onClick={resetGame}>Reset Game</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import React, { useState } from 'react';
import useTicTacToe from '../hook/useTicTacToe';


export default function TicTacToe() {
    const { board,  handleClick, getMessage, reset } = useTicTacToe()
    return (
        <div className="flex flex-col items-center justify-center w-1/2 border-2 border-green-700 p-4">
            <div className="flex gap-4 mb-4">
                <h2 className="text-lg font-bold">{getMessage()}</h2>
                <button className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={()=>reset()}>Reset</button>
            </div>
            <div className="grid grid-cols-3 ">
                {board.map((b, index) => (
                    <button
                        key={index}
                        className="w-20 h-20 bg-gray-300 border-2 border-gray-500 text-xl flex items-center justify-center"
                        onClick={() => handleClick(index)}
                        disabled={b !== null}

                    >
                        {b}
                    </button>
                ))}
            </div>
        </div>
    );
}

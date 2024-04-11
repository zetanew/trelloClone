import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card'; // Import the Card component

function Board() {
  const board = useSelector(state => state.board);

  return (
    <div className="flex bg-cyan-200">
      {board.map((list) => (
        <div key={list.list_id}>
          <h1 className="text-3xl font-bold">{list.list_name}</h1>
          {list.cards.map((card) => (
            <Card key={card.card_id} card={card} /> // Pass the card as props to Card component
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board;

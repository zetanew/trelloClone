import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../redux/board/boardSlice';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from uuid
function NewCard({ listId }) {
  const dispatch = useDispatch();
  const [newCardName, setNewCardName] = useState('');

  const handleAddCard = () => {
    if (newCardName.trim() !== '') {
      dispatch(addCard({ list_id: listId, card: { card_id: uuidv4(), card_name: newCardName } }));
      setNewCardName('');
    }
  };

  return (
    <div className="bg-white rounded shadow p-4 m-2 w-64">
      <input
        type="text"
        value={newCardName}
        onChange={(e) => setNewCardName(e.target.value)}
        placeholder="Enter card name"
        className="border border-gray-300 rounded p-1 w-full mb-2"
      />
      <div className="flex justify-end">
        <button onClick={handleAddCard} className="bg-blue-500 text-white px-4 py-2 rounded">Add Card</button>
      </div>
    </div>
  );
}

export default NewCard;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCard, modifyCard } from '../redux/board/boardSlice'; // Import the removeCard and modifyCard actions

function Card({ card }) { 
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedCardName, setEditedCardName] = useState(card.card_name); // State to store edited card name

  const handleDelete = () => {
    dispatch(removeCard({ list_id: card.list_id, card_id: card.card_id })); // Dispatch removeCard action with list_id and card_id
  };

  const handleModify = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(modifyCard({
     
      card_id: card.card_id,
      updatedCard: { card_name: editedCardName } 
    }));
    setIsEditing(false); // Exit edit mode after saving changes
  };

  return (
    <div className="bg-white rounded shadow p-4 m-2 w-64">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedCardName}
            onChange={(e) => setEditedCardName(e.target.value)}
            className="border border-gray-300 rounded p-1 mb-2"
          />
          <div className="flex justify-end">
            <button className="text-green-600 mr-2" onClick={handleSave}>Save</button> {/* Button to save changes */}
            <button className="text-gray-600 mr-2" onClick={() => setIsEditing(false)}>Cancel</button> {/* Button to cancel editing */}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-bold text-xl mb-2">{card.card_name}</h2>
          <div className="flex justify-end">
            <button className="text-red-600 mr-2" onClick={handleDelete}>Delete</button>
            <button className="text-blue-600 mr-2" onClick={handleModify}>Modify</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

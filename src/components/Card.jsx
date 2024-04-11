import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from '../redux/board/boardSlice'; // Import the removeCard action

function Card({ card }) { // Receive card as props
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); // State to track if card is in edit mode

  const handleDelete = () => {
    dispatch(removeCard({ card_id: card.card_id })); // Dispatch the removeCard action with the card_id
  };

  const handleModify = () => {
    setIsEditing(true); // Set isEditing to true to enter edit mode
    // Additional logic to open modal or form for editing card details
  };

  return (
    <div className="bg-white rounded shadow p-4 m-2 w-64">
      {isEditing ? (
        <div> {/* Render form or modal for editing card details */}
          {/* Add form fields for editing card details */}
        </div>
      ) : (
        <div>
          <h2 className="font-bold text-xl mb-2">{card.card_name}</h2> {/* Access card properties */}
          <div className="flex justify-end">
            <button className="text-red-600 mr-2" onClick={handleDelete}>Delete</button> {/* Button to delete the card */}
            <button className="text-blue-600" onClick={handleModify}>Modify</button> {/* Button to modify the card */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Card;

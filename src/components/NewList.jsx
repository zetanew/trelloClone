import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../redux/board/boardSlice';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from uuid

function NewList() {
  const dispatch = useDispatch();
  const [newListName, setNewListName] = useState('');

  const handleAddList = () => {
    if (newListName.trim() !== '') {
      dispatch(addList({ list_id: uuidv4(), list_name: newListName }));
      setNewListName('');
    }
  };

  return (
    <div className="flex items-start">
      <div className="bg-white rounded shadow p-2 m-2 w-64 flex justify-between" style={{ height: 'fit-content' }}>
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="Enter list name"
          className="border border-gray-300 rounded p-1 w-3/4"
          style={{ height: '2rem' }} // Adjusted height of the input field
        />
        <button onClick={handleAddList} className="bg-blue-500 text-white px-4 py-2 rounded" style={{ height: '2rem' }}>Add</button>
      </div>
    </div>
  );
}

export default NewList;

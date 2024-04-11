import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeList, modifyList } from '../redux/board/boardSlice'; // Import the removeList and modifyList actions
import Card from './Card'; // Import the Card component
import NewCard from './NewCard';

function Board() {
  const dispatch = useDispatch();
  const board = useSelector(state => state.board);
  const [editedListName, setEditedListName] = useState('');
  const [editingListId, setEditingListId] = useState('');

  const handleModifyList = (listId) => {
    dispatch(modifyList({ list_id: listId, updatedList: { list_name: editedListName } }));


    setEditedListName('');
    setEditingListId('');
  };

  const handleRemoveList = (listId) => {
    dispatch(removeList({ list_id: listId }));
  };

  const handleEditList = (listId, listName) => {
    setEditingListId(listId);
    setEditedListName(listName);
  };

  return (
    <div className="flex bg-cyan-200">
      {board.map((list) => (
        <div key={list.list_id}>
          <div className="flex justify-between items-center">
            {editingListId === list.list_id ? (
              <input
                type="text"
                value={editedListName}
                onChange={(e) => setEditedListName(e.target.value)}
                className="border border-gray-300 rounded p-1 mr-2 w-20" // Adjust the width of the input field
              />
            ) : (
              <h1 className="text-3xl font-bold">{list.list_name}</h1>
            )}
            <div>
              {editingListId === list.list_id ? (
                <>
                  <button onClick={() => handleModifyList(list.list_id)} className="bg-green-500 text-white px-2 py-1 rounded-sm mr-2">Save</button>
                  <button onClick={() => setEditingListId('')} className="bg-gray-500 text-white px-2 py-1 rounded-sm">Cancel</button>
                </>
              ) : (
                <button onClick={() => handleEditList(list.list_id, list.list_name)} className="bg-blue-500 text-white px-2 py-1 rounded-sm mr-2">Modify</button>
              )}
              <button onClick={() => handleRemoveList(list.list_id)} className="bg-red-500 text-white px-2 py-1 rounded-sm">Delete</button>
            </div>
          </div>
          {list.cards.map((card) => (
            <Card key={card.card_id} card={card} /> // Pass the card as props to Card component
          ))}
          <NewCard listId={list.list_id} />
        </div>
      ))}
    </div>
  );
}

export default Board;

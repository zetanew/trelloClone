import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Board from './components/Board';
import { setLists } from './redux/board/boardSlice'; // Import setLists action
import { board as initialBoard } from './fakeData/data'; // Import fake data

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous fetching of data
    const fetchFakeData = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(setLists(initialBoard.lists)); // Dispatch setLists action with fetched data
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching fake data:', error);
      }
    };

    fetchFakeData();
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>; // Render loading indicator while fetching data
  }

  return (
    <>
      <p className='text-3xl font-bold underline'>From app.js</p>
      <nav className="p-6 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Trello Clone navbar</h1>
      </nav>
      <Board />
    </>
  );
}

export default App;

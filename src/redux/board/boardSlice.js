import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = [];

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setLists: (state, action) => {
      return action.payload;
    },
    addList: (state, action) => {
      const newList = action.payload;
      newList.cards = [];
      state.push(newList);
    },
    removeList: (state, action) => {
      return state.filter(list => list.list_id !== action.payload.list_id);
    },
    modifyList: (state, action) => {
      const { list_id, updatedList } = action.payload;
      const listIndex = state.findIndex(list => list.list_id === list_id);
      if (listIndex !== -1) {
        state[listIndex].list_name = updatedList.list_name;
      }
    },
    addCard: (state, action) => {
      const { list_id, card } = action.payload;
      const list = state.find(list => list.list_id === list_id);
      if (list) {
        const logs = [{ log_id: "generated_log_id", message: `${card.card_name} created` }];
        list.cards.push({ ...card, logs });
        // Show all logs for the added card
        logs.forEach(log => toast.success(log.message));
      }
    },
    removeCard: (state, action) => {
      const { card_id } = action.payload;
      for (const list of state) {
        list.cards = list.cards.filter(card => {
          if (card.card_id === card_id) {
            card.logs.forEach(log => toast.success(log.message));
            return false; // Remove the card
          }
          return true; // Keep other cards
        });
      }
    },
    modifyCard: (state, action) => {
      const { card_id, updatedCard } = action.payload;
      const foundCard = state.flatMap(list => list.cards).find(card => card.card_id === card_id);
      if (foundCard) {
        const { card_name, logs } = foundCard;
        Object.assign(foundCard, updatedCard);
        const now = new Date().toISOString();
        const newLog = { log_id: "generated_log_id", message: `${card_name} modified at ${now}` };
        foundCard.logs.unshift(newLog);
        const toastMessage = `Modified at ${now}\n${logs.map(log => `Created at ${log.message.split(" ")[2]}`).join('\n')}`;
        toast.success(toastMessage);
      }
    },
    
    
    
  },
});

export const {
  setLists,
  addList,
  removeList,
  modifyList,
  addCard,
  removeCard,
  modifyCard
} = boardSlice.actions;

export default boardSlice.reducer;

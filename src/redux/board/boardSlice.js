import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setLists: (state, action) => {
      return action.payload;
    },
    addList: (state, action) => {
      state.push(action.payload);
    },
    removeList: (state, action) => {
      return state.filter(list => list.list_id !== action.payload.list_id);
    },
    addCard: (state, action) => {
      const { list_id, card } = action.payload;
      const list = state.find(list => list.list_id === list_id);
      if (list) {
        list.cards.push(card);
      }
    },
    removeCard: (state, action) => {
      const { card_id } = action.payload;
      for (const list of state) {
        const cardIndex = list.cards.findIndex(card => card.card_id === card_id);
        if (cardIndex !== -1) {
          list.cards.splice(cardIndex, 1);
          break;
        }
      }
    },
    modifyCard: (state, action) => {
      const { card_id, updatedCard } = action.payload;
      for (const list of state) {
        const card = list.cards.find(card => card.card_id === card_id);
        if (card) {
          card.card_name = updatedCard.card_name;
          // Optionally, update other properties of the card if needed
          break;
        }
      }
    },
  },
});

export const {
  setLists,
  addList,
  removeList,
  addCard,
  removeCard,
  modifyCard
} = boardSlice.actions;

export default boardSlice.reducer;
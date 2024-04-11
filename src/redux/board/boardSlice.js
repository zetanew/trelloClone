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
      const { list_id, card_id } = action.payload;
      const list = state.find(list => list.list_id === list_id);
      if (list) {
        list.cards = list.cards.filter(card => card.card_id !== card_id);
      }
    },
    modifyCard: (state, action) => {
      const { list_id, card_id, updatedCard } = action.payload;
      const list = state.find(list => list.list_id === list_id);
      if (list) {
        list.cards = list.cards.map(card =>
          card.card_id === card_id ? { ...card, ...updatedCard } : card
        );
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

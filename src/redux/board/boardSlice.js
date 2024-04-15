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
        list.cards.push(card);
      }
    },
    removeCard: (state, action) => {
      const { card_id } = action.payload;
      for (const list of state) {
        list.cards = list.cards.filter(card => card.card_id !== card_id);
      }
    },
    modifyCard: (state, action) => {
      const { list_id, card_id, updatedCard } = action.payload;
      const list = state.find(list => list.list_id === list_id);
      if (list) {
        const card = list.cards.find(card => card.card_id === card_id);
        if (card) {
          Object.assign(card, updatedCard);
        }
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

import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../data.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            id: nanoid(),
            name: value.name,
            number: value.number,
          },
        };
      },
    },
    deleteContacts (state, action) {
     return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import initialContacts from '../data.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts']
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

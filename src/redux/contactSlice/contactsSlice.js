import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitialState } from './inittialState';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: [...state.contacts, { id: nanoid(), ...action.payload }],
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

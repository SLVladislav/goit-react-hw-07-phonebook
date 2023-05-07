import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './inittialState';
import { addContacts, deleteContacts, fetchContacts } from 'redux/operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
const ArrThunks = [addContacts, deleteContacts, fetchContacts];

const fn = type => isAnyOf(...ArrThunks.map(contact => contact[type]));

const handleFulfilledGetContacts = (state, { playload }) => {
  state.items = playload;
};

const handleFulfilledAddContacts = (state, { playload }) => {
  state.items.push(playload);
};

const handleFilfilledDeleteContacts = (state, { playload }) => {
  state.items = state.items.filter(el => el.id !== playload.id);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { playload }) => {
  state.isLoading = false;
  state.error = playload;
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    const { FULFILLED, REJECTED, PENDING } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGetContacts)
      .addCase(addContacts.fulfilled, handleFulfilledAddContacts)
      .addCase(deleteContacts.fulfilled, handleFilfilledDeleteContacts)
      .addMatcher(fn(PENDING), handlePending)
      .addMatcher(fn(FULFILLED), handleFulfilled)
      .addMatcher(fn(REJECTED), handleRejected);
  },
});

export const contactsReducer = contactSlice.reducer;

//  addContact: (state, action) => {
//       return {
//         ...state,
//         contacts: [...state.contacts, { id: nanoid(), ...action.payload }],
//       };
//     },
//     deleteContact: (state, action) => {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     },

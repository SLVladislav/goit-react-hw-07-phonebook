import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './inittialState';
import { addContacts, deleteContacts, fetchContacts } from 'redux/operations';

// const STATUS = {
//   PENDING: 'pending',
//   FULFILLED: 'fulfilled',
//   REJECTED: 'rejected',
// };
const arrThunks = [addContacts, deleteContacts, fetchContacts];

const fn = type => {
  return arrThunks.map(contact => contact[type]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGetContacts = (state, action) => {
  state.items = action.playload;
};

const handleFulfilledAddContacts = (state, action) => {
  state.items.push(action.playload);
};

const handleFilfilledDeleteContacts = (state, action) => {
  state.items = state.items.filter(el => el.id !== action.playload.id);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.playload;
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    // const { FULFILLED, REJECTED, PENDING } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGetContacts)
      .addCase(addContacts.fulfilled, handleFulfilledAddContacts)
      .addCase(deleteContacts.fulfilled, handleFilfilledDeleteContacts)
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected)
      .addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled);
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

// builder => {
//     console.log(builder);
//     const { FULFILLED, REJECTED, PENDING } = STATUS;
//     builder
//  .addCase(fetchContacts.fulfilled, handleFulfilledGetContacts)
// .addCase(addContacts.fulfilled, handleFulfilledAddContacts)
// .addCase(deleteContacts.fulfilled, handleFilfilledDeleteContacts)
// .addMatcher(fn(PENDING), handlePending)
// .addMatcher(fn(REJECTED), handleRejected)
// .addMatcher(fn(FULFILLED), handleFulfilled);

// {
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [addContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [deleteContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.playload;
//     },
//   },

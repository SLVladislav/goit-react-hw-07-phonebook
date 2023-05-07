import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './inittialState';
import { addContacts, deleteContacts, fetchContacts } from 'redux/operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
const arrThunks = [addContacts, deleteContacts, fetchContacts];

const fn = type => isAnyOf(...arrThunks.map(contact => contact[type]));

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGetContacts = (state, action) => {
  console.log(action.playload);
  state.items = action.playload;
};

const handleFulfilledAddContacts = (state, { playload }) => {
  state.items.push(playload);
};

const handleFilfilledDeleteContacts = (state, { playload }) => {
  state.items = state.items.filter(el => el.id !== playload.id);
};

const handleRejected = (state, { playload }) => {
  state.isLoading = false;
  state.error = playload;
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // extraReducers: {
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },

  extraReducers: builder => {
    console.log(builder);
    const { FULFILLED, REJECTED, PENDING } = STATUS;
    builder

      .addCase(fetchContacts.fulfilled, handleFulfilledGetContacts)
      // .addCase(addContacts.fulfilled, handleFulfilledAddContacts)
      // .addCase(deleteContacts.fulfilled, handleFilfilledDeleteContacts)
      // .addMatcher(fn(PENDING), handlePending)
      // .addMatcher(fn(REJECTED), handleRejected)
      .addMatcher(fn(FULFILLED), handleFulfilled);
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

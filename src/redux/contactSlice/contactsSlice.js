import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './inittialState';
import { addContacts, deleteContacts, fetchContacts } from 'redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGetContacts = (state, action) => {
  state.items = action.payload;
};

const handleFulfilledAddContacts = (state, action) => {
  state.items.push(action.payload);
};

const handleFulfilledDeleteContacts = (state, action) => {
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const arrThunk = [fetchContacts, addContacts, deleteContacts];

const createThunk = type => {
  return arrThunk.map(el => el[type]);
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGetContacts)
      .addCase(addContacts.fulfilled, handleFulfilledAddContacts)
      .addCase(deleteContacts.fulfilled, handleFulfilledDeleteContacts)
      .addMatcher(isAnyOf(...createThunk('pending')), handlePending)
      .addMatcher(isAnyOf(...createThunk('rejected')), handleRejected)
      .addMatcher(isAnyOf(...createThunk('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = contactSlice.reducer;


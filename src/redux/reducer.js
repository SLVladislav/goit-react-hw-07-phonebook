import { filterReducer } from './Filter/filterSlice';
import { contactsReducer } from './contactSlice/contactsSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

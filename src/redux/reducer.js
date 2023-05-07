// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

import { filterReducer } from './Filter/filterSlice';
import { contactsReducer } from './contactSlice/contactsSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// const persistConfig = {
//   key: 'root',
//   whitelist: ['contacts'],
//   // version: 1,
//   storage,
// };

// export const persistedReducer = persistReducer(persistConfig, reducer);

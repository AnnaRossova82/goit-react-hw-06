import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer
  },
  preloadedState: {
    contacts: {
      items: [], // Початковий стан контактів
    },
    filters: {
      name: "", // Початковий стан фільтра
    },
  },
});

export default store;




/* 

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import initialContacts from '../contacts.json';

const initialState = {
  contacts: {
    items: initialContacts, 
  },
 
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer
  }
});

export default store; */
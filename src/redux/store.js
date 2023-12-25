import { configureStore } from "@reduxjs/toolkit";
import { contactsListReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'



// import {reducers} from './reducer'
const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, contactsListReducer);

export const store = configureStore({
    // reducer: persistedReducer
    reducer: {
        addContact : persistedReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
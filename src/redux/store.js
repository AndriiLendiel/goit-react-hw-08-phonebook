import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from "./auth/authSlice";
import {filterReducer} from './filterSlice';
import {contactsListReducer} from './contactsSlice'

const authpersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],

  }


export const store = configureStore({
reducer: {
  contacts: contactsListReducer,
  filter: filterReducer,
  auth: persistReducer(authpersistConfig, authReducer)
}

    ,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
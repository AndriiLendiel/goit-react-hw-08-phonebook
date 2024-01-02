import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {reducers} from './reducer';








export const store = configureStore({
    reducer: reducers,
})


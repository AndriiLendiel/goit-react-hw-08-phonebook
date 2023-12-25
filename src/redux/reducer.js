import { combineReducers } from "@reduxjs/toolkit";
import {filterReducer} from './filterSlice';
import {contactsListReducer} from './contactsSlice'

export const reducers = combineReducers({
    contacts: contactsListReducer,
    filter: filterReducer,
})
import { createSlice} from '@reduxjs/toolkit';
import {contactsList} from './initialState';


const filterSlice = createSlice({
    name: 'filter',
    initialState: contactsList.filter,
    reducers: {
        setFilter (state, action) {
return state = action.payload
        },
    }
})

export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { contactsList } from './initialState';
import { fetchContactsThunk, addContactsThunk, deleteContactsThunk } from './operations';



const handlePending = (state) => {
    state.isLoading = true
}
const handleFulfilled = (state,action) => {
    state.items = action.payload;
    state.isLoading = false;
    state.error = null;
}

const handleRejected = (state) => {
    state.error = true

}

export const initialState = contactsList.contacts

export const contactsListSlice = createSlice({
    name:'contactsList',
    initialState,
extraReducers: builder => {
    builder
    .addCase(fetchContactsThunk.pending, handlePending)
    .addCase(fetchContactsThunk.fulfilled, handleFulfilled)
    .addCase(fetchContactsThunk.rejected, handleRejected)

    .addCase(addContactsThunk.pending, handlePending)
    .addCase(addContactsThunk.fulfilled, (state,action)=> {

        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
    })
    .addCase(addContactsThunk.rejected, handleRejected)

    .addCase(deleteContactsThunk.pending, handlePending)
    .addCase(deleteContactsThunk.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null
    const deleteIndex  =  state.items.findIndex(el => el.id === action.payload.id)
    state.items.splice(deleteIndex, 1)
    })
    .addCase(deleteContactsThunk.rejected, handleRejected)
}
}) 


export const {setContactsList, deleteContact} = contactsListSlice.actions;
export const contactsListReducer = contactsListSlice.reducer;



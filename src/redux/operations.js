
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, fetchContacts,deleteContacts } from "service/API";




export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {

        const {token} = thunkAPI.getState().auth
        if(!token) {
            return
        }
try {
    return await fetchContacts()
} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}
    })

export const addContactsThunk = createAsyncThunk(
    'contacts/addContacts',
    
    async (contact, thunkAPI) =>{
try {
    return addContacts(contact)
} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}
    })

export const deleteContactsThunk = createAsyncThunk(
    'contacts/deleteContacts',
    async (id, thunkAPI) => {
try {
    return deleteContacts(id)
} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}
    }
)




import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, fetchContacts,deleteContacts } from "service/API";




export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        return await fetchContacts()
    })

export const addContactsThunk = createAsyncThunk(
    'contacts/addContacts',
    
    async (contact) =>{
        return addContacts(contact)
    })

export const deleteContactsThunk = createAsyncThunk(
    'contacts/deleteContacts',
    async (id) => {
        return deleteContacts(id)
    }
)



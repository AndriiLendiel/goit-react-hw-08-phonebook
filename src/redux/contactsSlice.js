import { createSlice, nanoid } from '@reduxjs/toolkit';
import {contactsList} from './initialState';



export const contactsListSlice = createSlice({
    name:'contactsList',
    initialState: contactsList.contacts,
    reducers: {
setContactsList: {
    reducer(state, action){
state.push(action.payload)
    },
    prepare(name, number) {
        return {
            payload: {
                name,
                number,
                id: nanoid()
            }
        }
    }
},
deleteContact(state,action) {
const idIndex = state.findIndex(el => el.id === action.payload)
state.splice(idIndex, 1)
}
}
}) 


export const {setContactsList, deleteContact} = contactsListSlice.actions;
export const contactsListReducer = contactsListSlice.reducer;

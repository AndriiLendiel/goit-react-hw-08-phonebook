import { useSelector } from "react-redux";

export const getContact =  (state) => {
return state.addContact
}

export const getFilter = (state) => {
    return state.filter
}
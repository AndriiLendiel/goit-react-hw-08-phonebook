import React, { useEffect } from "react";
import { Contact } from "../Contact/Contact";
import { ContactList1 } from "./ContactList.styled";
import { Title } from "utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { fetchContactsThunk } from "../../redux/operations";


const filteredList = (state) => {
    return [...state.contacts.items.filter(el => el.name.toLowerCase().includes(state.filter))]
}


export const ContactList =() => {



let visibleContacts = useSelector(filteredList)

    return (
        <div>
            <Title>Contacts</Title>
            <ContactList1>
        {visibleContacts.map(el => (
        <Contact key={el.id} data={el}/>)) 
        }
        </ContactList1>
        </div>
        
    )
}

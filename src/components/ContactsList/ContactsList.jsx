import React from "react";
import { Contact } from "../Contact/Contact";
import { ContactList1 } from "./ContactList.styled";
import { Title } from "utils/utils";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";





export const ContactList =() => {

const contactList = useSelector(getContacts);

const filter = useSelector(getFilter);
const normalized = filter.toLowerCase();
const visibleContacts = contactList.filter(el => (
    el.name.toLowerCase().includes(normalized)
))




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

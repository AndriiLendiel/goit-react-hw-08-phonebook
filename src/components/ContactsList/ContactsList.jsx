
import { Contact } from "../Contact/Contact";
import { ContactList1 } from "./ContactList.styled";
import { Title } from "utils/utils";
import {useSelector } from "react-redux";



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

import React from "react";
import { Contact } from "../Contact/Contact";
import { ContactList1 } from "./ContactList.styled";
import { Title } from "utils/utils";


export const ContactList =({contacts}) => {
    return (
        <div>
            <Title>Contacts</Title>
            <ContactList1>
        {contacts.map(el => (
        <Contact key={el.id} data={el}/>
))}
        </ContactList1>
        </div>
        
    )
}
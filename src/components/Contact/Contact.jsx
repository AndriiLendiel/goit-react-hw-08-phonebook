import React  from "react";
import {ContactItem, ContactButton } from "./Contact.styled";
import { useDispatch, useSelector } from "react-redux";
import {deleteContact} from  '../../redux/contactsSlice'

export const Contact = ({data : {id,number, name}}) => {

const dispatch = useDispatch();
    return (
        <ContactItem>
{name} tel: {number}
<ContactButton onClick={() => dispatch(deleteContact(id))}>Delete</ContactButton>
        </ContactItem>
    )
}


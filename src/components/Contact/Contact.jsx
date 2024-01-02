import React  from "react";
import {ContactItem, ContactButton } from "./Contact.styled";
import { useDispatch } from "react-redux";

import { deleteContactsThunk } from "../../redux/operations";

export const Contact = ({data : {id,number, name}}) => {

const dispatch = useDispatch();
    return (
        <ContactItem>
{name} tel: {number}
<ContactButton onClick={() => dispatch(deleteContactsThunk(id))}>Delete</ContactButton>
        </ContactItem>
    )
}


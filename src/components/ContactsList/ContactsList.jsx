
import { Contact } from "../Contact/Contact";
import { ContactList1 } from "./ContactList.styled";
import { Title } from "utils/utils";
import {useSelector } from "react-redux";
import {getContacts} from '../../redux/selectors.js'




 const ContactList =() => {
const isItems = useSelector(getContacts)
    const filteredList = (state) => {
if(!isItems) {
    return
}
   return [...state.contacts.items.filter(el => el.name.toLowerCase().includes(state.filter))] 
    }


let visibleContacts = useSelector(filteredList)

    return (
        <div>
            <Title>Contacts</Title>
            <ContactList1>
        {visibleContacts?.map(el => (
        <Contact key={el.id} data={el}/>)) 
        }
        </ContactList1>
        </div>
        
    )
}
export default ContactList
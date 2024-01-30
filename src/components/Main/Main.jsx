
import { Filter } from 'components/Filter/Filter';
import {ContactForm} from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';

export const Main = () => {
    return (
<>
<ContactForm />
        <Filter/> 
        <ContactList/>  
</>



    )
}
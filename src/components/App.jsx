import { useMemo } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { MainWrapper } from "components/App.styled";
import { useSelector,useDispatch } from "react-redux";
import {setContactsList} from '../redux/contactsSlice.js'
import { setFilter } from "../redux/filterSlice";







export const App = () =>  {

const contactList = useSelector((state) => state.addContact);
const filter = useSelector((state) => state.filter);
const dispatch = useDispatch();
// useEffect(() => {

// const parseContacts = JSON.parse(localStorage.getItem('element')) ;
// if(parseContacts) {
//   setContactList(parseContacts)
// }
// }, [])


// useEffect(() => {

// contactList.length > 4 && localStorage.setItem('element', JSON.stringify(contactList))
// }, [contactList])


const addContact = (name,number) => {
const contactData =  dispatch(setContactsList(name,number))

      if(contactList.some(el => el.name.toLowerCase() === contactData.name.toLowerCase())) {
      return  alert(`${name} is already in contacts`)
      }
}


const createFilter = (e) => {
  const {value} = e.currentTarget;
dispatch(setFilter(value))
}
const filterByName = useMemo(() => {
const normalized = filter.toLowerCase();
return contactList.filter(({name}) => name.toLowerCase().includes(normalized));
}, [contactList, filter])


return (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}
  >
<MainWrapper>
<ContactForm 
addContact={addContact}
/>
<Filter 
value={filter}
onChange={createFilter}
/>
<ContactList 
contacts={filterByName}
/>  
</MainWrapper>
  </div>
  
)



};

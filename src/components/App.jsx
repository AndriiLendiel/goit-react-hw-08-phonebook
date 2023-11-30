import { useState, useEffect, useMemo } from "react"
import { nanoid } from "nanoid"
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { MainWrapper } from "components/App.styled";









export const App = () =>  {


  let contacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]


  const [contactList, setContactList] = useState(contacts);
  const [filter, setFilter] = useState('')


useEffect(() => {

const parseContacts = JSON.parse(localStorage.getItem('element')) ;
if(parseContacts) {
  setContactList(parseContacts)
}
}, [])


useEffect(() => {

contactList.length > 4 && localStorage.setItem('element', JSON.stringify(contactList))
}, [contactList])


const addContact = (name,number) => {
  let contactData = {
    id: nanoid(),
    name,
    number,

      }

      if(contactList.some(el => el.name.toLowerCase() === contactData.name.toLowerCase())) {
      return  alert(`${name} is already in contacts`)
      }
  
  setContactList(prevState =>([...prevState, contactData])

  )

}

const createFilter = (e) => {
  const {value} = e.currentTarget;
setFilter(value)
}

const filterByName = useMemo(() => {
const normalized = filter.toLowerCase();
return contactList.filter(({name}) => name.toLowerCase().includes(normalized));
}, [contactList, filter])


const deleteContact = (contactId) => {
  setContactList(prevState => (prevState.filter(el => el.id !== contactId)))
}








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
<ContactList contacts={filterByName}
onDelete={deleteContact}
/>  
</MainWrapper>
  </div>
  
)



};

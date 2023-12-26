
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { MainWrapper } from "components/App.styled";










export const App = () =>  {

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

/>
<Filter 
// value={filter}
// onChange={createFilter}
/>
<ContactList/>  
</MainWrapper>
  </div>
  
)



};

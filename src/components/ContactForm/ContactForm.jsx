import React from "react";
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Title } from "utils/utils";
import {FormWrapper,MainForm,FormLabel,FormInput, FormButton, ErrorText} from "./ContactForm.styled";
import { useSelector,useDispatch } from "react-redux";
import { Formik, ErrorMessage} from "formik";
import * as yup from 'yup';
import { getContacts } from "../../redux/selectors";
import {addContactsThunk } from "../../redux/operations";
const contactSchema = yup.object().shape({
  name: yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'не правильно введено дані').required('це поле обов`язкове'),
  number: yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "не правильно введено дані").required('це поле обов`язкове')
})

const ErrorField = ({name}) => {
  return(
    <ErrorMessage
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}
    >

    </ErrorMessage>
  )
}


 const ContactForm = () => {
  const contactList = useSelector(getContacts);
  const dispatch = useDispatch();

const handleSubmit = (values, {resetForm})=> {
const {name, number} = values;
if(contactList.some(el => el.name === name)) {
  return  alert(`${name} is already in contacts`);
  };
dispatch(addContactsThunk({name, number}));
resetForm();
}

return (
  <FormWrapper>
              <Title>PhoneBook</Title>
    <Formik
    initialValues={{name: '', number: ''}}
    onSubmit={handleSubmit}
    validationSchema={contactSchema}
    >
    <MainForm  
    >
    <FormLabel> 

    <span>Name </span>
    <div style={{
      position: 'relative',
    }}>    
    <IoMdContact  style={{
            position: 'absolute',
            left: '10px',
            top: '10px',
            width: '30px',
    }}/>

    <FormInput

type="text"
name="name"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required

/></div>

<ErrorField name="name"/>
</FormLabel>

<FormLabel> 

<span>Tel</span> 

<div style={{
      position: 'relative',
    }}>
<BsFillTelephoneFill style={{
            position: 'absolute',
            left: '10px',
            top: '10px',
            height: '30px',
            width: '25px'
    }}/>


<FormInput
type="tel"
name="number"
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required

/>
</div>

<ErrorField name="number"/>


</FormLabel>
<FormButton type="submit"
>Add contact</FormButton>

</MainForm>
    </Formik>

  </FormWrapper>

)
}

export default ContactForm;
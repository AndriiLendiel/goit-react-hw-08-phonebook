import axios from 'axios';


axios.defaults.baseURL = 'https://658e99d22871a9866e79721d.mockapi.io/contacts';


export const fetchContacts = async () => {
    const response = await axios.get('/contacts')

    return response.data
}

export const addContacts = async (contact) => {
    const response = await axios.post('/contacts', contact)

    return response.data
}

export const deleteContacts = async (id) => {
    const response = await axios.delete(`/contacts/${id}`)
    return response.data
}
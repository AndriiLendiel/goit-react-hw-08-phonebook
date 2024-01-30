import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


export const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`

}
export const deleteToken = () => {
delete    axios.defaults.headers.common.Authorization
}

export const registrationAction = async (body) => {
    const response = await axios.post('/users/signup', body)
    setToken(response.data.token)
    console.log(response.data)
return await response.data
}

export const loginAction = async (body) => {
    const response = await axios.post('/users/login', body)
    setToken(response.data.token)
    return response.data
}
 
export const getProfile = async () => {


    const response = await axios('/users/current')

    return response.data
}

export const logouatAction = async () => {
await axios.post('/users/logout')
    deleteToken()
}
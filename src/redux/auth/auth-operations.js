import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


 const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`

}
const deleteToken = () => {
delete axios.defaults.headers.common.Authorization
}



export const registrationThunk = createAsyncThunk(
    'auth/registration',
    async (body, thunkAPI) => {
        try {
            const {data} = await axios.post('/users/signup', body)
            setToken(data.token)
            return await data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const loginThunk = createAsyncThunk(
'auth/login',
async (body, thunkAPI) => {
    try {
        const {data} = await axios.post('/users/login', body)
        setToken(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})


export const  getProfileThunk = createAsyncThunk(
    'auth/getProfile',
    async (_, thunkAPI) => {
        const {token} = thunkAPI.getState().auth
        if(!token) {
            return
        }
        setToken(token)
        try {
            const {data} = await axios('/users/current')
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }

    })

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout')
            deleteToken()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
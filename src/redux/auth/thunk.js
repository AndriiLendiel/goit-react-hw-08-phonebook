import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAction, getProfile, logouatAction, registrationAction,setToken } from "service/auth-service";


export const registrationThunk = createAsyncThunk(
    'auth/registration',
    async (body) => {
        return await registrationAction(body)
    }
)

export const loginThunk = createAsyncThunk(
'auth/login',
async (body) => {
    return await loginAction(body)
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

            return await getProfile()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }

    })

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async () => {
    await logouatAction()
    }
)
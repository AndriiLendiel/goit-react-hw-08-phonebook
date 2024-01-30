import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, registrationThunk } from "./thunk";
import { getProfileThunk } from "./thunk";


const initialState = {
    token: '',
    isLoading: false,
    isLogged: null,
    error: '',
    profile: null
}
const handlePending = (state, {payload}) =>{
state.isLoading = true
}
const handleFulfilled = (state, {payload}) => {
state.isLoading = false;
state.error = '';
state.token = payload.token
state.isLogged = true
}

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
}

const handleFulfilledProfile = (state, {payload}) => {
state.isLoading = false;
state.isLogged = true
state.error = '';
state.profile = payload
}

const handleFulfilledLogout = (state) => {
    state.token = '';
    state.isLoading = false;
    state.error = '';
    state.profile = null;
    state.isLogged = false;
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>{
builder
// .addCase(registrationThunk.pending, handlePending)
// .addCase(registrationThunk.fulfilled, handleFulfilled)
.addCase(loginThunk.fulfilled, handleFulfilled)
.addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
.addCase(logoutThunk.fulfilled, handleFulfilledLogout)
.addMatcher(isAnyOf(
loginThunk.pending, getProfileThunk.pending), handlePending)
.addMatcher(isAnyOf(
loginThunk.rejected, getProfileThunk.rejected
), handleRejected)
    }
})


export const authReducer = authSlice.reducer;

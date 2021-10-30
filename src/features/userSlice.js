import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        userData: null
}

const userSlice = createSlice({
    name:  'users',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userData = action.payload
        },
        logout: (state, action) => {
            state.userData = null
        }
    }
});

export const {
        login, logout
} = userSlice.actions
export const selectLogin = state => state.users.userData 
export const selectLogout = state =>  state.users.userData 
export default userSlice.reducer
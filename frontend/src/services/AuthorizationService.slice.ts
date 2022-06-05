import {AuthResponse, User} from "../types/Auth";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

type AuthState = {
    user?: User
    token?: string
    isLoggedIn: boolean
}

const initialState: AuthState = {
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state: AuthState, action: PayloadAction<AuthResponse>) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        logout: (state: AuthState) => {
            state.user = undefined
            state.token = undefined
            state.isLoggedIn = false
        }
    }
})

export const {setUser, logout} = authSlice.actions;

export const selectUser = (state: RootState) => state?.auth?.user
export const selectToken = (state: RootState) => state?.auth?.token
export const selectFullName = (state: RootState) => `${state?.auth?.user?.firstName} ${state?.auth?.user?.lastName}`
export const isLoggedIn = (state: RootState) => state?.auth?.isLoggedIn

export const authReducer = authSlice.reducer
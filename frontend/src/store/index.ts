import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import {authReducer} from "../services/AuthorizationService.slice";
import {PersistConfig} from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer
})

export const persist = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
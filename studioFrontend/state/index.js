import { configureStore } from "@reduxjs/toolkit";
import { authActions } from "./auth-slice/auth-slice";
import auth from "./auth-slice/auth-slice";
const store = configureStore({
    reducer:{
        auth:auth.reducer
    }
})

export default store;
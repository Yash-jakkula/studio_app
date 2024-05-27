import { configureStore } from "@reduxjs/toolkit";
import { authActions } from "./auth-slice/auth-slice";
import auth from "./auth-slice/auth-slice";
import user from "./user-slice/user-slice";
const store = configureStore({
    reducer:{
        auth:auth.reducer,
        user:user.reducer
    }
})

export default store;
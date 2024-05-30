import { configureStore } from "@reduxjs/toolkit";
import { authActions } from "./auth-slice/auth-slice";
import auth from "./auth-slice/auth-slice";
import user from "./user-slice/user-slice";
import account_details from "./account-slice/account-slice";
import transfer_details from "./transfer-details/transfer-details";
import token from "./search-item/search-item";
const store = configureStore({
    reducer:{
        auth:auth.reducer,
        user:user.reducer,
        transfer_details:transfer_details.reducer,
        account_details:account_details.reducer,
        token:token.reducer
    }
})

export default store;
import { createSlice } from "@reduxjs/toolkit";

const account_details = createSlice({
    name:"account",
    initialState:{
        account:{}
    },
    reducers:{
        setAccountDetails(state,action){
            state.account = action.payload;
        }
    }
})

export const accountActions = account_details.actions;
export default account_details;
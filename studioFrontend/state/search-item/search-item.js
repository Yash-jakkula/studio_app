import { createSlice } from "@reduxjs/toolkit";

const token = createSlice({
    name:'token',
    initialState:{
        search:""
    },
    reducers:{
        setToken(state,aciton){
            state.token = aciton.payload;
        }
    }
})

export const tokenActions = token.actions;
export default token;
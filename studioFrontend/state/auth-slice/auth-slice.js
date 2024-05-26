import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
   name:'auth',
   initialState:{
    isLoading:false,
    isLoggedIn:false,
   },
   reducers:{
    login(state,action){
        state.isLoggedIn = action.payload;
        
    },
    
    setLoading(state,action){
        state.isLoading = action.payload;
    }
}
})

export const authActions = auth.actions;
export default auth;
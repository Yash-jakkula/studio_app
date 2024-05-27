import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
   name:'user',
   initialState:{
    currentUser:{},
    users:[]
},
   reducers:{
    setCurrentUser(state,action){
        state.currentUser = action.payload; 
    },
    setUsers(state,action){
        state.users = action.payload;
    }
}
})

export const userActions = user.actions;
export default user;
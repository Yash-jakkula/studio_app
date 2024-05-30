import { createSlice } from "@reduxjs/toolkit";

const transfer_details = createSlice({
    name:'transferDetails',
    initialState:{
        transferDetails:[]
    },
    reducers:{
        setTransferDetails(state,action){
            state.transferDetails = action.payload;
        }
    }
})

export const transferActions = transfer_details.actions;
export default transfer_details;
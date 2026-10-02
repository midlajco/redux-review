import { createSlice } from "@reduxjs/toolkit";

const statusSlice =createSlice({
    name:"status",
    initialState:{
        value:true,
    },
    reducers:{
        loggin:(state)=>{
            state.value=true
        },
        loggout:(state)=>{
            state.value=false
        },

    }
})

export const {loggin,loggout} =statusSlice.actions
export default statusSlice.reducer
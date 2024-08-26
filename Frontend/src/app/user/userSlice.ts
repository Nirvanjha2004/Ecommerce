import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    currentUser: null,
    error: false
}; 


const userSlice= createSlice({
    name: "user",
    initialState,
    reducers:{   //reducers help us to change the initial state of the store
        signinSuccess(state, action){
            state.currentUser = action.payload;
            state.error= false;
        },

        signinFailure(state, action){
            state.error= action.payload
        },
        signOut(state){
            state.currentUser = null;
            state.error= false;
        },
        updatedData(state, action){
            state.currentUser= action.payload;
            state.error= false;
        },
        
    }
});

export const {signinFailure, signinSuccess, signOut, updatedData} = userSlice.actions;

export default userSlice.reducer
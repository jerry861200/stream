import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSignedIn: null
}

const signInSlice = createSlice({
	name: 'signIn',
	initialState,
	reducers:{
		signIn(state){
			state.isSignedIn = true;
		},
		signOut(state){
			state.isSignedIn = false;
		},
	}
})

export const{ signIn, signOut} = signInSlice.actions;

export default signInSlice.reducer;
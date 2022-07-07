import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSignedIn: null,
	userId: null,
}

const signInSlice = createSlice({
	name: 'signIn',
	initialState,
	reducers:{
		signIn(state, action){
			state.isSignedIn = true;
			state.userId = action.payload;
		},
		signOut(state){
			state.isSignedIn = false;
			state.userId = null;
		},
	}
})

export const{ signIn, signOut} = signInSlice.actions;

export default signInSlice.reducer;
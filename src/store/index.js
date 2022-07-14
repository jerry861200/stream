import { configureStore } from "@reduxjs/toolkit";

import signInReducer from "./signInSlice";
import streamReducer from './streamSlice';

const store = configureStore({
	reducer: {
		signIn: signInReducer,
		stream: streamReducer,
	}
})

export default store;
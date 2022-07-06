import { configureStore } from "@reduxjs/toolkit";

import signInReducer from "./signInSlice";

const store = configureStore({
	reducer: {
		signIn: signInReducer
	}
})

export default store;
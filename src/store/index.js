import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer} from 'redux-form'

import signInReducer from "./signInSlice";

const store = configureStore({
	reducer: {
		signIn: signInReducer,
		form: formReducer ,
	}
})

export default store;
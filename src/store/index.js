import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer} from 'redux-form';

import signInReducer from "./signInSlice";
import streamReducer from './streamSlice';

const store = configureStore({
	reducer: {
		signIn: signInReducer,
		form: formReducer,
		stream: streamReducer,
	}
})

export default store;
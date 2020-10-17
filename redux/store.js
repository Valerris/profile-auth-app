import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import initialState from "./initialState";

const devTools = process.env.NODE_ENV !== "production";

const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialState,
	devTools,
});

export default store;

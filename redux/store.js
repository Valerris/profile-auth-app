import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import middleware from "./middleware";
// import initialState from "./initialState";

const devTools = process.env.NODE_ENV !== "production";

const store = configureStore({
	reducer: rootReducer,
	middleware,
	// preloadedState: initialState,
	devTools,
});

export default store;

import { combineReducers } from "@reduxjs/toolkit";
import auth from "features/Authentification/reducer";

const rootReducer = combineReducers({
	auth: auth,
});

export default rootReducer;

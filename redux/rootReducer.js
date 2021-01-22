import { combineReducers } from "@reduxjs/toolkit";
import auth from "features/Authentification/reducer";
import img_upload from "features/Profile/ProfileEdit/reducer";

const rootReducer = combineReducers({
	auth,
	img_upload,
});

export default rootReducer;

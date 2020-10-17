import { Schema, model } from "mongoose";

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	// username: {
	// 	type: String,
	// 	required: true,
	// 	trim: true,
	// },
	// imageUrl: {
	// 	type: String,
	// 	default: "",
	// },
});

const User = model("User", userSchema);
export default User;

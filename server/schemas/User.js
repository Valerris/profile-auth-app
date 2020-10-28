import { Schema } from "mongoose";

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
});

userSchema.methods.toJSON = function () {
	const user = this.toObject();

	delete user.password;
	delete user.__v;

	return user;
};

export default userSchema;

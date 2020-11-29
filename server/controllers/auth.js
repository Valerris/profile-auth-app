import { IncomingForm } from "formidable";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import userSchema from "server/schemas/User";

function getUser(req, res, next) {
	const fd = new IncomingForm();

	//TODO: check db connection before using it
	const User =
		req.connection.models.User ||
		req.connection.model("User", userSchema);

	fd.parse(req, async (err, fields, files) => {
		if (err) {
			return console.log(`[ERROR]: ${err}`);
		}

		let isValid = true;
		let { email, password } = fields;

		email = validator.normalizeEmail(email);

		let validateEmail =
			!validator.isEmpty(email) && validator.isEmail(email);

		let validatePassword =
			!validator.isEmpty(password) &&
			validator.isAlphanumeric(password) &&
			password.length >= 5;

		isValid = validateEmail && validatePassword;

		if (!isValid) {
			let errMsg = "";
			let errObj = {};
			let isError = true;

			if (!validateEmail && !validatePassword) {
				errMsg = "Invalid email and password.";
				errObj = {
					email: { errMsg: "Invalid email." },
					password: { errMsg: "Invalid password." },
				};
			} else if (!validateEmail) {
				errMsg = "Invalid email.";
				errObj = { email: { errMsg: "Invalid email." } };
			} else if (!validatePassword) {
				errMsg = "Invalid password.";
				errObj = { password: { errMsg: "Invalid password." } };
			}

			res.status(422).json({
				isError,
				errMsg,
				errObj,
			});
		} else {
			let user = await User.findOne({ email });

			if (user) {
				const isValidPsswrd = bcrypt.compare(password, user.password);

				if (!isValidPsswrd) {
					res.status(422).json({ message: "Invalid password." });
				} else {
					const { _id } = user;
					const token = jwt.sign({ _id }, process.env.SECRET_KEY);
					res.status(200).json({
						message: "User found.",
						user,
						token,
					});
				}
			} else {
				res
					.status(422)
					.json({ errMessage: "You are not registered." });
			}
		}

		return req.connection.close();
	});
}

function postUser(req, res, next) {
	const fd = new IncomingForm();

	//TODO: check db connection before using it
	const User =
		req.connection.models.User ||
		req.connection.model("User", userSchema);

	fd.parse(req, async (err, fields, files) => {
		if (err) {
			return console.log(`[ERROR]: ${err}`);
		}

		let isValid = true;
		let { email, password } = fields;

		email = validator.normalizeEmail(email);

		let validateEmail =
			!validator.isEmpty(email) && validator.isEmail(email);

		let validatePassword =
			!validator.isEmpty(password) &&
			validator.isAlphanumeric(password) &&
			password.length >= 5;

		isValid = validateEmail && validatePassword;

		if (!isValid) {
			let errMsg = "";
			let errObj = {};
			let isError = true;

			if (!validateEmail && !validatePassword) {
				errMsg = "Invalid email and password.";
				errObj = {
					email: { errMsg: "Invalid email." },
					password: { errMsg: "Invalid password." },
				};
			} else if (!validateEmail) {
				errMsg = "Invalid email.";
				errObj = { email: { errMsg: "Invalid email." } };
			} else if (!validatePassword) {
				errMsg = "Invalid password.";
				errObj = { password: { errMsg: "Invalid password." } };
			}

			res.status(422).json({
				isError,
				errMsg,
				errObj,
			});
		} else {
			let user = await User.findOne({ email });

			if (!user) {
				user = new User(fields);

				const hashedPassword = await bcrypt.hash(password, 8);

				user.password = hashedPassword;

				await user.save();

				res
					.status(200)
					.json({ success: true, message: "User created.", user });
			} else {
				res.status(422).json({ errMsg: "User already exists." });
			}
		}

		return req.connection.close();
	});
}

export default {
	getUser,
	postUser,
};

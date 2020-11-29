import jwt from "jsonwebtoken";
import connectDb from "server/middleware/connectDb";
import userSchema from "server/schemas/User";
import { parseCookies } from "utils/parseCookies";

export async function checkAuth(req, res) {
	const { authToken } = parseCookies(req);

	if (!authToken) {
		return {
			isAuth: false,
			authToken: undefined,
		};
	}

	try {
		const decoded = await jwt.verify(
			authToken,
			process.env.SECRET_KEY
		);

		const { _id = null } = decoded;

		if (!_id) {
			return {
				isAuth: false,
				authToken: undefined,
			};
		}

		await connectDb(req);

		const User =
			req.connection.models.User ||
			req.connection.model("User", userSchema);

		const user = await User.findOne({ _id });

		if (user) {
			req.user = JSON.stringify(user);

			req.connection.close();

			return {
				isAuth: true,
				authToken,
			};
		} else {
			req.connection.close();

			return {
				isAuth: false,
				authToken: undefined,
			};
		}
	} catch (e) {
		req.connection.close();
		console.log(`[checkAuth]: ${e.message}`);
	}
}

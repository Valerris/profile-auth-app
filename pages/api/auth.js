import mongoMW from "backend/middleware/mongo";
import apiHandler from "backend/util/apiHandler";
import User from "backend/models/User";
// import controller from "backend/controllers/auth";

export default mongoMW(function (req, res, connection) {
	console.log("[ROUTE]: auth.");

	const { method } = req;

	apiHandler(res, method, {
		GET: function (res) {
			res.json({ message: "GET method in auth route" });
			connection.close();
			return;
		},
		POST: async function (res) {
			const user = new User({
				email: "test@test.com",
				password: "test",
			});

			await user.save();

			res.json({ message: "POST method in auth route", user });
			connection.close();
			return;
		},
	});
});

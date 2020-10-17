import connect from "backend/db/connect";

export default function middleware(handler) {
	return async function (req, res) {
		const [connection] = await connect();

		try {
			await handler(req, res, connection);
		} catch (e) {
			connection.close();
			res.status(500).json({
				error: e.message || "Smth went wrong...",
			});
		}
	};
}

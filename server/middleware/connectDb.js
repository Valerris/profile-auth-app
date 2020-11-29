import connect from "server/db/connect";

export default async function connectDb(
	req,
	res,
	next = () => undefined
) {
	try {
		const [connection] = await connect();

		req.connection = connection;

		return next();
	} catch (error) {
		connection.close();
		return res.status(500).json({
			error: e.message || "Can't connect to DB...",
		});
	}
}

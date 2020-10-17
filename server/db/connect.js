import mongoose from "mongoose";

const connect = async function () {
	const connection = await mongoose.createConnection(
		process.env.MONGODB_URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		}
	);

	console.log("[MONGO DB]: connected.");

	return [connection];
};
export default connect;

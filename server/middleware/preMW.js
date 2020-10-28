import nextConnect from "next-connect";
import connectDb from "server/middleware/connectDb";

const middleware = nextConnect();

middleware.use(connectDb);

export default middleware;

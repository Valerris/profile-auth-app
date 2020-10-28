import nextConnect from "next-connect";
import preMW from "server/middleware/preMW";
import controller from "server/controllers/auth";

export const config = {
	api: {
		bodyParser: false,
	},
};

const handler = nextConnect();

handler.use(preMW);
handler.post("api/auth/login", controller.getUser);

export default handler;

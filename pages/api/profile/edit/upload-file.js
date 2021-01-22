import nextConnect from "next-connect";
import preMW from "server/middleware/preMW";
import controller from "server/controllers/profile/edit/upload-file";

export const config = {
	api: {
		bodyParser: false,
	},
};

const handler = nextConnect();

handler.use(preMW);
handler.post("api/profile/edit/upload-file", controller.uploadFile);

export default handler;

import path, { dirname } from "path";
import { IncomingForm } from "Formidable";

function uploadFile(req, res, next) {
	// const opts = {
	// 	uploadDir: path.resolve(dirname, "public/uploads/profile"),
	// };

	const fs = new IncomingForm();

	fs.parse(req, async (err, fields, files) => {
		if (err) {
			console.log(`[ERROR]: ${err}`);

			// return res.status(500).json({ error: err });
		}

		if (files) {
			console.log(files);
		}

		res.json({ success: true });
	});
}

export default {
	uploadFile,
};

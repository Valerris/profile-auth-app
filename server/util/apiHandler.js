export default function (res, method, handlers) {
	const methods = Object.keys(handlers);

	if (handlers && !handlers[method]) {
		res.setHeader("Allow", methods);
		return res
			.status(405)
			.json({ error: `Method ${method} is not allowed.` });
	} else {
		return handlers[method](res);
	}
}

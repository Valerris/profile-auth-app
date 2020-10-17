function getUser(res, connection) {
	res.json({ message: "GET method in auth route" });
	connection.close();
	return;
}

function postUser(res, connection) {
	res.json({ message: "POST method in auth route" });
	connection.close();
	return;
}

export default {
	getUser,
	postUser,
};

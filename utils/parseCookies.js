export function parseCookies(req) {
	return req ? req.cookies || "" : document.cookie;
}

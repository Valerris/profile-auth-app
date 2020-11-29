import { default as React, useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { logout } from "features/Authentification/reducer";
import Redirect from "components/Redirect/Redirect";

function Logout() {
	const dispatch = useDispatch();

	Cookie.remove("isAuth");
	Cookie.remove("authToken");

	useEffect(() => {
		dispatch(logout());
	});

	return <Redirect to="/login" />;
}

export default Logout;

export async function getServerSideProps({ req }) {
	delete req.cookies.isAuth;
	delete req.cookies.authToken;

	return {
		props: {},
	};
}

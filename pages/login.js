import { useRouter } from "next/router";
import { default as React } from "react";
import Layout from "../common/Layout/Layout";
import Footer from "common/Footer/Footer";
import Authentification from "../features/Authentification/Authentification";
import mock from "features/Authentification/mock";
import Redirect from "components/Redirect/Redirect";
import { checkAuth } from "utils/checkAuth";

function LoginPage(props) {
	const UI = (
		<Layout narrow>
			<Authentification {...props} />
			<Footer />
		</Layout>
	);

	return props.isAuth ? <Redirect to="/profile" /> : UI;
}

export default LoginPage;

export async function getServerSideProps({ req }) {
	const { isAuth = false, authToken = null } = await checkAuth(req);

	return {
		props: {
			formFields: mock.fieldsData,
			icons: mock.iconsData,
			login: true,
			isAuth,
			authToken,
		},
	};
}

import { default as React } from "react";
import Layout from "../common/Layout/Layout";
import Footer from "common/Footer/Footer";
import Authentification from "../features/Authentification/Authentification";
import mock from "features/Authentification/mock";
import { checkAuth } from "utils/checkAuth";

function RegisterPage(props) {
	return (
		<Layout narrow>
			<Authentification {...props} />
			<Footer />
		</Layout>
	);
}

export default RegisterPage;

export async function getServerSideProps({ req }) {
	const { isAuth = false, authToken = null } = await checkAuth(req);

	return {
		props: {
			formFields: mock.fieldsData,
			icons: mock.iconsData,
			register: isAuth ? false : true,
			isAuth,
			authToken,
		},
	};
}

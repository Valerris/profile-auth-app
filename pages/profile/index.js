import { default as React } from "react";
import Topbar from "common/Topbar/Topbar";
import Layout from "common/Layout/Layout";
import Footer from "common/Footer/Footer";
import Profile from "features/Profile/Profile";
import Redirect from "components/Redirect/Redirect";
import { checkAuth } from "utils/checkAuth";

function ProfilePage(props) {
	let { isAuth } = props;
	isAuth = JSON.parse(isAuth);

	const UI = (
		<>
			<Topbar />
			<Layout>
				<Profile {...props} />
				<Footer />
			</Layout>
		</>
	);

	return isAuth ? UI : <Redirect to="/login" />;
}

export default ProfilePage;

export async function getServerSideProps({ req }) {
	const { isAuth = false, authToken = null } = await checkAuth(req);

	return {
		props: {
			isAuth,
			authToken,
		},
	};
}

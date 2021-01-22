import { default as React } from "react";
import Redirect from "components/Redirect/Redirect";
import ProfileEdit from "features/Profile/ProfileEdit/ProfileEdit";
import { checkAuth } from "utils/checkAuth";

function ProfileEditPage(props) {
	let { isAuth } = props;
	isAuth = JSON.parse(isAuth);

	return !isAuth ? <Redirect to="/login" /> : <ProfileEdit />;
}

export default ProfileEditPage;

export async function getServerSideProps({ req }) {
	const { isAuth = false, authToken = null } = await checkAuth(req);

	return {
		props: {
			isAuth,
			authToken,
		},
	};
}

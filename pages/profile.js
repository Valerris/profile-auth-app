import { default as React } from "react";
import Topbar from "common/Topbar/Topbar";
import Layout from "common/Layout/Layout";
import Footer from "common/Footer/Footer";
import Profile from "features/Profile/Profile";

export default function ProfilePage() {
	return (
		<>
			<Topbar />
			<Layout>
				<Profile />
				<Footer />
			</Layout>
		</>
	);
}

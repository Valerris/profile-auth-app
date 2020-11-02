import { default as React } from "react";
import Authentification from "../features/Authentification/Authentification";
import Layout from "../common/Layout/Layout";
import Footer from "common/Footer/Footer";

export default function RegisterPage() {
	return (
		<Layout narrow>
			<Authentification register />
			<Footer />
		</Layout>
	);
}

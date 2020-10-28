import { default as React } from "react";
import Layout from "../common/Layout/Layout";
import Authentification from "../features/Authentification/Authentification";
import styles from "../styles/Index.module.css";

export default function IndexPage() {
	return (
		<Layout>
			<Authentification />
		</Layout>
	);
}

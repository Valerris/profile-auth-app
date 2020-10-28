import { default as React, useEffect } from "react";
import Layout from "../common/Layout/Layout";
import Authentification from "../features/Authentification/Authentification";
import styles from "../styles/Index.module.css";

export default function RegisterPage() {
	// useEffect(() => {
	// 	api();
	// }, []);

	return (
		<Layout>
			<Authentification register />
		</Layout>
	);
}

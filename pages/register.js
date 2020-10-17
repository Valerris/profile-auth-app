import { default as React, useEffect } from "react";
import Layout from "../common/Layout/Layout";
import Authentification from "../features/Authentification/Authentification";
import styles from "../styles/Index.module.css";

const api = async function () {
	const res = await fetch("/api/auth", {
		method: "POST",
		body: new FormData().append("test", "test"),
	});
	const data = await res.json();

	console.log(data);
};

export default function Register() {
	useEffect(() => {
		api();
	}, []);

	return (
		<Layout>
			<Authentification register />
		</Layout>
	);
}

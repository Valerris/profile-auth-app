import Link from "next/link";
import { default as React } from "react";
import Layout from "../common/Layout/Layout";
import styles from "../styles/Index.module.css";

export default function IndexPage() {
	return (
		<Layout>
			<Link href="/login">
				<a>Login</a>
			</Link>
		</Layout>
	);
}

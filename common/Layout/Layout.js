import { default as React } from "react";
import classnames from "classnames";
import Head from "next/head";

export default function Layout({
	title = "Auth App",
	narrow,
	children,
}) {
	const classes = classnames([
		"layout",
		{ ["layout--narrow"]: narrow },
	]);

	return (
		<div className={classes}>
			<Head>
				<title>{title}</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				></link>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
			</Head>
			{children}
		</div>
	);
}

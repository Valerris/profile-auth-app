import Head from "next/head";
import { default as React } from "react";

export default function Layout({ title = "Auth App", children }) {
	return (
		<div className="layout">
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

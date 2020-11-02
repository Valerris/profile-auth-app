import { default as React } from "react";
import Link from "next/link";
import imgsrc from "public/dev-logo.svg";

function Logo() {
	return (
		<Link href="https://devchallenges.io">
			<a className="logo">
				<img src={imgsrc} alt="app logo" />
			</a>
		</Link>
	);
}

export default Logo;

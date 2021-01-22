import { default as React } from "react";
import Link from "next/link";

function Footer() {
	return (
		<footer className="footer">
			<Link href="https://github.com/Valerris">
				<a>@valerris</a>
			</Link>
			<Link href="https://github.com/Valerris">
				<a>github.io</a>
			</Link>
		</footer>
	);
}

export default Footer;

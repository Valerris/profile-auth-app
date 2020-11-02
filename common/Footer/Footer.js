import { default as React } from "react";
import Link from "next/link";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<Link href="https://github.com/Valerris">@valerris</Link>
			</div>
			<Link href="https://github.com/Valerris">github.io</Link>
		</footer>
	);
}

export default Footer;

import { default as React } from "react";
import classnames from "classnames";
import styles from "./ProfileMenuToggleItem.module.css";
import Link from "next/link";
import Divider from "components/Divider/Divider";

function ProfileMenuToggleItem({ href, title, footer }) {
	const classes = classnames([
		styles.profileMenuToggleItem,
		{ [styles["profileMenuToggleItem--footer"]]: footer },
	]);

	const UI = !footer ? (
		<li className={classes}>
			<Link href={href}>
				<a>{title}</a>
			</Link>
		</li>
	) : (
		<>
			<Divider />
			<li className={classes}>
				<Link href={href}>
					<a>{title}</a>
				</Link>
			</li>
		</>
	);

	return UI;
}

export default ProfileMenuToggleItem;

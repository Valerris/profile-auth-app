import Link from "next/link";
import styles from "./SocialIcon.module.css";

export default function SocialIcon({ href = "/", children }) {
	return (
		// <div className={styles["socialIcon-container"]}>
		<Link href={href}>
			<a className={styles.socialIcon}>{children}</a>
		</Link>
		// </div>
	);
}

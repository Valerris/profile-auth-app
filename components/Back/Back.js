import { default as React } from "react";
import styles from "./Back.module.css";

function Back({ content }) {
	return (
		<div className={styles.back}>
			<a
				href="#0"
				onClick={(e) => {
					e.preventDefault();
					window.history.back();
				}}
			>
				{content}
			</a>
		</div>
	);
}

export default Back;

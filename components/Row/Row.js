import { default as React } from "react";
import styles from "./Row.module.css";

function Row({ children }) {
	return (
		<div className={styles.tableRow}>
			{children ? children : null}
		</div>
	);
}

export default Row;

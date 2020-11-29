import { default as React } from "react";
import styles from "./ErrMsg.module.css";

function ErrMsg({ children }) {
	return <div className={styles.ErrMsg}>{children}</div>;
}

export default ErrMsg;

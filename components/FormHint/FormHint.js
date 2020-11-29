import { default as React } from "react";
import classnames from "classnames";
import styles from "./FormHint.module.css";

function FormHint({ error, children }) {
	const classes = classnames([
		styles["form-hint"],
		{ [styles["form-hint--error"]]: error },
	]);

	return <small className={classes}>{children}</small>;
}

export default FormHint;

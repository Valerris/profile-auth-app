import classNames from "classnames";
import styles from "./FormSmall.module.css";

export default function FormSmall({ centered, children }) {
	const classes = classNames(styles.formSmall, {
		[styles["formSmall--centered"]]: centered,
	});

	return <small className={classes}>{children}</small>;
}

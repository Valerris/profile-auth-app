import classNames from "classnames";
import styles from "./Button.module.css";

export default function Button(props) {
	const { children, fullwidth } = props;

	const classes = classNames(styles.button, {
		[styles["button--full-width"]]: fullwidth,
	});

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
}

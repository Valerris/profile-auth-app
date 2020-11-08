import classNames from "classnames";
import { useCallback } from "react";
import util from "./util";
import styles from "./Button.module.css";

export default function Button(props) {
	const { children, fullwidth, transparent, link, onClick } = props;

	const classes = classNames(styles.button, {
		[styles["button--full-width"]]: fullwidth,
		[styles["button--transparent"]]: transparent,
		[styles["button--link"]]: link,
	});

	const clickHandler = useCallback(function (e) {
		util.createRipple(e);

		if (onClick) onClick(e);
	});

	return (
		<button className={classes} {...props} onClick={clickHandler}>
			{children}
		</button>
	);
}

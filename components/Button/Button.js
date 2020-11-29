import { useCallback } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import util from "./util";
import styles from "./Button.module.css";

export default function Button(props) {
	const { children, fullwidth, transparent, link, onClick } = props;

	const { loading: authLoading } = useSelector((state) => state.auth);

	const classes = classNames(styles.button, {
		[styles["button--full-width"]]: fullwidth,
		[styles["button--transparent"]]: transparent,
		[styles["button--link"]]: link,
	});

	const clickHandler = useCallback(function (e) {
		util.createRipple(e);

		if (onClick) onClick(e);
	});

	const content = authLoading ? "Loading..." : children;

	const UI = (
		<button className={classes} {...props} onClick={clickHandler}>
			{content}
		</button>
	);

	return UI;
}

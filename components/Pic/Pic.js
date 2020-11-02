import { default as React } from "react";
import classnames from "classnames";
import styles from "./Pic.module.css";

function Pic({ src = "", small }) {
	const classes = classnames([
		[styles.pic],
		{ [styles["pic--small"]]: small },
	]);

	return (
		<div className={classes}>
			<img src={src} />
		</div>
	);
}

export default Pic;

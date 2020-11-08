import { default as React } from "react";
import classnames from "classnames";
import styles from "./Pic.module.css";

function Pic({ src = "", small, edit, outerClasses, style }) {
	const classes = classnames([
		[styles.pic],
		{ [styles["pic--small"]]: small },
		{ [styles["pic--edit"]]: edit },
	]);

	return (
		<div
			style={{ ...style }}
			className={`${classes} ${outerClasses ? outerClasses : ""}`}
		>
			<img src={src} />
		</div>
	);
}

export default Pic;

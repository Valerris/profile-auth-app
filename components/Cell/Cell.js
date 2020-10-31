import { default as React } from "react";
import classnames from "classnames";
import styles from "./Cell.module.css";

function Cell({ cols, moveRight, children }) {
	const classes = classnames([
		styles.tableCell,
		{
			[styles["tableCell--cols-2"]]: cols === 2,
			[styles["tableCell--cols-3"]]: cols === 3,
			// [styles["tableCell--moveRight"]]: moveRight,
		},
	]);

	const moveRightClass = moveRight
		? [styles["tableCell--moveRight"]]
		: "";

	return (
		<div className={classes}>
			<div className={moveRightClass}>
				{children ? children : null}
			</div>
		</div>
	);
}

export default Cell;

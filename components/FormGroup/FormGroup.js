import { useMemo } from "react";
import classnames from "classnames";
import FormContext from "../FormContext/FormContext";
import styles from "./FormGroup.module.css";

function FormGroup({ controlId, row, halfWidth, children }) {
	const context = useMemo(
		() => ({
			controlId,
		}),
		[controlId]
	);

	const classes = classnames([
		[styles.formGroup],
		{
			[styles["formGroup--row"]]: row,
			[styles["formGroup--half-width"]]: halfWidth,
		},
	]);

	return (
		<FormContext.Provider value={context}>
			<div className={classes}>{children}</div>
		</FormContext.Provider>
	);
}

export default FormGroup;

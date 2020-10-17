import { useMemo } from "react";
import FormContext from "../FormContext/FormContext";
import styles from "./FormGroup.module.css";

function FormGroup({ controlId, children }) {
	const context = useMemo(
		() => ({
			controlId,
		}),
		[controlId]
	);

	return (
		<FormContext.Provider value={context}>
			<div className={styles.formGroup}>{children}</div>
		</FormContext.Provider>
	);
}

export default FormGroup;

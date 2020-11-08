import { useContext } from "react";
import FormContext from "../FormContext/FormContext";
import styles from "./FormLabel.module.css";

function FormLabel({ children }) {
	const { controlId } = useContext(FormContext);
	const htmlFor = controlId;

	return (
		<label className={styles["form-label"]} htmlFor={htmlFor}>
			{children}
		</label>
	);
}

export default FormLabel;

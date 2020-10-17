import { useContext } from "react";
import FormContext from "../FormContext/FormContext";

function FormLabel({ children }) {
	const { controlId } = useContext(FormContext);
	const htmlFor = controlId;

	return <label htmlFor={htmlFor}>{children}</label>;
}

export default FormLabel;

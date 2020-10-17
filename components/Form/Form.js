import { default as React } from "react";
import FormGroup from "../FormGroup/FormGroup";
import FormLabel from "../FormLabel/FormLabel";
import FormControl from "../FormControl/FormControl";
import FormText from "../FormText/FormText";
import FormSmall from "../FormSmall/FormSmall";
import styles from "./Form.module.css";

function Form({ children }) {
	return (
		<form className={styles.form}>{children ? children : null}</form>
	);
}

Form.FormGroup = FormGroup;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Text = FormText;
Form.Small = FormSmall;

export default Form;

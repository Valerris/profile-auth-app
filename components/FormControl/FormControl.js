import { default as React, useContext } from "react";
import FormContext from "../FormContext/FormContext";
import styles from "./FormControl.module.css";

export default function Control(props) {
	const { type, id } = props;
	const { controlId } = useContext(FormContext);
	if (!id) {
		props = { ...props, id: controlId };
	}

	let control = null;

	switch (type) {
		case "email":
			control = (
				<>
					<span className="material-icons md-grey md-incontrol-icon">
						email
					</span>
					<input className={styles.control} {...props} />
				</>
			);
			break;
		case "password":
			control = (
				<>
					<span className="material-icons md-grey md-incontrol-icon">
						lock
					</span>
					<input className={styles.control} {...props} />
				</>
			);
			break;
		case "select":
			const { options } = props;
			control = (
				<select>
					{options
						? Object.keys(options).map((val, i) => (
								<option key={`${Date.now()}-val`} value={val}>
									{options[val]}
								</option>
						  ))
						: null}
				</select>
			);
			break;
		default:
			control = (
				<input className={styles.control} type="text" {...props} />
			);
	}

	return control;
}

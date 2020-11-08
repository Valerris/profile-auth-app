import { default as React, useContext } from "react";
import classnames from "classnames";
import FormContext from "../FormContext/FormContext";
import styles from "./FormControl.module.css";

const Control = React.forwardRef((props, ref) => {
	const { type, preicon, id, smfont } = props;
	const { controlId } = useContext(FormContext);
	if (!id) {
		props = { ...props, id: controlId };
	}

	const classes = classnames([
		[styles.control],
		{
			[styles["control--sm-font"]]: smfont,
			[styles["control--preicon"]]: preicon,
		},
	]);

	let control = null;

	switch (type) {
		case "email":
			control = (
				<>
					<span
						className={classnames([
							"material-icons md-grey md-incontrol-icon",
							{
								["icon--visible"]: preicon,
							},
						])}
					>
						email
					</span>
					<input ref={ref} className={classes} {...props} />
				</>
			);
			break;
		case "password":
			control = (
				<>
					<span
						className={classnames([
							"material-icons md-grey md-incontrol-icon",
							{
								["icon--visible"]: preicon,
							},
						])}
					>
						lock
					</span>
					<input ref={ref} className={classes} {...props} />
				</>
			);
			break;
		case "tel":
			control = (
				<>
					<input ref={ref} className={classes} {...props} />
				</>
			);
			break;
		case "select":
			const { options } = props;
			control = (
				<select ref={ref}>
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
		case "textarea":
			control = (
				<textarea ref={ref} className={classes} {...props}></textarea>
			);
			break;
		default:
			control = (
				<input ref={ref} className={classes} type="text" {...props} />
			);
	}

	return control;
});

export default Control;

import { default as React } from "react";
import Form from "../../components/Form/Form";
import SocialIcon from "components/SocialIcon/SocialIcon";

function createControlsUI(data) {
	return Object.keys(data).map((item, i) => (
		<Form.FormGroup
			key={data[item].controlId}
			controlId={data[item].controlId}
		>
			{item.label && <Form.Label>{item.label}</Form.Label>}
			<Form.Control ref={data[item].ref} {...data[item].opts} />
			{data[item].isError ? (
				<Form.Hint error="true">{data[item].errMsg}</Form.Hint>
			) : null}
		</Form.FormGroup>
	));
}

function createIconsUI(data) {
	return data.map((item, i) => (
		<SocialIcon key={i} href={item.href}>
			{item.icon}
		</SocialIcon>
	));
}

function mapErrToFields(errObj, fields) {
	let withErrorFields = { ...fields };

	Object.keys(errObj).forEach((key) => {
		withErrorFields[key] &&
			(withErrorFields[key].isError = true) &&
			(withErrorFields[key].errMsg = errObj[key].errMsg);
	});

	return withErrorFields;
}

function deepCopyObj(inObject) {
	let outObject, value, key;

	if (typeof inObject !== "object" || inObject === null) {
		return inObject; // Return the value if inObject is not an object
	}

	// Create an array or object to hold the values
	outObject = Array.isArray(inObject) ? [] : {};

	for (key in inObject) {
		value = inObject[key];

		// Recursively (deep) copy for nested objects, including arrays
		outObject[key] = deepCopyObj(value);
	}

	return outObject;
}

export default {
	createControlsUI,
	createIconsUI,
	mapErrToFields,
	deepCopyObj,
};

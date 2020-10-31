import { default as React } from "react";
import Form from "../../components/Form/Form";
import SocialIcon from "components/SocialIcon/SocialIcon";

function createControls(data) {
	return Object.keys(data).map((item, i) => (
		<Form.FormGroup
			key={data[item].controlId}
			controlId={data[item].controlId}
		>
			{item.label && <Form.Label>{item.label}</Form.Label>}
			<Form.Control ref={data[item].ref} {...data[item].opts} />
		</Form.FormGroup>
	));
}

function createIcons(data) {
	return data.map((item, i) => (
		<SocialIcon key={i} href={item.href}>
			{data.icon}
		</SocialIcon>
	));
}

export default {
	createControls,
	createIcons,
};

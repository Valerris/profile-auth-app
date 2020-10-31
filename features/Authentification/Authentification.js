import Link from "next/link";
import { default as React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { asyncFetchUser } from "./reducer";
import Button from "components/Button/Button";
import Form from "components/Form/Form";
import util from "./util";
import data from "./data";

const { fieldsData: fields, iconsData: icons } = data;
const { createControls, createIcons } = util;

function Authentification(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		fields.email.ref.current.focus();
	}, []);

	fields.email.opts.value = email;
	fields.password.opts.value = password;

	fields.email.opts.onChange = function (e) {
		setEmail(e.target.value);
	};

	fields.password.opts.onChange = function (e) {
		setPassword(e.target.value);
	};

	function onFormSubmit(e) {
		e.preventDefault();

		const payload = { email, password };

		dispatch(asyncFetchUser(payload));
	}

	const controls = createControls(fields);

	const socialIcons = createIcons(icons);

	const UI = (
		<Form>
			<h3>Join thousands of learners from around the world</h3>
			<Form.Text>
				Master web development by making real-life projects. There are
				multiple paths for you to choose
			</Form.Text>
			{controls ? controls : null}
			<Form.FormGroup>
				<Button fullwidth="true" onClick={onFormSubmit}>
					Start coding now
				</Button>
				<span></span>
			</Form.FormGroup>
			<Form.Small centered="true">
				or continue with these social profile
			</Form.Small>
			{socialIcons ? (
				<div className="container-row">{socialIcons}</div>
			) : null}
			<Form.Small centered="true">
				Adready a member?{" "}
				<Link href={`/${props.login ? "register" : "login"}`}>
					<a>{props.login ? "Register" : "Login"}</a>
				</Link>
			</Form.Small>
		</Form>
	);

	return UI;
}

export default Authentification;

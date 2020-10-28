import Link from "next/link";
import { default as React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { asyncFetchUser } from "./reducer";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import SocialIcon from "../../components/SocialIcon/SocialIcon";

const fields = {
	email: {
		controlId: "email",
		label: "Email",
		opts: {
			type: "email",
			placeholder: "Email",
			value: "",
			onChange: (e) => {},
		},
		ref: React.createRef(),
	},
	password: {
		controlId: "password",
		label: "Password",
		opts: {
			type: "password",
			placeholder: "Password",
			value: "",
			onChange: (e) => {},
		},
		ref: React.createRef(),
	},
};

const icons = [
	{
		href: "https://www.google.com/",
		icon: <i className="fa fa-google" aria-hidden="true"></i>,
	},
	{
		href: "https://www.facebook.com/",
		icon: <i className="fa fa-facebook" aria-hidden="true"></i>,
	},
	{
		href: "https://twitter.com/",
		icon: <i className="fa fa-twitter" aria-hidden="true"></i>,
	},
	{
		href: "https://github.com/",
		icon: <i className="fa fa-github" aria-hidden="true"></i>,
	},
];

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

	const controls = Object.keys(fields).map((item, i) => (
		<Form.FormGroup
			key={fields[item].controlId}
			controlId={fields[item].controlId}
		>
			{/* <Form.Label>{item.label}</Form.Label> */}
			<Form.Control ref={fields[item].ref} {...fields[item].opts} />
		</Form.FormGroup>
	));

	const socialIcons = icons.map((item, i) => (
		<SocialIcon key={i} href={item.href}>
			{item.icon}
		</SocialIcon>
	));

	const authForm = (
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

	return authForm;
}

export default Authentification;

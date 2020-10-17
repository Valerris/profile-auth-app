import { default as React } from "react";
import Link from "next/link";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import SocialIcon from "../../components/SocialIcon/SocialIcon";

const login = [
	{
		controlId: "email",
		label: "Email",
		opts: {
			type: "email",
			placeholder: "Email",
			onClick: (e) => console.log(e.type),
		},
	},
	{
		controlId: "password",
		label: "Password",
		opts: {
			type: "password",
			placeholder: "Password",
			onClick: (e) => console.log(e.type),
		},
	},
];

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
	const controls = login.map((item, i) => (
		<Form.FormGroup key={item.controlId} controlId={item.controlId}>
			{/* <Form.Label>{item.label}</Form.Label> */}
			<Form.Control {...item.opts} />
		</Form.FormGroup>
	));

	const socialIcons = icons.map((item, i) => (
		<SocialIcon key={i} href={item.href}>
			{item.icon}
		</SocialIcon>
	));

	return (
		<Form>
			<h3>Join thousands of learners from around the world</h3>
			<Form.Text>
				Master web development by making real-life projects. There are
				multiple paths for you to choose
			</Form.Text>
			{controls ? controls : null}
			<Form.FormGroup>
				<Button fullwidth="true" onClick={(e) => e.preventDefault()}>
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
				<Link href={`/${props.login ? "login" : "register"}`}>
					<a>{props.login ? "Login" : "Register"}</a>
				</Link>
			</Form.Small>
		</Form>
	);
}

export default Authentification;

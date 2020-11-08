import { default as React } from "react";

const fieldsData = {
	email: {
		controlId: "email",
		label: "Email",
		opts: {
			type: "email",
			placeholder: "Email",
			value: "",
			preicon: "true",
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
			preicon: "true",
			onChange: (e) => {},
		},
		ref: React.createRef(),
	},
};

const iconsData = [
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

export default {
	fieldsData,
	iconsData,
};

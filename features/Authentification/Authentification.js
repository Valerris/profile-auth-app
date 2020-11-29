import Link from "next/link";
import { useRouter } from "next/router";
import { default as React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookie from "js-cookie";
import { asyncFetchUser } from "./reducer";
import Button from "components/Button/Button";
import Form from "components/Form/Form";
import Logo from "components/Logo/Logo";
import util from "./util";
import Redirect from "components/Redirect/Redirect";
import ErrMsg from "components/ErrMsg/ErrMsg";

const {
	createControlsUI,
	createIconsUI,
	mapErrToFields,
	deepCopyObj,
} = util;

function Authentification({
	formFields,
	icons,
	isAuth,
	login,
	register,
}) {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { success, user, token, err } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();

	let controls = deepCopyObj(formFields);
	let controlsUI = null;
	let socialIconsUI = null;

	console.log(controls);

	if (!err && register && success) router.push("/login");

	useEffect(() => {
		!isAuth &&
			controls &&
			controls.email.ref.current &&
			controls.email.ref.current.focus();
	}, []);

	useEffect(() => {
		if (token) {
			Cookie.set("isAuth", !!token, {
				sameSite: "Strict",
			});

			Cookie.set("authToken", token, {
				sameSite: "Strict",
			});
		}
	}, [token]);

	function onFormSubmit(e) {
		e.preventDefault();

		const payload = { email, password };

		dispatch(asyncFetchUser(payload));
	}

	if (err) {
		err.errObj && (controls = mapErrToFields(err.errObj, controls));
	}

	controls.email.opts.value = email;
	controls.password.opts.value = password;

	controls.email.opts.onChange = function ({ target: { value } }) {
		setEmail(value);
	};

	controls.password.opts.onChange = function ({ target: { value } }) {
		setPassword(value);
	};

	controlsUI = createControlsUI(controls);
	const errorMessageUI = !login && err && err.errMsg && (
		<ErrMsg>{err.errMsg}</ErrMsg>
	);

	const UI = (
		<Form>
			<Logo />
			<h3>Join thousands of learners from around the world</h3>
			<Form.Text>
				Master web development by making real-life projects. There are
				multiple paths for you to choose
			</Form.Text>
			{errorMessageUI}
			{controlsUI ? controlsUI : null}
			<Form.FormGroup>
				<Button fullwidth="true" onClick={onFormSubmit}>
					Start coding now
				</Button>
				<span></span>
			</Form.FormGroup>
			<Form.Small centered="true">
				or continue with these social profile
			</Form.Small>
			{socialIconsUI ? (
				<div className="container-row">{socialIconsUI}</div>
			) : null}
			<Form.Small centered="true">
				Adready a member?{" "}
				<Link href={`/${login ? "register" : "login"}`}>
					<a>{login ? "Register" : "Login"}</a>
				</Link>
			</Form.Small>
		</Form>
	);

	return isAuth || token ? <Redirect to="/profile" /> : UI;
}

export default Authentification;

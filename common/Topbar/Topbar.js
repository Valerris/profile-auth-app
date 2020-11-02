import { default as React } from "react";
import Logo from "components/Logo/Logo";
import Pic from "components/Pic/Pic";

function Topbar() {
	return (
		<div className="topbar">
			<div className="topbar__left">
				<Logo />
			</div>
			<div className="topbar__right">
				<Pic src="/letter-b.svg" small />
			</div>
		</div>
	);
}

export default Topbar;

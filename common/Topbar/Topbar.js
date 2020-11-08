import { default as React } from "react";
import Logo from "components/Logo/Logo";
import ProfileMenu from "features/ProfileMenu/ProfileMenu";

function Topbar() {
	return (
		<div className="topbar">
			<div className="topbar__left">
				<Logo />
			</div>
			<div className="topbar__right">
				<ProfileMenu />
			</div>
		</div>
	);
}

export default Topbar;

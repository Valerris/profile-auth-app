import data from "./data";
import createTable from "./util";

function ProfileInfo() {
	const UI = (
		<>
			<h2>Personal info</h2>
			<div className="sub-header">
				Basic info, like your name and photo
			</div>
			{createTable(data)}
		</>
	);

	return UI;
}

export default ProfileInfo;

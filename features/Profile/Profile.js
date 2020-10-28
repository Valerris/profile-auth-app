import { default as React } from "react";
import Button from "components/Button/Button";
import Table from "components/Table/Table";

const fileds = [];

function Profile() {
	return (
		<>
			<h2>Personal info</h2>
			<div className="sub-header">
				Basic info, like your name and photo
			</div>

			<div styles={{ border: "1px solid grey" }}>
				<div>Profile</div>
				<div>
					<Button>Edit</Button>
				</div>
				<Table>
					<Table.Row>
						<Table.Cell>Cell</Table.Cell>
						<Table.Cell>Cell</Table.Cell>
						<Table.Cell>Cell</Table.Cell>
					</Table.Row>
				</Table>
			</div>
		</>
	);
}

export default Profile;

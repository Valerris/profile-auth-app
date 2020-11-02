import { default as React } from "react";
import Table from "components/Table/Table";
import Pic from "components/Pic/Pic";
import Button from "components/Button/Button";

export default [
	[
		{
			opts: {
				cols: 2,
			},
			content: (
				<>
					<div className={Table.classTableHeader}>Profile</div>
					<div className={Table.classTableSubheader}>
						Some info may be visible to other people
					</div>
				</>
			),
		},
		{
			opts: { moveRight: true },
			content: (
				<>
					<Button>Edit</Button>
				</>
			),
		},
	],
	[
		{
			content: "Photo",
		},
		{
			opts: {
				cols: 2,
			},
			content: <Pic src="/letter-b.svg" />,
		},
	],
	[
		{
			content: "Name",
		},
		{
			opts: {
				cols: 2,
			},
			content: "Xanthe Neal",
		},
	],
	[
		{
			content: "Bio",
		},
		{
			opts: {
				cols: 2,
			},
			content:
				"I am a software developer and a big fan of devchallenges...",
		},
	],
	[
		{
			content: "Phone",
		},
		{
			opts: {
				cols: 2,
			},
			content: "908249274292",
		},
	],
	[
		{
			content: "Email",
		},
		{
			opts: {
				cols: 2,
			},
			content: "xanthe.neal@gmail.com",
		},
	],
	[
		{
			content: "Password",
		},
		{
			opts: {
				cols: 2,
			},
			content: "************",
		},
	],
];

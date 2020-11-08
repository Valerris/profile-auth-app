import { default as React } from "react";
import Form from "components/Form/Form";
import Pic from "components/Pic/Pic";
import Button from "components/Button/Button";
import Link from "next/link";

export default [
	[
		{
			opts: {
				cols: 2,
			},
			content: (
				<>
					<h3>Profile</h3>
					<small>Some info may be visible to other people</small>
				</>
			),
		},
		{
			opts: { moveRight: true },
			content: (
				<>
					<Link href="/profile/edit">
						<a>
							<Button transparent="true">Edit</Button>
						</a>
					</Link>
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

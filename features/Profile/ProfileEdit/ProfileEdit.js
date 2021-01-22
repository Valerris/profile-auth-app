import { default as React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "common/Topbar/Topbar";
import Layout from "common/Layout/Layout";
import Footer from "common/Footer/Footer";
import Pic from "components/Pic/Pic";
import Form from "components/Form/Form";
import Button from "components/Button/Button";
import Back from "components/Back/Back";
import {
	selectFile,
	asyncUploadImage,
} from "features/Profile/ProfileEdit/reducer";

function ProfileEdit() {
	const [images, setImages] = useState(null);

	const img_upload = useSelector((state) => state["img_upload"]);
	const dispatch = useDispatch();

	function filesHandler({ target: { files } }) {
		console.log(files);

		setImages(files);

		// const reader = new FileReader();

		// reader.addEventListener(
		// 	"load",
		// 	function ({ target: { result } }) {
		// 		console.log(result);
		// 	}
		// );

		// reader.readAsArrayBuffer(files[0]);
		// dispatch(selectFile(files[0]));
	}

	function submitHandler(e) {
		e.preventDefault();

		dispatch(asyncUploadImage(images));
	}

	const UI = (
		<>
			<Topbar />
			<Layout>
				<Back content="Back" />
				<Form>
					<h3>Change Info</h3>
					<small>Changes will be reflected to every services</small>
					<Form.FormGroup row="true" halfWidth="true">
						<Pic
							style={{ marginRight: "1.5rem" }}
							edit="true"
							src="/letter-b.svg"
						/>
						{/* <Button link="true" onClick={(e) => e.preventDefault()}>
					Change photo
				</Button> */}
						<Form.Control
							type="file"
							title="Change photo"
							accept=".jpg, .jpeg, .png, .txt"
							onChange={filesHandler}
						/>
					</Form.FormGroup>
					<Form.FormGroup controlId="name" halfWidth="true">
						<Form.Label>Name</Form.Label>
						<Form.Control
							smfont="true"
							placeholder="Enter your name..."
						/>
						<Form.Hint>name hint...</Form.Hint>
					</Form.FormGroup>
					<Form.FormGroup controlId="bio" halfWidth="true">
						<Form.Label>Bio</Form.Label>
						<Form.Control
							smfont="true"
							type="textarea"
							placeholder="Enter your bio..."
						/>
					</Form.FormGroup>
					<Form.FormGroup controlId="phone" halfWidth="true">
						<Form.Label>Phone</Form.Label>
						<Form.Control
							smfont="true"
							type="tel"
							placeholder="Enter your phone..."
						/>
					</Form.FormGroup>
					<Form.FormGroup controlId="email" halfWidth="true">
						<Form.Label>Email</Form.Label>
						<Form.Control
							smfont="true"
							type="email"
							placeholder="Enter your email..."
						/>
					</Form.FormGroup>
					<Form.FormGroup controlId="password" halfWidth="true">
						<Form.Label>Password</Form.Label>
						<Form.Control
							smfont="true"
							type="password"
							placeholder="Enter your password..."
						/>
					</Form.FormGroup>
					<Button type="submit" onClick={submitHandler}>
						Save
					</Button>
				</Form>
				<Footer />
			</Layout>
		</>
	);

	return UI;
}

export default ProfileEdit;

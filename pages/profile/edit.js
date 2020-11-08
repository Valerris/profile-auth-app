import { default as React } from "react";
import Topbar from "common/Topbar/Topbar";
import Layout from "common/Layout/Layout";
import Footer from "common/Footer/Footer";
import Pic from "components/Pic/Pic";
import Form from "components/Form/Form";
import Button from "components/Button/Button";
import Back from "components/Back/Back";

export default function ProfilePage() {
	return (
		<>
			<Topbar />
			<Layout>
				<Back content="Back" />
				<Form>
					<h3>Change Info</h3>
					<small>Changes will be reflected to every services</small>
					<Form.FormGroup row>
						<Pic
							style={{ marginRight: "1.5rem" }}
							edit="true"
							src="/letter-b.svg"
						/>
						<Button link="true" onClick={(e) => e.preventDefault()}>
							Change photo
						</Button>
					</Form.FormGroup>
					<Form.FormGroup controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							smfont="true"
							placeholder="Enter your name..."
						/>
					</Form.FormGroup>
					<Form.FormGroup controlId="bio">
						<Form.Label>Bio</Form.Label>
						<Form.Control smfont="true" type="textarea" />
					</Form.FormGroup>
					<Form.FormGroup controlId="phone">
						<Form.Label>Phone</Form.Label>
						<Form.Control smfont="true" type="tel" />
					</Form.FormGroup>
					<Form.FormGroup controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control smfont="true" type="email" />
					</Form.FormGroup>
					<Form.FormGroup controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control smfont="true" type="password" />
					</Form.FormGroup>
					<Button type="submit" onClick={(e) => e.preventDefault()}>
						Save
					</Button>
				</Form>
				<Footer />
			</Layout>
		</>
	);
}

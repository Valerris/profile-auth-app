import { default as React } from "react";
import ProfileMenuToggleList from "components/ProfileMenuToggleList/ProfileMenuToggleList";
import styles from "./ProfileMenuToggle.module.css";

function ProfileMenuToggle({ parentRef }) {
	return (
		<div className={styles.profileMenuToggle}>
			<ProfileMenuToggleList />
		</div>
	);
}

export default ProfileMenuToggle;

import { default as React } from "react";
import mock from "./mock";
import util from "./util";
import styles from "./ProfileMenuToggleList.module.css";

function ProfileMenuToggleList({ items }) {
	const UI = util.createList(mock);

	return (
		<ul className={styles.profileMenuToggleList}>{UI ? UI : null}</ul>
	);
}

export default ProfileMenuToggleList;

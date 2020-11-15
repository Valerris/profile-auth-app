import {
	default as React,
	useState,
	useCallback,
	useEffect,
	useRef,
} from "react";
import Pic from "components/Pic/Pic";
import WithPortal from "HOC/WithPortal";
import ProfileMenuToggle from "features/ProfileMenuToggle/ProfileMenuToggle";
import styles from "./ProfileMenu.module.css";

function ProfileMenu() {
	const ref = useRef();

	const [isToggleVisible, setIsToggleVisible] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	const mouseEnterHandler = useCallback(function (e) {
		setIsToggleVisible(true);
	}, []);

	const mouseLeaveHandler = useCallback(function (e) {
		setIsToggleVisible(false);
	}, []);

	useEffect(function () {
		ref.current = document.querySelector(
			`.${styles["profile-menu"]}`
		);
		setIsMounted(true);
	}, []);

	return (
		<>
			<div
				className={styles["profile-menu"]}
				onMouseEnter={mouseEnterHandler}
				onMouseLeave={mouseLeaveHandler}
			>
				<Pic
					style={{ marginRight: "0.5rem" }}
					src="/letter-b.svg"
					small
				/>
				<div className={styles["profile-menu__name"]}>
					Xanthe Neal
				</div>
				{isToggleVisible ? (
					<ProfileMenuToggle parentRef={ref} />
				) : null}
			</div>

			{/* {isMounted && isToggleVisible ? (
				<WithPortal selector="#profile-menu-toggle">
					<ProfileMenuToggle parentRef={ref} />
				</WithPortal>
			) : null} */}
		</>
	);
}

export default ProfileMenu;

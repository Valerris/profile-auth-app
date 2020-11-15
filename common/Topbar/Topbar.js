import { default as React, useEffect, useRef } from "react";
import Logo from "components/Logo/Logo";
import ProfileMenu from "features/ProfileMenu/ProfileMenu";

function Topbar() {
	const ref = useRef(null);

	useEffect(() => {
		const topbar = ref.current;
		const layout = document.querySelector(".layout");
		let prevY = 0;
		let isFixed = false;

		layout.style = null;
		topbar.classList.remove("topbar--fixed");
		topbar.classList.remove("topbar--reveal");
		topbar.classList.remove("topbar--transition");

		window.onscroll = function (e) {
			const topbarHeight = topbar.offsetHeight;
			const Y = this.scrollY;
			let dY = undefined;

			dY = Y - prevY;

			prevY = Y;

			if (Y > topbarHeight) {
				if (dY >= 0) {
					if (!isFixed) {
						layout.style.marginTop = topbarHeight + "px";
						topbar.classList.add("topbar--fixed");
						isFixed = true;
					} else {
						topbar.classList.contains("topbar--transition")
							? null
							: topbar.classList.add("topbar--transition");
						topbar.classList.remove("topbar--reveal");
					}
				} else {
					topbar.classList.add("topbar--reveal");
				}
			} else if (Y === 0) {
				layout.style.marginTop = null;
				topbar.classList.remove("topbar--fixed");
				topbar.classList.remove("topbar--reveal");
				topbar.classList.remove("topbar--transition");

				isFixed = false;
			}
		};

		return () => {
			window.onscroll = undefined;
		};
	});

	return (
		<div ref={ref} className="topbar">
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

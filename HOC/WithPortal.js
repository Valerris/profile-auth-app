import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function WithPortal({ selector, parentRef, children }) {
	const ref = useRef();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector(selector);
		setIsMounted(true);
	}, [selector]);

	return isMounted ? createPortal(children, ref.current) : null;
}

export default WithPortal;

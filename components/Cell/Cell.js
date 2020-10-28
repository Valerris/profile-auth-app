import { default as React } from "react";

function Cell({ children }) {
	return <div>{children ? children : null}</div>;
}

export default Cell;

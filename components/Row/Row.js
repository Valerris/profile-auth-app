import { default as React } from "react";

function Row({ children }) {
	return <div>{children ? children : null}</div>;
}

export default Row;

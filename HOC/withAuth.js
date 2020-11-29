import { default as React } from "react";
import { useRouter } from "next/router";

function withAuth(ComposedCmp, UnauthorizedCmp) {
	function withAuthCmp(props) {
		const { isAuth } = props;

		if (isAuth) {
			return <ComposedCmp {...props} />;
		}

		return <UnauthorizedCmp {...props} />;
	}

	return withAuthCmp;
}

export default withAuth;

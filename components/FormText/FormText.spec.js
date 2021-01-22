import setUpShallow from "tests.utils/setUpShallow";
import FormText from "./FormText";

describe("<FormText />", () => {
	let cmp = null;
	beforeEach(() => {
		cmp = setUpShallow(FormText);
	});

	it("should render FormText component with props", () => {
		cmp = setUpShallow(FormText, { children: "Form Text" });
		expect(cmp).toMatchSnapshot();
	});

	it("should render FormText component without props", () => {
		cmp = setUpShallow(FormText);
		expect(cmp).toMatchSnapshot();
	});
});

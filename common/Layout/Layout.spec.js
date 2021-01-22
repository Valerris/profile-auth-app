import setUpShallow from "tests.utils/setUpShallow";
import Layout from "./Layout";

describe("<Layout />", () => {
	let cmp = null;

	beforeEach(() => {
		cmp = setUpShallow(Layout);
	});

	it("should contain .layout wrapper", () => {
		const wrapper = cmp.find(".layout");

		expect(wrapper.length).toBe(1);
	});
});

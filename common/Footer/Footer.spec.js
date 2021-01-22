import { default as React } from "react";
import setUpShallow from "tests.utils/setUpShallow";
import Footer from "./Footer";

describe("<Footer />", () => {
	let cmp = null;

	beforeEach(() => {
		cmp = setUpShallow(Footer);
	});

	it("should contain .footer wrapper", () => {
		const wrapper = cmp.find(".footer");

		expect(wrapper.length).toBe(1);
	});

	it("should contain 2 links", () => {
		const wrapper = cmp.find("a");

		expect(wrapper.length).toBe(2);
	});
});

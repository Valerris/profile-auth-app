import setUpShallow from "tests.utils/setUpShallow";
import FormControl from "./FormControl";

const props = {
	smfont: "true",
	type: "textarea",
	placeholder: "Enter your bio...",
	ref: "ref",
	onClick: () => "clicked",
};

describe("<FormControl />", () => {
	let cmp = null,
		instance = null;

	beforeEach(() => {
		cmp = setUpShallow(FormControl);
		instance = cmp.instance();
	});

	describe("has props", () => {
		it("should render textarea", () => {
			cmp = setUpShallow(FormControl, props);
			const wrapper = cmp.find("textarea");
			expect(wrapper).toHaveLength(1);
			// expect(wrapper).toHaveAttribute("type", "textarea");
		});
	});

	describe("has no props", () => {
		it("should render input", () => {
			const wrapper = cmp.find("input");
			expect(wrapper).toHaveLength(1);
			// expect(wrapper).toHaveAttribute("type", "text");
		});
	});

	describe("component handlers", () => {
		it("should call onChange method", () => {
			const mockCb = jest.fn();

			const cmp = shallow(<FormControl onChange={mockCb} />);

			expect(mockCb.mock.calls.length).toEqual(0);

			cmp.find("input").simulate("change");

			expect(mockCb.mock.calls.length).toBe(1);
		});
	});
});

import setUpShallow from "tests.utils/setUpShallow";
import ProfileMenuToggleList from "./ProfileMenuToggleList";

describe("<ProfileMenuToggleList />", () => {
	let cmp = null;

	beforeEach(() => {
		cmp = setUpShallow(ProfileMenuToggleList);
	});

	it("should render ProfileMenuToggleList component", () => {
		expect(cmp).toMatchSnapshot();
	});
});

import ProfileMenuToggleItem from "./ProfileMenuToggleItem/ProfileMenuToggleItem";

function createList(list) {
	return list.map((item, i) => (
		<ProfileMenuToggleItem key={i} {...item} />
	));
}

export default { createList };

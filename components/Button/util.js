function createRipple(e) {
	clearRipple();

	const btn = e.currentTarget;

	const circle = document.createElement("span");
	const d = Math.max(btn.clientWidth, btn.clientHeight);
	const r = d / 2;

	circle.style.width = circle.style.height = d + "px";
	circle.style.left = e.pageX - btn.offsetLeft - r + "px";
	circle.style.top = e.pageY - btn.offsetTop - r + "px";

	circle.classList.add("ripple");

	btn.appendChild(circle);
}

function clearRipple() {
	const ripples = document.getElementsByClassName("ripple");

	ripples &&
		Array.prototype.forEach.call(ripples, (item, i) => item.remove());
}

export default { createRipple };

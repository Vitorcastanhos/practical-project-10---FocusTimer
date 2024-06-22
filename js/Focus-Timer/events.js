import { controls } from "./elements";

export function registerControls() {
	controls.addEventListener("click", (event) => {
		const action = event.target.dataset.action;
		if (action === undefined) {
			return;
		}
	});
}

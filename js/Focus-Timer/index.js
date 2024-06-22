import state from "./state";
import * as events from "./events";

export function start(minutes, seconds) {
	state.minutes = minutes;
	state.seconds = seconds;

    events.registerControlsEvents();
}

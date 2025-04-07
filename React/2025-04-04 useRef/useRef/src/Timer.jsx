import { useRef, useState } from "react";

export default function Timer() {
	const [time, setTime] = useState(0);
	const [isTimerOn, setTimerOn] = useState(false); //false -> true
	const intervalId = useRef(null);

	function switchTimerState() {
		setTimerOn((c) => {
			const newState = !c;
			if (newState)
				intervalId.current = setInterval(function () {
					setTime((c) => c + 1);
				}, 1000);
			//true
			else clearInterval(intervalId.current); //false
			return newState;
		});
	}

	return (
		<main>
			<p>
				<b>Praėjęs laikas: </b> {time}s.
			</p>
			<button onClick={switchTimerState}>{isTimerOn ? "stop" : "start"}</button>
		</main>
	);
}

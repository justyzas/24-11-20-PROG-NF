import { useEffect, useState } from "react";

export default function Timer() {
	const [seconds, setSeconds] = useState(0);
	const [isTimerOn, setTimerOn] = useState(true);

	useEffect(() => {
		const intervalID = setInterval(() => {
			if (isTimerOn) setSeconds((c) => c + 1);
		}, 1000);

		return () => {
			clearInterval(intervalID);
		};
	}, [isTimerOn]);
	//1. kai komponentas užsikrauna
	//2. kai komponentas persikrauna

	return (
		<main>
			<p>Praėjęs laikas: {seconds}</p>
			<button onClick={() => setTimerOn((c) => !c)}>
				{isTimerOn ? "Sustabdyti laikrodį" : "Įjungti laikrodį"}
			</button>
		</main>
	);
}

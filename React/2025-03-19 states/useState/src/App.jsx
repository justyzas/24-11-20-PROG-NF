import { useState } from "react";

export default function App() {
	const [count, setCount] = useState(0);
	const [increaseBy, setIncreaseBy] = useState(1);

	function increaseCount() {
		setCount(count + increaseBy);
	}
	function decreaseCount() {
		setCount(count - increaseBy);
	}

	function changeIncreaseBy(e) {
		const button = e.target;
		const by = Number(button.attributes.by.value);
		setIncreaseBy(increaseBy + by);
	}

	return (
		<main>
			<h4>
				<b>Dabartinis skaičius:</b> {count}
			</h4>
			<p>
				<b>Didiname po:</b>
				<button
					by={-100}
					onClick={changeIncreaseBy}
				>
					-100
				</button>
				<button
					by={-10}
					onClick={changeIncreaseBy}
				>
					-10
				</button>
				<button
					by={-1}
					onClick={changeIncreaseBy}
				>
					-1
				</button>
				<b>{increaseBy}</b>
				<button
					by={1}
					onClick={changeIncreaseBy}
				>
					+1
				</button>
				<button
					by={10}
					onClick={changeIncreaseBy}
				>
					+10
				</button>
				<button
					by={100}
					onClick={changeIncreaseBy}
				>
					+100
				</button>
			</p>
			<button onClick={increaseCount}>Padidinti skaičių</button>
			<button onClick={decreaseCount}>Pamažinti skaičių</button>
		</main>
	);
}

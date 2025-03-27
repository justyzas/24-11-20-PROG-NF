import { useEffect } from "react";
import { useState } from "react";

let rerenders = 0;
export default function App() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	const [input, setInput] = useState("");

	// useEffect(funckija, dependencyArray);
	// useEffect panaudojimas
	// 1. Kai norime paleisti kodą komponente tik vieną kartą (komponentui užsikraunant)
	// 2. Kai norime paleisti kodą komponente, kai pasikeičia state (Būsena)
	useEffect(() => {
		// if (rerenders % 2 == 0 && rerenders !== 0) console.log("Count pasikeitė");

		if (rerenders < 50) setCount2((c) => c + 1);
		rerenders++;
	}, [count, input]);
	console.log("Komponentas persikrovė");
	return (
		<main>
			<p>count2: {count2}</p>
			<button onClick={() => setCount((c) => c + 1)}>Count is {count}</button>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</main>
	);
}

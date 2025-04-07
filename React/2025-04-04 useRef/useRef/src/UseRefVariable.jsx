import { useRef, useState } from "react";

export default function App() {
	const [count, setCount] = useState(0);
	const kiekPersikrove = useRef(0); // Sukuriamas kintamasis, kuriam keičiantis neįvyksta komponento persikrovimai
	const pElementas = useRef(null);
	kiekPersikrove.current++;
	console.log(`${kiekPersikrove.current}. Persikrovimas ivyko - App `);

	// console.log(x);
	console.log(pElementas);

	function didintiSk() {
		setCount((c) => c + 1);
		// setCount((c) => c + 1);
		// setCount((c) => c + 1);
		// Šitie neveiktų
		// setCount(count + 1);//0 + 1 = 1
		// setCount(count + 1);//0 + 1 = 1
		// setCount(count + 1);
		pElementas.current.style.color = count % 2 === 0 ? "red" : "blue";
	}
	return (
		<main>
			<p ref={pElementas}>
				<b>Dabartinis skaičius: </b> {count}
			</p>
			<button onClick={didintiSk}>Increase Count</button>
		</main>
	);
}

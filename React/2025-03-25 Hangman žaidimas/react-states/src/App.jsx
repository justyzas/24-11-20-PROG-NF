import { useState } from "react";
import words from "./data/words.json";
import GuessingLetters from "./components/GuessingLetters";

function App() {
	// useState gali kaip parametrą naudoti pradinę reikšmę,
	// arba funkciją kuri returnina pradinę reikšmę
	const [correctWord, setCorrectWord] = useState(() => {
		const randomIndex = rand(0, words.length - 1);
		return words[randomIndex];
	});

	const [guessedLetters, setGuessedLetters] = useState(["A", "I"]); //[]
	// console.log(rand(1, 2));
	console.log(correctWord);
	return (
		<main>
			<h1>Žodžių spėjimo žaidimas</h1>

			<GuessingLetters
				correctWord={correctWord}
				guessedLetters={guessedLetters}
			/>

			<p>
				<b>Žodžio aprašymas:</b> {correctWord.description}
			</p>

			{/* <Button color="red" onClick={()=>{}}>Restart</Button> */}
			{/* <PossibleLetters /> */}

			<p>
				<b>Likę užuominų: </b> X
				{/* <Button color="green" onClick={()=>{}}>Gauti užuominą</Button> */}
			</p>

			<div>{/* <Button color="grey" onClick={()=>{}}>Guess</Button> */}</div>
		</main>
	);
}

export default App;

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

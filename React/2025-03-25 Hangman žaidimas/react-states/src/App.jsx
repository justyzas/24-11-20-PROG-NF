import { useState } from "react";
import words from "./data/words.json";
import GuessingLetters from "./components/GuessingLetters";
import Button from "./components/Button";
import PossibleLetters from "./components/PossibleLetters";
import LostGameScreen from "./components/LostGameScreen";

function findRandomWord() {
	const randomIndex = rand(0, words.length - 1);
	return words[randomIndex];
}
function App() {
	// useState gali kaip parametrą naudoti pradinę reikšmę,
	// arba funkciją kuri returnina pradinę reikšmę
	const [correctWord, setCorrectWord] = useState(findRandomWord);

	const [guessedLetters, setGuessedLetters] = useState([]); //[]

	const [health, setHealth] = useState(5);

	const [lastGuessCorrect, setLastGuessCorrect] = useState(null);

	function restart() {
		setCorrectWord(findRandomWord());
		setGuessedLetters([]);
		setHealth(5);
		setLastGuessCorrect(null);
	}

	function isGameWon() {
		if (health <= 0) return false;

		let correctWordRemovable = correctWord.word.toUpperCase();

		guessedLetters.forEach((c) => {
			correctWordRemovable.replaceAll(c, "");
		});
		// if(correctWordRemovable.length === 0) return true
		// else return false; //ILGASIS VARIANTAS
		return correctWordRemovable.length === 0;
	}

	if (health === 0)
		return (
			<LostGameScreen
				correctWord={correctWord.word}
				guessesCount={guessedLetters.length}
				onRestart={restart}
			/>
		);
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

			<Button
				backgroundColor="tomato"
				onClick={restart}
			>
				Bandyti iš naujo
			</Button>

			{lastGuessCorrect !== null &&
				(lastGuessCorrect ? (
					<p className="text-success">Jūsų spėjimas buvo teisingas!</p>
				) : (
					<p className="text-red">
						Jūsų spėjimas buvo neteisingas! Liko {health} gyvybių!
					</p>
				))}

			<PossibleLetters
				guessedLetters={guessedLetters}
				onGuess={(guessedLetter) => {
					// setGuessedLetters([...guessedLetters, guessedLetter]);
					setGuessedLetters((c) => [...c, guessedLetter]);
					if (!correctWord.word.toUpperCase().includes(guessedLetter)) {
						setHealth((c) => c - 1); //setter funkcijos gali priimti arba:
						setLastGuessCorrect(false);
						// naują reikšmę
						// funkciją, grąžinančią naują reikšmę

						// c - parametras, nurodantis būsenos dabartinę reikšmę
					} else setLastGuessCorrect(true);
				}}
			/>

			<p>
				<b>Likę užuominų: </b> {correctWord.hints}
				{/* <Button color="green" onClick={()=>{}}>Gauti užuominą</Button> */}
			</p>
			<p>
				<b>Likę Gyvybių: </b> {health}
			</p>

			<div>{/* <Button color="grey" onClick={()=>{}}>Guess</Button> */}</div>
		</main>
	);
}

export default App;

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

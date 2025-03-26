import PossibleLetter from "./PossibleLetter";

const possibleLetters = "AĄBCČDEĘĖFGHIĮJKLMNOPRSŠTUŲŪVYZŽ";
const possibleLettersArray = possibleLetters.split(""); //["A", "Ą", "B"]
export default function PossibleLetters({ guessedLetters, onGuess }) {
	return (
		<div className="guessing-letters mt-2">
			{possibleLettersArray.map((letter) => (
				<PossibleLetter
					key={letter}
					character={letter}
					isUsed={guessedLetters.includes(letter)}
					onClick={() => {
						onGuess(letter);
					}}
				/>
			))}
		</div>
	);
}

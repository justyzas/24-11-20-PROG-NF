import GuessingLetter from "./GuessingLetter";

export default function GuessingLetters(props) {
	const word = props.correctWord.word;
	const letters = word.toUpperCase().split("");
	const guessedLetters = props.guessedLetters; // ["A"]
	console.log(word);
	return (
		<div className="guessing-letters">
			{letters.map((letter, index) => (
				<GuessingLetter
					key={index}
					letter={guessedLetters.includes(letter) ? letter : ""}
				/>
			))}
		</div>
	);
}

import Button from "./Button";

export default function WonGameScreen({ onRestart, correctWord, guessCount }) {
	return (
		<main>
			<h1>Sveikiname! Laimėjote žaidimą!</h1>
			<p>
				<b>Teisingas žodis: </b> {correctWord}
			</p>
			<p>
				<b>Atlikta spėjimų: </b> {guessCount}
			</p>
			<p>
				<b>Neteisingų spėjimų skaičius: </b> X
			</p>
			<Button
				onClick={onRestart}
				backgroundColor="tomato"
			>
				Bandyti iš naujo
			</Button>
		</main>
	);
}

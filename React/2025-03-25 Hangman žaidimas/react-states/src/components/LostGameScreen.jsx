import Button from "./Button";

export default function LostGameScreen({
	onRestart = () => {},
	correctWord = "",
	guessesCount = 0,
}) {
	return (
		<main>
			<h1>Deja, nepavyko!</h1>
			<p>
				<b>Teisingas žodis buvo: </b>
				{correctWord}
			</p>
			<p>
				<b>Atlikta spėjimų: </b>
				{guessesCount}
			</p>
			<Button
				backgroundColor="tomato"
				onClick={onRestart}
			>
				Bandyti iš naujo
			</Button>
		</main>
	);
}

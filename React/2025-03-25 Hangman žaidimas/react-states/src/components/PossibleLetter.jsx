export default function PossibleLetter({ character, isUsed = false, onClick }) {
	if (typeof character !== "string" || character.length > 1) return <></>;

	return (
		<div
			className={isUsed ? "letter used-letter " : "letter unused-letter"}
			onClick={onClick}
		>
			{character.toUpperCase()}
		</div>
	);
}

import { useState } from "react";

export default function States() {
	const [name, setName] = useState("Vardaitis");
	const [namesList, setNamesList] = useState([]);
	return (
		<main className="mt-10">
			<p>
				<b>Jūsų vardas</b> <span>{name}</span>
			</p>
			<input
				type="text"
				placeholder="Įveskite savo vardą"
				value={name}
				onChange={(e) => {
					const newValue = e.target.value;
					setName(newValue);
				}}
			/>
			<button
				onClick={() => {
					// namesList.push(name)
					setNamesList([...namesList, name]);
					setName("");
				}}
			>
				Pridėti į sąrašą
			</button>

			<ul>
				{namesList.map((currentName, index) => (
					<li key={index}>{currentName}</li>
				))}
			</ul>
		</main>
	);
}

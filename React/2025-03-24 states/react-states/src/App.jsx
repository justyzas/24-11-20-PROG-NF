import { useState } from "react";
import States from "./States";
import ParticipantsTable from "./ParticipantsTable";

let currentParticipantNumber = 101;
function App() {
	const [participants, setParticipants] = useState([]);
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [phone, setPhone] = useState("");

	const [delParticipantNumber, setDelParticipantNumber] = useState(null);
	// Kursime formą dalyvių registracijai. Forma turės šiuos laukelius:
	// - Vardas Pavardė,
	// - Amžius,
	// - Telefono nr.

	// + Registracijos nr.

	console.log(participants);

	function addParticipant() {
		const newParticipant = {
			name,
			age: Number(age),
			phone,
			participantNumber: currentParticipantNumber,
		};
		if (newParticipant.age >= 16 && newParticipant.age <= 80) {
			//TODO: Įtraukti amžiaus patikrinimą (jei mažiau nei 16m. arba daugiau nei 80m., į sąrašą neįtraukti)

			if (participants.length === 0)
				setDelParticipantNumber(currentParticipantNumber);

			currentParticipantNumber++;
			// .push neveiks - kadangi jis neperkraus komponento, ko pasekoje vaizdas neatsinaujins
			setParticipants([...participants, newParticipant]);
			setName("");
			setAge("");
			setPhone("");
		} else {
			alert(
				"Dalyvio amžius negali būti mažesnis nei 16m. arba didesnis nei 80m."
			);
		}
	}

	function deleteParticipant() {
		if (delParticipantNumber === null) return;
		const filteredParticipants = participants.filter(
			(participant) => participant.participantNumber !== delParticipantNumber
		);
		setParticipants(filteredParticipants);
		setDelParticipantNumber(null);
	}

	return (
		<main>
			{/* <States/> */}

			<form>
				<div>
					<p>name: {name}</p>
					<p>age: {age}</p>
					<p>phone: {phone}</p>
				</div>
				<div>
					<input
						type="text"
						name="participant-name"
						placeholder="Vardas, pavardė"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="number"
						name="participant-age"
						placeholder="Amžius"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="tel"
						name="participant-phone"
						placeholder="Telefono numeris"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>

				<button
					type="button"
					onClick={addParticipant}
				>
					Įtraukti į sąrašą
				</button>
			</form>
			<hr />
			<h3>Dalyvių šalinimas</h3>

			<div>
				<select
					name="participant-number"
					value={delParticipantNumber || ""}
					onChange={(e) => {
						console.log("onChange - suveikiau!");
						setDelParticipantNumber(Number(e.target.value));
					}}
				>
					{/* <option value="101">101 - Justinas</option>
					<option value="102">102 - Justinas</option>
					<option value="103">103 - Aloyzas</option> */}
					{participants.map((participant) => (
						<option
							key={participant.participantNumber}
							value={participant.participantNumber}
						>
							{participant.participantNumber} - {participant.name}
						</option>
					))}
				</select>
				<button onClick={deleteParticipant}>Išregistruoti</button>
			</div>

			<ParticipantsTable participants={participants} />
		</main>
	);
}

export default App;

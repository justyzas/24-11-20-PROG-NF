import { useEffect, useRef, useState } from "react";

export default function InputFocusOnStart() {
	const [amzius, setAmzius] = useState("");
	const inputRef = useRef(null);
	useEffect(() => {
		if (inputRef.current) inputRef.current.focus();
	}, []);
	return (
		<form>
			<label>
				<span>Įveskite savo vardą</span>

				<input
					ref={inputRef}
					type="text"
					name="name"
					placeholder="Jonas"
				/>
			</label>
			<label>
				<span>Įveskite savo amziu</span>

				<input
					type="number"
					name="age"
					placeholder="e.g. 27"
					onChange={(e) => setAmzius(e.target.value)}
				/>
			</label>
		</form>
	);
}

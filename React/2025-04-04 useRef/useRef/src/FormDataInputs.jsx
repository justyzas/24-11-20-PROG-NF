import { useRef, useState } from "react";

export default function FormDataInputs() {
	const [count, setCount] = useState(0);
	const form = useRef(null);
	function submitHandler(e) {
		e.preventDefault();

		const formData = new FormData(form.current);

		const username = formData.get("username");
		const password = formData.get("password");
		const email = formData.get("email");

		const user = { username, email, password };
		console.log(user);
	}
	return (
		<form
			onSubmit={submitHandler}
			ref={form}
		>
			<div>
				<label>
					<span>Naudotojo vardas</span>
					<input
						type="text"
						name="username"
						placeholder="Jonaitis19"
					/>
				</label>
			</div>
			<div>
				<label>
					<span>Slaptažodis</span>
					<input
						type="password"
						name="password"
						placeholder="Jūsų norimas slaptažodis"
					/>
				</label>
			</div>
			<div>
				<label>
					<span>Elektroninis paštas</span>
					<input
						type="email"
						name="email"
						defaultValue="Jonaitis19@example.com"
						placeholder="Jonaitis19@example.com"
					/>
				</label>
			</div>
			<button type="reset">Atstatyti formą</button>
			<button type="submit">Išsiųsti formą</button>
			<button
				type="button"
				onClick={() => setCount((c) => c + 1)}
			>
				Skaičius {count}
			</button>
		</form>
	);
}

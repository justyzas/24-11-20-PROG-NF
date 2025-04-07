import { useRef } from "react";

export default function UseRefForms() {
	// const [username, setUsername] = useState("");
	const username = useRef("");
	const password = useRef("");
	const email = useRef("");
	console.log("persikroviau");

	function submitHandler(e) {
		e.preventDefault();
		const userData = {
			username: username.current,
			email: email.current,
			password: password.current,
		};
		console.log(userData);
	}
	return (
		<form onSubmit={submitHandler}>
			<div>
				<label>
					<span>Naudotojo vardas</span>
					<input
						type="text"
						name="username"
						placeholder="Jonaitis19"
						onChange={(e) => (username.current = e.target.value)}
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
						onChange={(e) => (password.current = e.target.value)}
					/>
				</label>
			</div>
			<div>
				<label>
					<span>Elektroninis paštas</span>
					<input
						type="email"
						name="email"
						placeholder="Jonaitis19@example.com"
						onChange={(e) => (email.current = e.target.value)}
					/>
				</label>
			</div>
			<button>Išsiųsti formą</button>
		</form>
	);
}

import { useState } from "react";
import { Link } from "react-router";

export default function LoginPage() {
	const [errorMessage, setErrorMessage] = useState("");
	async function handleLogin(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const loginData = {
			email: formData.get("email"),
			password: formData.get("password"),
		};
		const promise = await fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		});
		const data = await promise.json();
		if (promise.ok) location.href = "/";
		else {
			// alert(`Prisijungimo duomenys yra neteisingi!`);
			setErrorMessage(
				`${data.message}${
					data.validationMessage ? `. ${data.validationMessage}.` : ""
				}`
			);
		}
	}

	return (
		<main className="container container-padding-sm">
			<h2>Prisijungimas</h2>
			<form onSubmit={handleLogin}>
				<p className="error-message">{errorMessage}</p>
				<div>
					<label>
						<div>Elektroninio pašto adresas</div>
						<input
							type="email"
							name="email"
							id="email"
						/>
					</label>
				</div>
				<div>
					<label>
						<div>Slaptažodis</div>
						<input
							type="password"
							name="password"
							id="password"
						/>
					</label>
				</div>
				<button type="submit">Prisijungti</button>
				<p>
					Dar neturite paskyros? <Link to="/registration">Spauskite Čia!</Link>
				</p>
			</form>
		</main>
	);
}

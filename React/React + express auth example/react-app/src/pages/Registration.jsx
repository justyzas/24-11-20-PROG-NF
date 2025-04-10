import { Link } from "react-router";

export default function RegistrationPage() {
	return (
		<main className="container container-padding-sm">
			<h2>Registracija</h2>
			<form>
				<div>
					<label>
						<div>Vardas</div>
						<input
							type="text"
							name="firstName"
							id="firstName"
						/>
					</label>
				</div>
				<div>
					<label>
						<div>Pavardė</div>
						<input
							type="text"
							name="lastName"
							id="lastName"
						/>
					</label>
				</div>
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
				<button type="submit">Registruotis</button>
				<p>
					Jau turite paskyrą? <Link to="/login">Spauskite Čia!</Link>
				</p>
			</form>
		</main>
	);
}

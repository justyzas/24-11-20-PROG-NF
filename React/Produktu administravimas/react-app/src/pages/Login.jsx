import { useState } from "react";
import { Link } from "react-router";
import TextField from '@mui/material/TextField';
import { Alert, Button, Snackbar } from "@mui/material";
export default function LoginPage() {
	const [errorMessage, setErrorMessage] = useState("");
	const [open, setOpen] = useState(false);

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
			setOpen(true);
		}
	}
  
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
	
		setOpen(false);
	};

	return (
		<main className="container container-padding-sm">
			<h2>Prisijungimas</h2>
			<form onSubmit={handleLogin}>
				{/* {errorMessage && <Alert severity="error" variant="outlined" >{errorMessage}</Alert>} */}
				<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message={errorMessage}
				color="error"
				><Alert severity="error" variant="filled" onClose={handleClose}>{errorMessage}</Alert></Snackbar>
				<div>
						<TextField
							type="email"
							name="email"
							id="email"
							variant="outlined"
							margin="dense"
							label="El. Paštas"
							fullWidth
						/>
				</div>
				<div>
					
						<TextField
							type="password"
							name="password"
							id="password"
							variant="standard"
							margin="dense"
							label="Slaptažodis"
							fullWidth
						/>
				</div>
				<Button type="submit">Prisijungti</Button>
				<p>
					Dar neturite paskyros? <Link to="/registration">Spauskite Čia!</Link>
				</p>
			</form>
		</main>
	);
}

import { Button, Paper } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Links from "./Links";
export default function Navigation({ userData }) {
	async function logout() {
		const promise = await fetch("/api/auth/logout");
		if (!promise.ok) alert("Atsijungti nepavyko");
		location.href = "/login";
	}

	return (
		<Paper
			component="nav"
			id="top-navbar"
		>
			<Links />
			<p>
				<b>Vardas:</b> <span>{userData?.firstName || ""}</span>
			</p>
			<p>
				<b>Pavardė:</b> <span>{userData.lastName}</span>
			</p>
			<p>
				<b>Elektroninio pašto adresas:</b> <span>{userData.email}</span>
			</p>
			<Button
				variant="text"
				color="primary"
				endIcon={<LogoutIcon />}
				onClick={logout}
			>
				Atsijungti
			</Button>
		</Paper>
	);
}

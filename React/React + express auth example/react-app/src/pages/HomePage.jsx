export default function HomePage({ loaderData }) {
	async function logout() {
		const promise = await fetch("/api/auth/logout");
		if (!promise.ok) alert("Atsijungti nepavyko");
		location.href = "/login";
	}
	console.log(loaderData);
	return (
		<main className="container container-padding-sm">
			<p>
				<b>Vardas:</b> <span>{loaderData?.firstName || ""}</span>
			</p>
			<p>
				<b>Pavardė:</b> <span>PAVARDĖ</span>
			</p>
			<p>
				<b>Elektroninio pašto adresas:</b> <span>EL P A.</span>
			</p>
			<button onClick={logout}>Atsijungti</button>
		</main>
	);
}

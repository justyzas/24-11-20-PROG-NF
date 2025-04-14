import {useLoaderData} from "react-router";

export default function HomePage() {
	const loaderData = useLoaderData();
	async function logout() {
		const promise = await fetch("/api/auth/logout");
		if (!promise.ok) alert("Atsijungti nepavyko");
		location.href = "/login";
	}

	return (
		<main className="container container-padding-sm">
			<p>
				<b>Vardas:</b> <span>{loaderData?.firstName || ""}</span>
			</p>
			<p>
				<b>Pavardė:</b> <span>{loaderData.lastName}</span>
			</p>
			<p>
				<b>Elektroninio pašto adresas:</b> <span>{loaderData.email}</span>
			</p>
			<button onClick={logout}>Atsijungti</button>
		</main>
	);
}

import { Link } from "react-router";

export default function NotFoundPage() {
	return (
		<main className="container container-padding-sm">
			<p>Oi! Greičiausiai ne čia papuolėte!</p>
			<Link to="/">Pagrindis puslapis</Link>
		</main>
	);
}

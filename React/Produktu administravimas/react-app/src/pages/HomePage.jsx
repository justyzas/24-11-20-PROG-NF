import { useLoaderData } from "react-router";
import Navigation from "../components/Navigation";

export default function HomePage() {
	const loaderData = useLoaderData();

	return (
		<main className="container container-padding-sm">
			<Navigation userData={loaderData} />
		</main>
	);
}

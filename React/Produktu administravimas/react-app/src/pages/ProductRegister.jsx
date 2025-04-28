import Navigation from "../components/Navigation";
import { useLoaderData } from "react-router";
import ProductRegistrationForm from "../components/ProductRegistrationForm";
import { SnackbarProvider } from "notistack";

export default function ProductRegistration() {
	const loaderData = useLoaderData();
	return (
		<SnackbarProvider maxSnack={3}>
			<main className="container container-padding-sm">
				<Navigation userData={loaderData} />

				<ProductRegistrationForm />
			</main>
		</SnackbarProvider>
	);
}

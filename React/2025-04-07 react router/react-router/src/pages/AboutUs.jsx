import { redirect } from "react-router";

export default function AboutUs() {
	return <div>This is a about us page!</div>;
}

export async function loader() {
	const promise = await CallApi("Slaptazodis");
	console.log(promise);
	if (promise === "success") return { userName: "Justinas" };
	else return redirect("/");
}

function CallApi(password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (password === "Slaptazodis") resolve("success");
			else {
				reject("failed");
			}
		}, 1500);
	});
}

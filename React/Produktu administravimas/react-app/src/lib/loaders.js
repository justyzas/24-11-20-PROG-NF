import { redirect } from "react-router";

export async function loggedLoader() {
	const promise = await fetch("/api/auth/session");
	const sessionObj = await promise.json();
	const isLoggedIn = sessionObj.isLoggedIn;
	console.log("Session OBJ", sessionObj);
	if (isLoggedIn) return sessionObj;
	else return redirect("/login");
}

export async function notLoggedLoader() {
	const promise = await fetch("/api/auth/session");
	const sessionObj = await promise.json();
	const isLoggedIn = sessionObj.isLoggedIn;
	if (isLoggedIn) return redirect("/");
	else return {};
}

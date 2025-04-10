import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import * as Pages from "./pages/Index";
import { loggedLoader, notLoggedLoader } from "./lib/loaders";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Pages.HomePage,
		loader: loggedLoader,
	},
	{
		path: "/login",
		Component: Pages.LoginPage,
		loader: notLoggedLoader,
	},
	{
		path: "/registration",
		Component: Pages.RegistrationPage,
		loader: notLoggedLoader,
	},
	{
		path: "*",
		Component: Pages.NotFoundPage,
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

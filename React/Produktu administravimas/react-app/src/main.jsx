import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
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
		path: "/register-product",
		Component: Pages.ProductRegistration,
		loader: loggedLoader,
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

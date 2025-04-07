import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import * as Pages from "./pages";
import NavLayout from "./layout/NavLayout";
import { loader } from "./pages/AboutUs";
const router = createBrowserRouter([
	{
		path: "/",
		Component: NavLayout,
		children: [
			{
				path: "/",
				Component: Pages.Home,
			},
			{
				path: "/about-us",
				Component: Pages.AboutUs,
				loader,
			},
			{
				path: "/contact-us",
				Component: Pages.ContactUs,
				children: [
					{
						path: "/contact-us/it",
						Component: Pages.ContactIT,
					},
					{
						path: "/contact-us/marketing",
						Component: Pages.ContactMarketing,
					},
				],
			},
			{
				path: "*",
				Component: Pages.NotFound,
			},
		],
		// errorElement: <Pages.ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import css from "./main.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<h1 className={css.heading}>Naujas h1</h1>
	</React.StrictMode>
);

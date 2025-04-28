import { Link } from "react-router";

export default function Links() {
	return (
		<nav id="links">
			{/* <a href=""></a> */}
			<Link
				to="/"
				className="link"
			>
				Produktai
			</Link>
			<Link to="/register-product">Produkto registracija</Link>
		</nav>
	);
}

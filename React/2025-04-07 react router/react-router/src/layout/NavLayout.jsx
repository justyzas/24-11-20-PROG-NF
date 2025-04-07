import { NavLink, Outlet } from "react-router";

export default function NavLayout() {
	return (
		<main>
			<Navigation />
			<Outlet />
			<Footer />
		</main>
	);
}

function Footer() {
	return (
		<footer>
			<hr />
			&copy; All rights reserved Company
		</footer>
	);
}

function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					{/* <a href="/">Home</a> */}
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					{/* <a href="/about-us">About us</a> */}
					<NavLink to="/about-us">About us</NavLink>
				</li>
				<li>
					{/* <a href="/contact-us">Contact us</a> */}
					<NavLink to="/contact-us">Contact us</NavLink>
				</li>
			</ul>
		</nav>
	);
}

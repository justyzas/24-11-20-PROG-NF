import { Link, Outlet } from "react-router";

export default function ContactUs() {
	return (
		<div>
			<p>Welcome to a contact us page!</p>
			<ContactNav />
			<Outlet />
		</div>
	);
}

export function ContactMarketing() {
	return (
		<div>
			<p>
				<b>Mail: </b>
				<a href="mailto:marketing@comapany.it">marketing@comapany.it</a>
			</p>
			<p>
				<b>Phone: </b>
				<a href="tel:+3706706414">+3706706414</a>
			</p>
		</div>
	);
}

export function ContactIT() {
	return (
		<div>
			<p>
				<b>Mail: </b>
				<a href="mailto:information.technology@comapany.it">
					marketing@comapany.it
				</a>
			</p>
			<p>
				<b>Phone: </b>
				<a href="tel:+3706706415">+3706706415</a>
			</p>
		</div>
	);
}

function ContactNav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/contact-us/it">IT Sector</Link>
				</li>
				<li>
					<Link to="/contact-us/marketing">Marketing Sector</Link>
				</li>
			</ul>
		</nav>
	);
}

import links from "../../lib/ui-config/links";
import MenuLink from "./MenuLink";
export default function MenuLinks() {
	const mainLinks = links.slice(0, -2);
	const additionalLinks = links.slice(-2);
	return (
		<div className="flex flex-col py-4">
			{mainLinks.map((link, index) => (
				<MenuLink
					name={link.name}
					key={index}
					Icon={link.icon}
					active={index === 0}
				/>
			))}
			<hr />
			{additionalLinks.map((link, index) => (
				<MenuLink
					name={link.name}
					key={mainLinks.length - 1 + index}
					Icon={link.icon}
				/>
			))}
		</div>
	);
}

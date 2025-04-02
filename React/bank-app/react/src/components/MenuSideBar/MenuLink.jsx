export default function MenuLink({ Icon, name, active = false }) {
	return (
		<a
			href="#"
			className={`p-3 flex gap-2 items-center rounded-xl hover:text-blue-500 ${
				active ? "bg-sky-100" : ""
			}`}
		>
			<Icon />
			{name}
		</a>
	);
}

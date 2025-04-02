export default function Button({ children, background }) {
	return (
		<button
			className="font-bold text-center px-4 py-2 border rounded-lg border-gray-300 hover:shadow cursor-pointer"
			style={{
				background,
			}}
		>
			{children}
		</button>
	);
}

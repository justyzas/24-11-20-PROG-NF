export default function IconWithNumber({
	children,
	number,
	positionY = "top",
	positionX = "right",
}) {
	return (
		<span className="relative">
			{/* children - pati ikonėlė */}
			{children}
			<span
				style={{
					right: positionX === "right" ? "-14px" : "",
					left: positionX === "left" ? "-14px" : "",
					top: positionY === "top" ? "-6px" : "",
					bottom: positionY === "bottom" ? "-6px" : "",
				}}
				className="bg-red-600 text-white rounded-full min-w-[24px] inline-block text-center text-sm absolute"
			>
				{number}
			</span>
		</span>
	);
}

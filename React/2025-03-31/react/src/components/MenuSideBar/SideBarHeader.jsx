import { FaArtstation, FaRegBell } from "react-icons/fa";
export default function SideBarHeader() {
	return (
		<div className="flex justify-between items-center p-4 text-2xl ">
			<span className="flex items-center gap-4">
				<FaArtstation className="text-5xl" />
				<span>cepol.</span>
			</span>
			<FaRegBell />
		</div>
	);
}

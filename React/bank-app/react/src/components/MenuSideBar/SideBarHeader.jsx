import { FaArtstation, FaRegBell } from "react-icons/fa";
import IconWithNumber from "../ui/IconWithNumber";
export default function SideBarHeader() {
	return (
		<div className="flex justify-between items-center p-4 text-2xl ">
			<span className="flex items-center gap-4">
				<FaArtstation className="text-5xl" />
				<span>cepol.</span>
			</span>
			<IconWithNumber number={4}>
				<FaRegBell />
			</IconWithNumber>
		</div>
	);
}

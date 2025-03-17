import { Card } from "./Card";
import { AiOutlineDollar, AiFillLike } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
export default function Aplikacija() {
	return (
		<main>
			<h1>Dashboard</h1>

			<div className="card-container">
				<Card
					title="Pajamos"
					grietine="$628"
					Icon={AiOutlineDollar}
					active
				/>
				<Card
					title="Pasidalinimai"
					grietine={2434}
					Icon={IoMdShare}
				/>
				<Card
					title="Patiktukai"
					grietine={1259}
					Icon={AiFillLike}
				/>
				<Card
					title="Reitingas"
					grietine={8.5}
					Icon={FaStar}
				/>
			</div>
		</main>
	);
}

import Button from "../ui/Button";
import { TfiMoreAlt } from "react-icons/tfi";
export default function MainContent() {
	return (
		<main className="w-full p-8 grid grid-cols-1 h-min gap-4 lg:grid-cols-2">
			<h2 className="text-3xl lg:col-span-2">Good Morning, Azie!</h2>
			<p className="text-lg">Total Balance</p>
			<select className="justify-self-start lg:justify-self-end">
				<option value="">1</option>
				<option value="">2</option>
				<option value="">3</option>
			</select>
			<h3 className="text-4xl font-bold">$120.879.30</h3>
			<span className="lg:justify-self-end">
				<Button background="#b8ecfb">Withdraw</Button>
			</span>
			<p className="text-lg">My Wallet</p>
			<TfiMoreAlt className="justify-self-start lg:justify-self-end place-self-center text-2xl font-bold cursor-pointer" />
			<img
				className="col-span-full"
				src="/blue-card.png"
				alt="Your most loved credit card"
			/>
			<p className="text-lg">Recent Withdrawals</p>
			<span className="lg:justify-self-end">
				<Button>View All</Button>
			</span>
		</main>
	);
}

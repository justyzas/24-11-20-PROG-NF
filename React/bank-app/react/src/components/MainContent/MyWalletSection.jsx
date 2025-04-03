import { TfiMoreAlt } from "react-icons/tfi";
export default function MyWalletSection() {
	return (
		<>
			<h4 className="text-2xl">My Wallet</h4>
			<TfiMoreAlt className="justify-self-start lg:justify-self-end place-self-center text-2xl font-bold cursor-pointer" />
			<img
				className="col-span-full"
				src="/blue-card.png"
				alt="Your most loved credit card"
			/>
		</>
	);
}

import MainContent from "./components/MainContent";
import MenuSideBar from "./components/MenuSideBar/";

export default function App() {
	return (
		<main className="grid grid-cols-[400px_1fr] w-[10px]">
			<MenuSideBar />
			<MainContent />
		</main>
	);
}

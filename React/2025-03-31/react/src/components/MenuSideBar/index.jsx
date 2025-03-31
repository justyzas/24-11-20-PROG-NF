import Button from "../ui/Button";
import MenuLinks from "./MenuLinks";
import SideBarHeader from "./SideBarHeader";

export default function MenuSideBar() {
	return (
		<aside className="h-[100vh] border-r-2 border-[rgba(0,0,0,0.08)] p-8">
			<SideBarHeader />
			<hr />
			<MenuLinks />
			<Button background="#82f5fb">View all</Button>
		</aside>
	);
}

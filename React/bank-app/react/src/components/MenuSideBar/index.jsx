import MenuLinks from "./MenuLinks";
import SideBarHeader from "./SideBarHeader";
import SidebarPromotionCard from "./SidebarPromotionCard";

export default function MenuSideBar() {
	return (
		<aside className="h-[100vh] border-r-2 border-[rgba(0,0,0,0.08)] p-8 overflow-y-auto">
			<SideBarHeader />
			<hr />
			<MenuLinks />
			<SidebarPromotionCard />
		</aside>
	);
}

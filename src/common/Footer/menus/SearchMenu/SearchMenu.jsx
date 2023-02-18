import { SearchBar } from "@/components/organisms/SearchBar/SearchBar";
import { MenuModal } from "../../MenuModal/MenuModal";

import style from "./SearchMenu.module.css";

export const SearchMenu = ({ handleMenuActive }) => {
	return (
		<MenuModal handleMenuActive={handleMenuActive}>
			<div className={style.searchContainer}>
				<SearchBar handleMenuActive={handleMenuActive} />
			</div>
		</MenuModal>
	);
};

import style from "./MenuTitle.module.css";
import { MdBackspace } from "react-icons/md";

export const MenuTitle = ({ title, onClick }) => {
	return (
		<div className={style.menuTitleContainer}>
			<p>{title}</p>
			<div className={style.backIcon} onClick={onClick}>
				<MdBackspace />
			</div>
		</div>
	);
};

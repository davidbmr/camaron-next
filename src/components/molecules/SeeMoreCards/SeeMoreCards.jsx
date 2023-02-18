import { MdAdd } from "react-icons/md";
import style from "./SeeMoreCards.module.css";

export const SeeMoreCards = ({ onClick }) => {
	return (
		<div className={style.seeMore__container}>
			<div className={style.seeMore__content} onClick={onClick}>
				<MdAdd />
			</div>
		</div>
	);
};

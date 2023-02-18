import { AddButton } from "../../../atoms/buttons/AddButton/AddButton";
import style from "./InfoProfileAdd.module.css";

export const InfoProfileAdd = ({ onClickFunction, text }) => {
	return (
		<div className={style.infoProfileAddContainer}>
			<div className={style.buttonContainer}>
				<AddButton onClick={onClickFunction} />
			</div>

			<p className={style.infoProfileText}>{text}</p>
		</div>
	);
};

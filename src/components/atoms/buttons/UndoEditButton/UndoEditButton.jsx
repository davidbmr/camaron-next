import style from "./UndoEditButton.module.css";

import { AiOutlineUndo } from "react-icons/ai";

export const UndoEditButton = ({ onClick }) => {
	return (
		<button onClick={onClick} className={style.editButtonContainer}>
			<AiOutlineUndo />
		</button>
	);
};


UndoEditButton.defaultProps = {
	onClick: () => alert("Falta agregar la funcion onClick"),
};
import style from "./EditCheckButton.module.css";

import { AiOutlineCheck } from "react-icons/ai";

export const EditCheckButton = ({ onClick }) => {
	return (
		<button onClick={onClick} className={style.editButtonContainer}>
			<AiOutlineCheck />
		</button>
	);
};


EditCheckButton.defaultProps = {
	onClick: () => alert("Falta agregar la funcion onClick"),
};
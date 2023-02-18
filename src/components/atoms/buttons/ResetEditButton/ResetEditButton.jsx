import style from "./ResetEditButton.module.css";

import { RiDeleteBin5Line } from "react-icons/ri";

export const ResetEditButton = ({ onClick }) => {
	return (
		<button onClick={onClick} className={style.editButtonContainer}>
			<RiDeleteBin5Line />
		</button>
	);
};


ResetEditButton.defaultProps = {
	onClick: () => alert("Falta agregar la funcion onClick"),
};
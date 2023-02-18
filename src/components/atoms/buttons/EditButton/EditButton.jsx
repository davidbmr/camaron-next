import style from "./EditButton.module.css";

import { FiEdit2 } from "react-icons/fi";

export const EditButton = ({ onClick }) => {
	return (
		<button onClick={onClick} className={style.editButtonContainer}>
			<FiEdit2 />
		</button>
	);
};


EditButton.defaultProps =  {
  onClick: () => alert('Falta agregar la funcion onClick')
}
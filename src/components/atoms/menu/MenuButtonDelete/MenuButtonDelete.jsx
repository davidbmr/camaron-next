import style from "./MenuButtonDelete.module.css";

export const MenuButtonDelete = ({ onDispatch }) => {
	return (
		<div className={style.menuButtonDeleteContainer}>
			<button className={style.menuButtonDelete} onClick={onDispatch}>
				Eliminar
			</button>
		</div>
	);
};

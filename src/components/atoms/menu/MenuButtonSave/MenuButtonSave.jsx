import style from "./MenuButtonSave.module.css";

export const MenuButtonSave = ({ onDispatch }) => {
	return (
		<div className={style.menuButtonSaveContainer}>
			<button className={style.menuButtonSave} onClick={onDispatch}>
				Guardar
			</button>
		</div>
	);
};

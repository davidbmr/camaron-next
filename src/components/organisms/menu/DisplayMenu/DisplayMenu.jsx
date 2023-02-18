import style from "./DisplayMenu.module.css";

export const DisplayMenu = ({ menu, closeMenuFunction }) => {
	return (
		<>
			<div className={style.displayMenuClose} onClick={closeMenuFunction}></div>
			<div className={style.menuContainer}>{menu}</div>
		</>
	);
};

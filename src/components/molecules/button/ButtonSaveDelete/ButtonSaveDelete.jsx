import React from "react";
import { MenuButtonSave } from "../../../atoms/menu/MenuButtonSave/MenuButtonSave";
import { MenuButtonDelete } from "../../../atoms/menu/MenuButtonDelete/MenuButtonDelete";

import style from "./ButtonSaveDelete.module.css";

export const ButtonSaveDelete = ({ onDispatchSave, onDispatchDelete }) => {
	return (
		<div className={style.buttonSaveDeleteContainer}>
			<MenuButtonDelete onDispatch={onDispatchDelete} />
			<MenuButtonSave onDispatch={onDispatchSave} />
		</div>
	);
};

/**Cambiar de nombre a buttons menu, el de 1 solo llamarlo simplebuttonsmenu */
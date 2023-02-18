import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dispatchEdit } from "../../../../helpers/dispatchEdit";

import { MenuInputFile } from "../../../atoms/menu/MenuInputFile/MenuInputFile";
import { MenuTitle } from "../../../atoms/menu/MenuTitle/MenuTitle";
import { ButtonSaveDelete } from "../../button/ButtonSaveDelete/ButtonSaveDelete";

import style from "./SaveImg.module.css";

export const SaveImg = ({
	data,
	dataEdit,
	functionToDispatch,
	closeMenuFunction,
}) => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const user = useSelector((state) => state.auth.user);
	const { token } = useSelector((state) => state.auth.user);

	const [imageSelected, setImageSelected] = useState("");
	const [isLoading, setIsLoading] = useState(null);

	const uploadImage = async (files) => {
		const formData = new FormData();
		formData.append("file", files[0]);
		formData.append("upload_preset", "demo-camaron");
		setIsLoading(true);


		const { data } = await axios.post(
			"https://api.cloudinary.com/v1_1/jadh/image/upload",
			formData
		);
		// const { data } = await axios.post(
		// 	"https://api.cloudinary.com/v1_1/jadh/video/upload",
		// 	formData
		// );

		setImageSelected(data.secure_url);
		setIsLoading(false);
	};

	const handleSubmitData = () => {
		const newData = { ...data, [dataEdit.name]: imageSelected, user: user.id };
		/**Funcion del helper para que este componente se pueda usar en otros */
		/** functionToDispatch espera la funcion de los thunks de redux */
		dispatchEdit(dispatch, functionToDispatch, newData, id, token);
		closeMenuFunction();
	};

	return (
		<div className={style.menuEditForm}>
			<MenuTitle
				title={`Editar foto de ${dataEdit.title}`}
				onClick={closeMenuFunction}
			/>

			<MenuInputFile
				onChangeFunction={(event) => {
					uploadImage(event.target.files);
				}}
				isLoading={isLoading}
			/>
			<ButtonSaveDelete
				onDispatchSave={handleSubmitData}
				onDispatchDelete={() => alert("funcionalidad en desarrollo")}
			/>
		</div>
	);
};

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editInfoDashboard } from "../../../../../store/slices/dashboard/thunks";
import { dispatchEdit } from "../../../../helpers/dispatchEdit";
import { MenuButtonSave } from "../../../atoms/menu/MenuButtonSave/MenuButtonSave";
import { MenuInput } from "../../../atoms/menu/MenuInput/MenuInput";
import { MenuTitle } from "../../../atoms/menu/MenuTitle/MenuTitle";

export const SaveInfoProfile = ({
	data,
	dataEdit,
	functionToDispatch,
	closeMenuFunction,
}) => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [name, setName] = useState(dataEdit.name); //Que dato es
	const [valueData, setValueData] = useState(data[dataEdit.name]); //Saber el valor del dato
	const { token } = useSelector((state) => state.auth.user);

	const handleChangeValueData = (e) => {
		setValueData(e.target.value);
	};

	const handleSubmitNewData = () => {
		let newData = { ...data, [name]: valueData };
		dispatchEdit(dispatch, functionToDispatch, newData, id, token);
		closeMenuFunction();
	};

	return (
		<>
			<MenuTitle
				title={`Escribe tu ${dataEdit.title}`}
				onClick={closeMenuFunction}
			/>
			<MenuInput
				onChange={handleChangeValueData}
				name={name}
				value={valueData}
			/>

			<MenuButtonSave onDispatch={handleSubmitNewData} />
		</>
	);
};

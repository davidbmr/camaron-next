import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editInfoDashboard } from "../../../../../store/slices/dashboard/thunks";
import { MenuButtonSave } from "../../../atoms/menu/MenuButtonSave/MenuButtonSave";
import { MenuInput } from "../../../atoms/menu/MenuInput/MenuInput";
import { MenuTitle } from "../../../atoms/menu/MenuTitle/MenuTitle";

export const SaveContact = ({ id, data, nameSocial, closeMenuFunction }) => {
	const dispatch = useDispatch();
	const [newData, setNewData] = useState(data);
	const { token } = useSelector((state) => state.auth.user);

	const handleChangeNewData = (e, nameSocial) => {
		let contact = { ...newData.contact, [nameSocial]: e.target.value };
		setNewData({ ...newData, contact });
	};

	const handleSubmitNewData = () => {
		dispatch(editInfoDashboard(newData, id, token));
		closeMenuFunction();
	};

	return (
		<>
			<MenuTitle
				title={`Escribe tu ${nameSocial}`}
				onClick={closeMenuFunction}
			/>
			<MenuInput
				onChange={handleChangeNewData}
				name={nameSocial}
				value={newData.contact[nameSocial]}
			/>

			<MenuButtonSave onDispatch={handleSubmitNewData} />
		</>
	);
};

SaveContact.defaultProps = {
	id: null,
};

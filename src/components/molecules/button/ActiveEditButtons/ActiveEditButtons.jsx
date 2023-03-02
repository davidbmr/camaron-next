import { useDispatch, useSelector } from "react-redux";

import { EditButton } from "../../../atoms/buttons/EditButton/EditButton";

import { EditCheckButton } from "../../../atoms/buttons/EditCheckButton/EditCheckButton";

import { ResetEditButton } from "../../../atoms/buttons/ResetEditButton/ResetEditButton";

import style from "./ActiveEditButtons.module.css";
import { useRouter } from "next/router";

export const ActiveEditButtons = ({
	newData,
	functionToDispatch,
	functionToReset,
	isEditActive,
	handleIsEditActive,
}) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth.user);
	const { id } = router.query();

	const handleDispatchData = (newData, id, token) => {
		dispatch(functionToDispatch(newData, id, token));
		handleIsEditActive();
	};

	const handleResetData = () => {
		functionToReset();
	};

	return (
		<>
			{isEditActive ? (
				<div className={style.activeEditButtonsContainer}>
					<EditCheckButton onClick={() => handleDispatchData(newData, id, token)} />
					<ResetEditButton onClick={() => handleResetData()} />
				</div>
			) : (
				<EditButton onClick={handleIsEditActive} />
			)}
		</>
	);
};
